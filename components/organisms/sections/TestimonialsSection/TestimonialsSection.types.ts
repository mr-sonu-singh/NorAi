export interface Testimonial {
  quote: string;
  authorName: string;
  authorRole: string;
  avatar?: string;
}

export interface TestimonialsSectionProps {
  heading: string;
  testimonials: Testimonial[];
}
