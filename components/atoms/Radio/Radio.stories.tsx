import { Radio } from './Radio';

const meta = {
  title: 'Atoms/Radio',
  component: Radio,
};

export default meta;

export const Default = {
  args: {
    name: 'plan',
    value: 'starter',
    'aria-label': 'Starter Plan',
  },
};

export const Selected = {
  args: {
    name: 'plan',
    value: 'pro',
    checked: true,
    'aria-label': 'Pro Plan',
  },
};
