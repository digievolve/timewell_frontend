import { NextRequest, NextResponse } from 'next/server';
import { transporter } from '@/lib/email/transporter';
import { emailMapping, defaultSender } from '@/config/emailConfig';
import {
  RequestCareFormData,
  CareAssessmentFormData,
  JobApplicationFormData,
  ComplaintFormData,
  FormType,
} from '@/lib/email/types';
import {
  generateRequestCareHTML,
  generateRequestCareText,
  generateCareAssessmentHTML,
  generateCareAssessmentText,
  generateJobApplicationHTML,
  generateJobApplicationText,
  generateComplaintHTML,
  generateComplaintText,
} from '@/lib/email/emailTemplates';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { formType, formData } = body;

    // Validate form type
    if (!formType || !emailMapping[formType as FormType]) {
      return NextResponse.json(
        { error: 'Invalid form type' },
        { status: 400 }
      );
    }

    // Validate form data based on type
    const validatedData = validateFormData(formType as FormType, formData);
    if (!validatedData.valid) {
      return NextResponse.json(
        { error: validatedData.error },
        { status: 400 }
      );
    }

    // Get email configuration
    const config = emailMapping[formType as FormType];
    const recipients = config.recipients;

    // Generate email content
    const { html, text, subject } = generateEmailContent(
      formType as FormType,
      validatedData.data
    );

    // Send email to each recipient
    const emailPromises = recipients.map((recipient) => {
      return transporter.sendMail({
        from: defaultSender,
        to: recipient,
        subject: subject,
        text: text,
        html: html,
        replyTo: getReplyTo(formType as FormType, validatedData.data),
      });
    });

    await Promise.all(emailPromises);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}

function validateFormData(formType: FormType, data: any) {
  switch (formType) {
    case 'requestCare':
      if (!data.name || !data.phoneNumber || !data.emailAddress || !data.careType) {
        return { valid: false, error: 'Missing required fields for care request' };
      }
      return { valid: true, data: data as RequestCareFormData };

    case 'careAssessment':
      if (!data.fullName || !data.phoneNumber || !data.emailAddress || 
          !data.whoNeedsCare || !data.careType || !data.whenNeeded) {
        return { valid: false, error: 'Missing required fields for care assessment' };
      }
      return { valid: true, data: data as CareAssessmentFormData };

    case 'jobApplication':
      if (!data.fullName || !data.phoneNumber || !data.emailAddress || !data.role) {
        return { valid: false, error: 'Missing required fields for job application' };
      }
      return { valid: true, data: data as JobApplicationFormData };

    case 'complaint':
      if (!data.name || !data.phoneNumber || !data.emailAddress || !data.complaintType) {
        return { valid: false, error: 'Missing required fields for complaint' };
      }
      return { valid: true, data: data as ComplaintFormData };

    default:
      return { valid: false, error: 'Invalid form type' };
  }
}

function generateEmailContent(formType: FormType, data: any) {
  switch (formType) {
    case 'requestCare':
      return {
        html: generateRequestCareHTML(data),
        text: generateRequestCareText(data),
        subject: emailMapping.requestCare.subject,
      };
    case 'careAssessment':
      return {
        html: generateCareAssessmentHTML(data),
        text: generateCareAssessmentText(data),
        subject: emailMapping.careAssessment.subject,
      };
    case 'jobApplication':
      return {
        html: generateJobApplicationHTML(data),
        text: generateJobApplicationText(data),
        subject: emailMapping.jobApplication.subject,
      };
    case 'complaint':
      return {
        html: generateComplaintHTML(data),
        text: generateComplaintText(data),
        subject: emailMapping.complaint.subject,
      };
    default:
      throw new Error('Invalid form type');
  }
}

function getReplyTo(formType: FormType, data: any): string {
  switch (formType) {
    case 'requestCare':
      return data.emailAddress;
    case 'careAssessment':
      return data.emailAddress;
    case 'jobApplication':
      return data.emailAddress;
    case 'complaint':
      return data.emailAddress;
    default:
      return defaultSender || '';
  }
}

export async function GET() {
  return NextResponse.json(
    { status: 'Email API is running' },
    { status: 200 }
  );
}