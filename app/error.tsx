'use client';

import { useEffect } from 'react';
import { Container } from '@/components/foundation/Container';
import { Heading } from '@/components/foundation/Heading';
import { Text } from '@/components/foundation/Text';

export default function RootError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Root error boundary caught error:', error);
  }, [error]);

  return (
    <Container size="default" className="py-20 text-center">
      <Heading variant="heading-xl" as="h1" className="mb-4">
        Something went wrong
      </Heading>
      <Text variant="body-lg" className="mb-8 text-primary-400">
        An unexpected error occurred. Please try again or return to the homepage.
      </Text>
      <button
        type="button"
        onClick={() => reset()}
        className="px-6 py-3 rounded-md bg-accent-600 text-white hover:bg-accent-700 transition-colors"
      >
        Try again
      </button>
    </Container>
  );
}
