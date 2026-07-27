import { ContactSection } from './ContactSection';

const meta = {
  title: 'Organisms/Sections/ContactSection',
  component: ContactSection,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

const sampleDirectEmails = {
  sales: 'sales@norai.tech',
  careers: 'careers@norai.tech',
  press: 'press@norai.tech',
};

const sampleSocialLinks = [
  { label: 'GitHub', href: 'https://github.com/norai', icon: 'github' },
  { label: 'Twitter', href: 'https://twitter.com/norai', icon: 'twitter' },
];

const sampleBreadcrumb = [
  { label: 'Home', href: '/' },
  { label: 'Company', href: '/company' },
  { label: 'Contact Us', href: '/contact' },
];

export const SplitVariant = {
  args: {
    heading: 'Get in Touch with Engineering & Sales',
    variant: 'split',
    breadcrumb: sampleBreadcrumb,
    directEmails: sampleDirectEmails,
    socialLinks: sampleSocialLinks,
    onSubmit: () => {},
  },
};

export const StackedVariant = {
  args: {
    heading: 'Contact Us',
    variant: 'stacked',
    directEmails: sampleDirectEmails,
    socialLinks: sampleSocialLinks,
    onSubmit: () => {},
  },
};

export const SubmittingState = {
  args: {
    heading: 'Contact Us',
    status: 'submitting',
    directEmails: sampleDirectEmails,
    onSubmit: () => {},
  },
};

export const SuccessState = {
  args: {
    heading: 'Contact Us',
    status: 'success',
    onSubmit: () => {},
  },
};

export const ErrorState = {
  args: {
    heading: 'Contact Us',
    status: 'error',
    fieldErrors: {
      email: 'Corporate email address required (e.g. name@company.com).',
    },
    onSubmit: () => {},
  },
};
