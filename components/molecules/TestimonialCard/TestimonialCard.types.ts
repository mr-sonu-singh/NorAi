import React from 'react';

export interface TestimonialCardProps extends React.HTMLAttributes<HTMLDivElement> {
  quote: string;
  authorName: string;
  authorRole: string;
  authorCompany?: string;
  avatarSrc?: string;
  className?: string;
}

export type TestimonialCardBodyProps = TestimonialCardProps;
