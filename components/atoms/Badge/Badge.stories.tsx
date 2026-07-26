import { Badge } from './Badge';

const meta = {
  title: 'Atoms/Badge',
  component: Badge,
};

export default meta;

export const Accent = {
  args: {
    variant: 'accent',
    children: 'v1.0 Released',
  },
};

export const WithStatusDot = {
  args: {
    variant: 'success',
    showStatusDot: true,
    children: 'Operational',
  },
};
