import { IconButton } from './IconButton';

const meta = {
  title: 'Atoms/IconButton',
  component: IconButton,
};

export default meta;

export const Default = {
  args: {
    icon: 'X',
    'aria-label': 'Close modal',
    variant: 'ghost',
  },
};

export const PrimaryRound = {
  args: {
    icon: 'Plus',
    'aria-label': 'Add item',
    variant: 'primary',
    shape: 'round',
  },
};
