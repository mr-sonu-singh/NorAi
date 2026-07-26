import { Input } from './Input';

const meta = {
  title: 'Atoms/Input',
  component: Input,
};

export default meta;

export const Default = {
  args: {
    placeholder: 'Enter your email...',
    type: 'email',
  },
};

export const WithIcon = {
  args: {
    placeholder: 'Search...',
    leadingIcon: 'Search',
  },
};

export const Invalid = {
  args: {
    placeholder: 'Invalid input',
    invalid: true,
    value: 'invalid-email',
  },
};
