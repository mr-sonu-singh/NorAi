import { Switch } from './Switch';

const meta = {
  title: 'Atoms/Switch',
  component: Switch,
};

export default meta;

export const Off = {
  args: {
    'aria-label': 'Enable Notifications',
  },
};

export const On = {
  args: {
    checked: true,
    'aria-label': 'Enable Notifications',
  },
};
