'use client';

import React, { useState } from 'react';
import { Section } from '@/components/foundation/Section';
import { Container } from '@/components/foundation/Container';
import { Heading } from '@/components/foundation/Heading';
import { Text } from '@/components/foundation/Text';
import { Input } from '@/components/atoms/Input';
import { Textarea } from '@/components/atoms/Textarea';
import { Button } from '@/components/atoms/Button';
import { Link } from '@/components/atoms/Link';
import { FormField } from '@/components/molecules/FormField';
import { Alert } from '@/components/molecules/Alert';
import { SocialLinks } from '@/components/molecules/SocialLinks';
import { Breadcrumb } from '@/components/molecules/Breadcrumb';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { cn } from '@/lib/utils';
import { ContactSectionProps, ContactFormData } from './ContactSection.types';

export function ContactSection({
  heading = 'Get in Touch',
  onSubmit,
  fieldErrors = {},
  status = 'idle',
  directEmails,
  variant = 'split',
  breadcrumb,
  socialLinks,
}: ContactSectionProps) {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>();
  const prefersReducedMotion = usePrefersReducedMotion();

  const [values, setValues] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const shouldAnimate = !prefersReducedMotion;
  const isSubmitting = status === 'submitting';
  const isSuccess = status === 'success';
  const isError = status === 'error';

  const nameError = fieldErrors.name;
  const emailError = fieldErrors.email;
  const messageError = fieldErrors.message;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(values);
  };

  const renderContactInfo = () => {
    if (!directEmails && !socialLinks) return null;

    return (
      <div className="space-y-8 bg-primary-50 p-8 rounded-lg border border-primary-200">
        <div>
          <Heading as="h3" variant="heading-md" className="text-primary-900 font-semibold mb-4">
            Direct Contacts
          </Heading>
          {directEmails && (
            <ul className="space-y-3 text-body-md">
              {directEmails.sales && (
                <li className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <Text variant="body-sm" className="font-medium text-primary-700">
                    Sales & Enterprise:
                  </Text>
                  <Link href={`mailto:${directEmails.sales}`} className="text-accent hover:underline">
                    {directEmails.sales}
                  </Link>
                </li>
              )}
              {directEmails.careers && (
                <li className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <Text variant="body-sm" className="font-medium text-primary-700">
                    Careers & Talent:
                  </Text>
                  <Link href={`mailto:${directEmails.careers}`} className="text-accent hover:underline">
                    {directEmails.careers}
                  </Link>
                </li>
              )}
              {directEmails.press && (
                <li className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <Text variant="body-sm" className="font-medium text-primary-700">
                    Press & Media:
                  </Text>
                  <Link href={`mailto:${directEmails.press}`} className="text-accent hover:underline">
                    {directEmails.press}
                  </Link>
                </li>
              )}
            </ul>
          )}
        </div>

        {socialLinks && socialLinks.length > 0 && (
          <div className="pt-4 border-t border-primary-200">
            <Text variant="body-sm" className="font-medium text-primary-700 mb-3">
              Follow NorAI
            </Text>
            <SocialLinks links={socialLinks} orientation="horizontal" size="md" />
          </div>
        )}
      </div>
    );
  };

  return (
    <div ref={ref}>
      <Section
        variant="default"
        className={cn(
          'relative py-16 lg:py-24 transition-all duration-normal',
          shouldAnimate && !isRevealed && 'opacity-0 translate-y-4',
          shouldAnimate && isRevealed && 'opacity-100 translate-y-0',
        )}
        data-testid="contact-section-organism"
        data-variant={variant}
        data-status={status}
        data-revealed={isRevealed}
      >
        <Container size="default">
          {breadcrumb && breadcrumb.length > 0 && (
            <div className="mb-8">
              <Breadcrumb items={breadcrumb} />
            </div>
          )}

          <div className="text-center max-w-3xl mx-auto mb-12">
            <Heading as="h2" variant="heading-xl" className="text-primary-900 font-bold tracking-tight">
              {heading}
            </Heading>
          </div>

          <div className="max-w-5xl mx-auto">
            {isSuccess ? (
              <div className="max-w-2xl mx-auto space-y-6">
                <Alert
                  severity="success"
                  title="Message Delivered"
                  message="Thank you for contacting NorAI. Our engineering and sales team will respond to your inquiry shortly."
                  data-testid="contact-success-alert"
                />
              </div>
            ) : (
              <div className={cn(variant === 'split' && (directEmails || socialLinks) ? 'grid grid-cols-1 lg:grid-cols-12 gap-12' : 'max-w-2xl mx-auto space-y-8')}>
                <div className={cn(variant === 'split' && (directEmails || socialLinks) ? 'lg:col-span-7' : 'w-full')}>
                  {isError && (
                    <div className="mb-6">
                      <Alert
                        severity="error"
                        title="Submission Failed"
                        message="An error occurred while attempting to send your message. Please verify details and try again."
                        data-testid="contact-error-alert"
                      />
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <FormField
                      id="contact-name"
                      label="Full Name"
                      error={nameError}
                      required
                    >
                      <Input
                        id="contact-name"
                        value={values.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        invalid={!!nameError}
                        placeholder="Sarah Jenkins"
                        disabled={isSubmitting}
                      />
                    </FormField>

                    <FormField
                      id="contact-email"
                      label="Email Address"
                      error={emailError}
                      required
                    >
                      <Input
                        id="contact-email"
                        type="email"
                        value={values.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        invalid={!!emailError}
                        placeholder="sarah@enterprise.com"
                        disabled={isSubmitting}
                      />
                    </FormField>

                    <FormField
                      id="contact-message"
                      label="Message"
                      error={messageError}
                      required
                    >
                      <Textarea
                        id="contact-message"
                        value={values.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        invalid={!!messageError}
                        placeholder="Describe your workload, infrastructure, or partnership requirements..."
                        rows={5}
                        disabled={isSubmitting}
                      />
                    </FormField>

                    <div>
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        fullWidth
                        loading={isSubmitting}
                        disabled={isSubmitting}
                      >
                        Send Message
                      </Button>
                    </div>
                  </form>
                </div>

                {(directEmails || socialLinks) && (
                  <div className={cn(variant === 'split' ? 'lg:col-span-5' : 'w-full mt-8')}>
                    {renderContactInfo()}
                  </div>
                )}
              </div>
            )}
          </div>
        </Container>
      </Section>
    </div>
  );
}
