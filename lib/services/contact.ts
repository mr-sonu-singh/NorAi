import { contactFormSchema, type ContactFormData } from '@/lib/schemas';

export interface ServiceResponse {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
}

export async function submitContactForm(data: ContactFormData): Promise<ServiceResponse> {
  const validation = contactFormSchema.safeParse(data);
  if (!validation.success) {
    return {
      success: false,
      message: 'Validation failed',
      errors: validation.error.flatten().fieldErrors,
    };
  }

  return {
    success: true,
    message: 'Thank you for reaching out. We will get back to you shortly.',
  };
}
