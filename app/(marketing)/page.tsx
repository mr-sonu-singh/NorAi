import { Heading } from '@/components/foundation/Heading';
import { Text } from '@/components/foundation/Text';

export default function HomePage() {
  return (
    <div className="py-12">
      <Heading variant="display-lg" as="h1" className="mb-4">
        NorAI Technologies
      </Heading>
      <Text variant="body-lg" className="text-primary-400">
        AI That Actually Works
      </Text>
    </div>
  );
}
