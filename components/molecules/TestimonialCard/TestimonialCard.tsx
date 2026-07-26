import React from 'react';
import { Avatar } from '@/components/atoms/Avatar';
import { Text } from '@/components/foundation/Text';
import { Heading } from '@/components/foundation/Heading';
import { Stack } from '@/components/foundation/Stack';
import { cn } from '@/lib/utils';
import { TestimonialCardProps } from './TestimonialCard.types';

export function TestimonialCardBody({
  quote,
  authorName,
  authorRole,
  authorCompany,
  avatarSrc,
  className,
  ...props
}: TestimonialCardProps) {
  return (
    <figure
      className={cn('p-6 bg-elevated border border-primary-200 rounded-lg w-full', className)}
      data-testid="testimonial-card-molecule"
      {...props}
    >
      <Stack direction="col" gap="4">
        <blockquote className="m-0">
          <Text as="p" className="text-body-md text-primary font-serif italic leading-relaxed">
            &ldquo;{quote}&rdquo;
          </Text>
        </blockquote>

        <figcaption className="inline-flex items-center gap-3 pt-2">
          <Avatar src={avatarSrc} alt={authorName} size="md" />
          <div className="space-y-0.5">
            <Heading as="h4" variant="heading-xs" className="font-semibold text-primary">
              {authorName}
            </Heading>
            <Text as="p" className="text-body-xs text-primary-400">
              {authorRole}
              {authorCompany ? `, ${authorCompany}` : ''}
            </Text>
          </div>
        </figcaption>
      </Stack>
    </figure>
  );
}

export function TestimonialCard(props: TestimonialCardProps) {
  return <TestimonialCardBody {...props} />;
}
