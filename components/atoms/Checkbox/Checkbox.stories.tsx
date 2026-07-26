import { Checkbox } from './Checkbox';

const meta = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
};

export default meta;

export const Default = {
  args: {
    'aria-label': 'Accept Terms',
  },
};

export const Checked = {
  args: {
    checked: true,
    'aria-label': 'Selected',
  },
};

export const Indeterminate = {
  args: {
    indeterminate: true,
    'aria-label': 'Partially Selected',
  },
};
