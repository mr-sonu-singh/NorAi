import { Label } from './Label';

const meta = {
  title: 'Atoms/Label',
  component: Label,
};

export default meta;

export const Default = {
  args: {
    htmlFor: 'email-input',
    children: 'Email Address',
  },
};

export const Required = {
  args: {
    htmlFor: 'email-input',
    required: true,
    children: 'Email Address',
  },
};
