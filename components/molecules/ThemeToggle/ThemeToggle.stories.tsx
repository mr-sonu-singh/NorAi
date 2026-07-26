import { ThemeToggle } from './ThemeToggle';

const meta = {
  title: 'Molecules/ThemeToggle',
  component: ThemeToggle,
};

export default meta;

export const Unchecked = {
  args: {
    checked: false,
  },
};

export const Checked = {
  args: {
    checked: true,
  },
};

export const Disabled = {
  args: {
    disabled: true,
  },
};
