import { Button } from './Button';

const meta = {
  title: 'Atoms/Button',
  component: Button,
};

export default meta;

export const Primary = {
  args: {
    variant: 'primary',
    children: 'Get Started',
  },
};

export const Loading = {
  args: {
    variant: 'primary',
    loading: true,
    children: 'Submitting',
  },
};

export const Disabled = {
  args: {
    variant: 'secondary',
    disabled: true,
    children: 'Disabled Action',
  },
};
