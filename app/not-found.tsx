import Link from 'next/link';
import { Container } from '@/components/foundation/Container';
import { Heading } from '@/components/foundation/Heading';
import { Text } from '@/components/foundation/Text';
import { routes } from '@/config/routes';

export default function NotFound() {
  return (
    <Container size="default" className="py-20 text-center">
      <Heading variant="display-lg" as="h1" className="mb-4">
        404 — Page Not Found
      </Heading>
      <Text variant="body-lg" className="mb-8 text-primary-400">
        The page you are looking for does not exist or has been moved.
      </Text>
      <div className="flex justify-center gap-4">
        <Link
          href={routes.home}
          className="px-6 py-3 rounded-md bg-accent-600 text-white hover:bg-accent-700 transition-colors"
        >
          Go to Homepage
        </Link>
        <Link
          href={routes.products}
          className="px-6 py-3 rounded-md bg-primary-100 text-primary-800 hover:bg-primary-200 transition-colors"
        >
          Explore Products
        </Link>
      </div>
    </Container>
  );
}
