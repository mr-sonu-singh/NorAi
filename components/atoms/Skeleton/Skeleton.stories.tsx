import { Skeleton } from './Skeleton';

const meta = {
  title: 'Atoms/Skeleton',
  component: Skeleton,
};

export default meta;

export const Text = {
  args: {
    shape: 'text',
    width: '200px',
  },
};

export const Rect = {
  args: {
    shape: 'rect',
    height: '100px',
  },
};

export const Circle = {
  args: {
    shape: 'circle',
    width: '48px',
    height: '48px',
  },
};
