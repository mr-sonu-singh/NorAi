import { routes } from './routes';

export const mainNav = [
  { title: 'Products', href: routes.products },
  { title: 'About', href: routes.about },
  { title: 'Blog', href: routes.blog },
  { title: 'Team', href: routes.team },
] as const;

export const footerNav = {
  products: [
    { title: 'Resume Shortlister', href: `${routes.products}/resume-shortlister` },
    { title: 'Document Intelligence', href: `${routes.products}/document-intelligence` },
  ],
  company: [
    { title: 'About', href: routes.about },
    { title: 'Team', href: routes.team },
    { title: 'Careers', href: routes.careers },
    { title: 'Contact', href: routes.contact },
  ],
  legal: [
    { title: 'Privacy Policy', href: routes.privacy },
    { title: 'Terms of Service', href: routes.terms },
  ],
} as const;
