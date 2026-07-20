export interface RequestCareFormData {
  name: string;
  phoneNumber: string;
  emailAddress: string;
  careType: string;
  message: string;
}

export interface CareAssessmentFormData {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  whoNeedsCare: 'Myself' | 'Family Member' | 'Friend';
  careType: 'Home Care' | 'Supported Living' | 'Companionship';
  whenNeeded: 'Immediately' | 'Within 1-2 weeks' | 'Within 1 month';
  description: string;
}

export interface JobApplicationFormData {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  role: string;
  coverLetter: string;
}

export interface ComplaintFormData {
  name: string;
  phoneNumber: string;
  emailAddress: string;
  complaintType: string;
  complaintDetails: string;
}

export type FormType = 'requestCare' | 'careAssessment' | 'jobApplication' | 'complaint';