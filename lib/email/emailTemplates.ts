import {
  RequestCareFormData,
  CareAssessmentFormData,
  JobApplicationFormData,
  ComplaintFormData,
} from './types';

// Base styles for all templates
const baseStyles = `
  body { 
    font-family: 'Segoe UI', Arial, sans-serif; 
    line-height: 1.6; 
    color: #1a1a2e; 
    margin: 0; 
    padding: 0; 
    background-color: #f4f6f9; 
  }
  .container { 
    max-width: 600px; 
    margin: 0 auto; 
    padding: 20px; 
    background-color: #ffffff; 
    border-radius: 8px; 
    box-shadow: 0 2px 8px rgba(0,0,0,0.08); 
  }
  .header { 
    background: #1a56db; 
    color: white; 
    padding: 28px 30px; 
    text-align: center; 
    border-radius: 8px 8px 0 0; 
  }
  .header-complaint { 
    background: #991b1b; 
  }
  .header h1 { 
    margin: 0; 
    font-size: 22px; 
    font-weight: 600; 
    letter-spacing: -0.3px; 
  }
  .header .subtitle { 
    margin-top: 6px; 
    font-size: 13px; 
    opacity: 0.85; 
    font-weight: 300; 
  }
  .content { 
    padding: 30px; 
  }
  .section-title { 
    color: #1a1a2e; 
    font-size: 16px; 
    font-weight: 600; 
    margin-top: 0; 
    margin-bottom: 18px; 
    padding-bottom: 8px; 
    border-bottom: 2px solid #e5e7eb; 
  }
  .field { 
    margin-bottom: 16px; 
    padding-bottom: 16px; 
    border-bottom: 1px solid #f0f0f0; 
  }
  .field:last-child { 
    border-bottom: none; 
    margin-bottom: 0; 
    padding-bottom: 0; 
  }
  .label { 
    font-weight: 600; 
    color: #4b5563; 
    font-size: 12px; 
    text-transform: uppercase; 
    letter-spacing: 0.5px; 
    margin-bottom: 3px; 
  }
  .value { 
    margin-top: 3px; 
    font-size: 15px; 
    color: #1a1a2e; 
    word-wrap: break-word; 
  }
  .badge { 
    display: inline-block; 
    padding: 3px 12px; 
    border-radius: 20px; 
    font-size: 12px; 
    font-weight: 600; 
  }
  .badge-blue { 
    background: #dbeafe; 
    color: #1a56db; 
  }
  .badge-green { 
    background: #d1fae5; 
    color: #065f46; 
  }
  .badge-yellow { 
    background: #fef3c7; 
    color: #92400e; 
  }
  .badge-red { 
    background: #fee2e2; 
    color: #991b1b; 
  }
  .badge-gray { 
    background: #f3f4f6; 
    color: #4b5563; 
  }
  .message-box { 
    background: #f8fafc; 
    padding: 14px 16px; 
    border-radius: 6px; 
    border-left: 4px solid #1a56db; 
    margin-top: 4px; 
  }
  .message-box-complaint { 
    border-left-color: #991b1b; 
  }
  .message-box-career { 
    border-left-color: #065f46; 
  }
  .divider { 
    height: 1px; 
    background: #e5e7eb; 
    margin: 20px 0; 
  }
  .footer { 
    padding: 18px 30px; 
    background: #f8fafc; 
    border-radius: 0 0 8px 8px; 
    text-align: center; 
    font-size: 12px; 
    color: #6b7280; 
    border-top: 1px solid #e5e7eb; 
  }
  .footer a { 
    color: #1a56db; 
    text-decoration: none; 
  }
  .footer .timestamp { 
    display: block; 
    margin-top: 4px; 
    font-size: 11px; 
    color: #9ca3af; 
  }
  .priority-banner { 
    background: #fee2e2; 
    border: 1px solid #fca5a5; 
    border-radius: 6px; 
    padding: 10px 14px; 
    margin-bottom: 20px; 
  }
  .priority-banner p { 
    margin: 0; 
    color: #991b1b; 
    font-size: 13px; 
    font-weight: 500; 
  }
  .contact-link { 
    color: #1a56db; 
    text-decoration: none; 
  }
  .contact-link:hover { 
    text-decoration: underline; 
  }
  .value-pre-wrap { 
    white-space: pre-wrap; 
  }
`;

// Helper function to get badge for care type
function getCareTypeBadge(careType: string): string {
  const badges: Record<string, string> = {
    'Home Care': 'badge-blue',
    'Supported Living': 'badge-green',
    'Companionship': 'badge-yellow',
  };
  return badges[careType] || 'badge-blue';
}

// Helper function to get badge for complaint type
function getComplaintTypeBadge(complaintType: string): string {
  const badges: Record<string, string> = {
    'Quality of Care': 'badge-red',
    'Staff Conduct': 'badge-red',
    'Communication': 'badge-yellow',
    'Billing Issue': 'badge-yellow',
    'Other': 'badge-gray',
  };
  return badges[complaintType] || 'badge-red';
}

// 1. Request Care Template
export const generateRequestCareHTML = (data: RequestCareFormData): string => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>${baseStyles}</style>
      </head>
      <body style="padding: 20px; background: #f4f6f9;">
        <div class="container">
          <div class="header">
            <h1>New Care Request</h1>
            <div class="subtitle">A new care request has been submitted</div>
          </div>
          <div class="content">
            <h2 class="section-title">Customer Information</h2>
            
            <div class="field">
              <div class="label">Full Name</div>
              <div class="value">${data.name}</div>
            </div>
            
            <div class="field">
              <div class="label">Phone Number</div>
              <div class="value"><a href="tel:${data.phoneNumber}" class="contact-link">${data.phoneNumber}</a></div>
            </div>
            
            <div class="field">
              <div class="label">Email Address</div>
              <div class="value"><a href="mailto:${data.emailAddress}" class="contact-link">${data.emailAddress}</a></div>
            </div>
            
            <div class="divider"></div>
            
            <div class="field">
              <div class="label">Type of Care Needed</div>
              <div class="value"><span class="badge ${getCareTypeBadge(data.careType)}">${data.careType}</span></div>
            </div>
            
            <div class="field" style="border-bottom: none; padding-bottom: 0; margin-bottom: 0;">
              <div class="label">Message</div>
              <div class="value"><div class="message-box">${data.message || 'No message provided'}</div></div>
            </div>
          </div>
          <div class="footer">
            <span>This is an automated notification from TimeWell Care Services</span>
            <span class="timestamp">Received: ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}</span>
          </div>
        </div>
      </body>
    </html>
  `;
};

// 2. Care Assessment Template
export const generateCareAssessmentHTML = (data: CareAssessmentFormData): string => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>${baseStyles}</style>
      </head>
      <body style="padding: 20px; background: #f4f6f9;">
        <div class="container">
          <div class="header">
            <h1>New Care Assessment</h1>
            <div class="subtitle">A free care assessment request has been submitted</div>
          </div>
          <div class="content">
            <h2 class="section-title">Contact Details</h2>
            
            <div class="field">
              <div class="label">Full Name</div>
              <div class="value">${data.fullName}</div>
            </div>
            
            <div class="field">
              <div class="label">Phone Number</div>
              <div class="value"><a href="tel:${data.phoneNumber}" class="contact-link">${data.phoneNumber}</a></div>
            </div>
            
            <div class="field">
              <div class="label">Email Address</div>
              <div class="value"><a href="mailto:${data.emailAddress}" class="contact-link">${data.emailAddress}</a></div>
            </div>
            
            <div class="divider"></div>
            
            <h2 class="section-title">Care Information</h2>
            
            <div class="field">
              <div class="label">Who Needs Care</div>
              <div class="value"><span class="badge badge-blue">${data.whoNeedsCare}</span></div>
            </div>
            
            <div class="field">
              <div class="label">Type of Care Needed</div>
              <div class="value"><span class="badge ${getCareTypeBadge(data.careType)}">${data.careType}</span></div>
            </div>
            
            <div class="field">
              <div class="label">When Is Care Needed</div>
              <div class="value"><span class="badge badge-yellow">${data.whenNeeded}</span></div>
            </div>
            
            <div class="field" style="border-bottom: none; padding-bottom: 0; margin-bottom: 0;">
              <div class="label">Brief Description</div>
              <div class="value"><div class="message-box">${data.description || 'No description provided'}</div></div>
            </div>
          </div>
          <div class="footer">
            <span>This is an automated notification from TimeWell Care Services</span>
            <span class="timestamp">Received: ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}</span>
          </div>
        </div>
      </body>
    </html>
  `;
};

// 3. Job Application Template
export const generateJobApplicationHTML = (data: JobApplicationFormData): string => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>${baseStyles}</style>
      </head>
      <body style="padding: 20px; background: #f4f6f9;">
        <div class="container">
          <div class="header">
            <h1>New Job Application</h1>
            <div class="subtitle">A new career application has been submitted</div>
          </div>
          <div class="content">
            <h2 class="section-title">Applicant Information</h2>
            
            <div class="field">
              <div class="label">Full Name</div>
              <div class="value">${data.fullName}</div>
            </div>
            
            <div class="field">
              <div class="label">Phone Number</div>
              <div class="value"><a href="tel:${data.phoneNumber}" class="contact-link">${data.phoneNumber}</a></div>
            </div>
            
            <div class="field">
              <div class="label">Email Address</div>
              <div class="value"><a href="mailto:${data.emailAddress}" class="contact-link">${data.emailAddress}</a></div>
            </div>
            
            <div class="divider"></div>
            
            <div class="field">
              <div class="label">Role Applying For</div>
              <div class="value"><span class="badge badge-green">${data.role}</span></div>
            </div>
            
            <div class="field" style="border-bottom: none; padding-bottom: 0; margin-bottom: 0;">
              <div class="label">Cover Letter</div>
              <div class="value"><div class="message-box message-box-career value-pre-wrap">${data.coverLetter || 'No cover letter provided'}</div></div>
            </div>
          </div>
          <div class="footer">
            <span>This is an automated notification from TimeWell Care Services</span>
            <span class="timestamp">Received: ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}</span>
          </div>
        </div>
      </body>
    </html>
  `;
};

// 4. Complaint Template
export const generateComplaintHTML = (data: ComplaintFormData): string => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>${baseStyles}</style>
      </head>
      <body style="padding: 20px; background: #f4f6f9;">
        <div class="container">
          <div class="header header-complaint">
            <h1>New Complaint</h1>
            <div class="subtitle">A complaint has been submitted and requires attention</div>
          </div>
          <div class="content">
            <div class="priority-banner">
              <p>Priority: Please acknowledge within 2 working days</p>
            </div>
            
            <h2 class="section-title">Complainant Information</h2>
            
            <div class="field">
              <div class="label">Full Name</div>
              <div class="value">${data.name}</div>
            </div>
            
            <div class="field">
              <div class="label">Phone Number</div>
              <div class="value"><a href="tel:${data.phoneNumber}" class="contact-link">${data.phoneNumber}</a></div>
            </div>
            
            <div class="field">
              <div class="label">Email Address</div>
              <div class="value"><a href="mailto:${data.emailAddress}" class="contact-link">${data.emailAddress}</a></div>
            </div>
            
            <div class="divider"></div>
            
            <div class="field">
              <div class="label">Type of Complaint</div>
              <div class="value"><span class="badge ${getComplaintTypeBadge(data.complaintType)}">${data.complaintType}</span></div>
            </div>
            
            <div class="field" style="border-bottom: none; padding-bottom: 0; margin-bottom: 0;">
              <div class="label">Complaint Details</div>
              <div class="value"><div class="message-box message-box-complaint value-pre-wrap">${data.complaintDetails || 'No details provided'}</div></div>
            </div>
          </div>
          <div class="footer">
            <span>This is an automated notification from TimeWell Care Services</span>
            <span class="timestamp">Received: ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}</span>
            <span class="timestamp" style="color: #991b1b; font-weight: 500;">Please acknowledge within 2 working days and aim to resolve within 5-10 working days</span>
          </div>
        </div>
      </body>
    </html>
  `;
};

// Plain text versions
export const generateRequestCareText = (data: RequestCareFormData): string => {
  return `
NEW CARE REQUEST
================
Received: ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}

Customer Information:
-------------------
Name: ${data.name}
Phone: ${data.phoneNumber}
Email: ${data.emailAddress}

Care Information:
---------------
Type of Care: ${data.careType}
Message: ${data.message || 'No message provided'}

---
This is an automated notification from TimeWell Care Services
  `;
};

export const generateCareAssessmentText = (data: CareAssessmentFormData): string => {
  return `
NEW CARE ASSESSMENT
===================
Received: ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}

Contact Details:
---------------
Full Name: ${data.fullName}
Phone: ${data.phoneNumber}
Email: ${data.emailAddress}

Care Information:
---------------
Who Needs Care: ${data.whoNeedsCare}
Care Type: ${data.careType}
When Needed: ${data.whenNeeded}
Description: ${data.description || 'No description provided'}

---
This is an automated notification from TimeWell Care Services
  `;
};

export const generateJobApplicationText = (data: JobApplicationFormData): string => {
  return `
NEW JOB APPLICATION
===================
Received: ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}

Applicant Information:
--------------------
Full Name: ${data.fullName}
Phone: ${data.phoneNumber}
Email: ${data.emailAddress}
Role: ${data.role}

Cover Letter:
------------
${data.coverLetter || 'No cover letter provided'}

---
This is an automated notification from TimeWell Care Services
  `;
};

export const generateComplaintText = (data: ComplaintFormData): string => {
  return `
NEW COMPLAINT
=============
Received: ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}
Priority: Please acknowledge within 2 working days

Complainant Information:
-----------------------
Name: ${data.name}
Phone: ${data.phoneNumber}
Email: ${data.emailAddress}

Complaint Details:
----------------
Type: ${data.complaintType}
Details: ${data.complaintDetails || 'No details provided'}

---
This is an automated notification from TimeWell Care Services
Please aim to resolve within 5-10 working days
  `;
};