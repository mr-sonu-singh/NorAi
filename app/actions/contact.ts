'use server';

import { submitContactForm, type ServiceResponse } from '@/lib/services/contact';
import type { ContactFormData } from '@/lib/schemas/contact';

export async function handleContactSubmission(formData: ContactFormData): Promise<ServiceResponse> {
  return await submitContactForm(formData);
}
