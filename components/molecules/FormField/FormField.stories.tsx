import { FormField } from './FormField';
import { Input } from '@/components/atoms/Input';

const meta = {
  title: 'Molecules/FormField',
  component: FormField,
};

export default meta;

export const Default = {
  args: {
    id: 'email-field',
    label: 'Email Address',
    hint: 'Enter your work email address',
    control: <Input type="email" placeholder="name@company.com" />,
  },
};

export const WithError = {
  args: {
    id: 'email-error-field',
    label: 'Email Address',
    error: 'Please enter a valid email address',
    control: <Input type="email" value="invalid-email" />,
  },
};
