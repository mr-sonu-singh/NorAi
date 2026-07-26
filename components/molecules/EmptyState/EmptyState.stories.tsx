import { EmptyState } from './EmptyState';
import { Button } from '@/components/atoms/Button';

const meta = {
  title: 'Molecules/EmptyState',
  component: EmptyState,
};

export default meta;

export const Default = {
  args: {
    title: 'No articles found',
    description: 'Try adjusting your search or filters to find what you are looking for.',
    action: <Button variant="secondary" size="sm">Clear Search</Button>,
  },
};
