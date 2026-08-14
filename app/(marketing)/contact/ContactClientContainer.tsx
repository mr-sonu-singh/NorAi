'use client';

import React, { useState } from 'react';
import { ContactSection } from '@/components/organisms/sections/ContactSection';
import { ContactFormData, ContactSectionStatus } from '@/components/organisms/sections/ContactSection/ContactSection.types';

export interface ContactClientContainerProps {
  onSubmit?: (data: ContactFormData) => Promise<void> | void;
}

export function ContactClientContainer({ onSubmit }: ContactClientContainerProps = {}) {
  const [status, setStatus] = useState<ContactSectionStatus>('idle');

  const handleSubmit = async (data: ContactFormData) => {
    setStatus('submitting');
    try {
      if (onSubmit) {
        await onSubmit(data);
      }
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const directEmailConfig = {
    sales: 'sales@norai.asia',
    careers: 'careers@norai.asia',
    press: 'press@norai.asia',
  };

  const socialLinksConfig = [
    { label: 'GitHub', href: 'https://github.com/norai-tech', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/norai-technologies', icon: 'linkedin' },
    { label: 'X (Twitter)', href: 'https://x.com/NoraiTech', icon: 'twitter' },
  ];

  return (
    <ContactSection
      heading="Contact NorAi Engineering & Sales"
      variant="split"
      status={status}
      onSubmit={handleSubmit}
      directEmails={directEmailConfig}
      socialLinks={socialLinksConfig}
    />
  );
}

