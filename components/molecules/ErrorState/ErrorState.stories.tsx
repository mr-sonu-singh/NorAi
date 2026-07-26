import { ErrorState } from './ErrorState';
import { Button } from '@/components/atoms/Button';

const meta = {
  title: 'Molecules/ErrorState',
  component: ErrorState,
};

export default meta;

export const Default = {
  args: {
    title: 'Unable to load content',
    description: 'We encountered a connection issue while fetching data.',
    primaryAction: <Button variant="primary" size="sm">Try Again</Button>,
  },
};
