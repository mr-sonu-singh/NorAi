/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ContactSection } from './ContactSection';

const mockDirectEmails = {
  sales: 'sales@norai.tech',
  careers: 'careers@norai.tech',
  press: 'press@norai.tech',
};

const mockSocialLinks = [
  { label: 'GitHub', href: 'https://github.com/norai', icon: 'github' },
  { label: 'Twitter', href: 'https://twitter.com/norai', icon: 'twitter' },
];

describe('ContactSection Organism', () => {
  it('defines ContactSection component correctly', () => {
    expect(ContactSection).toBeDefined();
  });

  it('renders heading, form fields (Name, Email, Message), and submit button', () => {
    const onSubmit = jest.fn();
    const { getByRole, getByLabelText, getByText } = render(
      <ContactSection heading="Get in Touch" onSubmit={onSubmit} />,
    );

    expect(getByRole('heading', { level: 2 }).textContent).toBe('Get in Touch');
    expect(getByLabelText(/Full Name/i)).toBeTruthy();
    expect(getByLabelText(/Email Address/i)).toBeTruthy();
    expect(getByLabelText(/Message/i)).toBeTruthy();
    expect(getByText('Send Message')).toBeTruthy();
  });

  it('renders direct email links and social links when provided', () => {
    const onSubmit = jest.fn();
    const { getByText } = render(
      <ContactSection
        onSubmit={onSubmit}
        directEmails={mockDirectEmails}
        socialLinks={mockSocialLinks}
      />,
    );

    expect(getByText('sales@norai.tech')).toBeTruthy();
    expect(getByText('careers@norai.tech')).toBeTruthy();
    expect(getByText('press@norai.tech')).toBeTruthy();
    expect(getByText('GitHub')).toBeTruthy();
  });

  it('calls onSubmit with form values when submitted', () => {
    const onSubmit = jest.fn();
    const { getByLabelText, getByText } = render(
      <ContactSection onSubmit={onSubmit} />,
    );

    fireEvent.change(getByLabelText(/Full Name/i), { target: { value: 'Alex Morgan' } });
    fireEvent.change(getByLabelText(/Email Address/i), { target: { value: 'alex@example.com' } });
    fireEvent.change(getByLabelText(/Message/i), { target: { value: 'Inquiring about enterprise SLA.' } });

    fireEvent.click(getByText('Send Message'));

    expect(onSubmit).toHaveBeenCalledWith({
      name: 'Alex Morgan',
      email: 'alex@example.com',
      message: 'Inquiring about enterprise SLA.',
    });
  });

  it('displays passed-in fieldErrors correctly', () => {
    const onSubmit = jest.fn();
    const { getByText } = render(
      <ContactSection
        onSubmit={onSubmit}
        fieldErrors={{
          email: 'Invalid email domain.',
        }}
      />,
    );

    expect(getByText('Invalid email domain.')).toBeTruthy();
  });

  it('renders in-page success state when status is success', () => {
    const onSubmit = jest.fn();
    const { getByTestId, getByText } = render(
      <ContactSection onSubmit={onSubmit} status="success" />,
    );

    expect(getByTestId('contact-success-alert')).toBeTruthy();
    expect(getByText('Message Delivered')).toBeTruthy();
  });

  it('renders in-page error alert when status is error', () => {
    const onSubmit = jest.fn();
    const { getByTestId, getByText } = render(
      <ContactSection onSubmit={onSubmit} status="error" />,
    );

    expect(getByTestId('contact-error-alert')).toBeTruthy();
    expect(getByText('Submission Failed')).toBeTruthy();
  });
});
