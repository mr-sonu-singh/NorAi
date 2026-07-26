import { LoadingState } from './LoadingState';

const meta = {
  title: 'Molecules/LoadingState',
  component: LoadingState,
};

export default meta;

export const Spinner = {
  args: {
    variant: 'spinner',
    label: 'Fetching AI analytics data...',
  },
};

export const Skeleton = {
  args: {
    variant: 'skeleton',
    label: 'Loading layout placeholder...',
  },
};
