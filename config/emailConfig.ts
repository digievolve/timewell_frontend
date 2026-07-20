export const emailConfig = {
  host: 'smtp.zoho.eu',
  port: 465,
  secure: true,
  auth: {
    user: process.env.ZOHO_EMAIL_USER,
    pass: process.env.ZOHO_EMAIL_PASSWORD,
  },
};

export const defaultSender = process.env.ZOHO_EMAIL_USER;

// Email mappings for different form types
export const emailMapping = {
  requestCare: {
    recipients: ['contact@timewellcareservices.co.uk'],
    subject: 'New Care Request',
  },
  careAssessment: {
    recipients: ['assesment@timewellcareservices.co.uk'],
    subject: 'New Care Assessment',
  },
  jobApplication: {
    recipients: ['careers@timewellcareservices.co.uk'],
    subject: 'New Job Application',
  },
  complaint: {
    recipients: ['contact@timewellcareservices.co.uk'],
    subject: '⚠️ New Complaint',
  },
};