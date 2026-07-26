import { Icon } from './Icon';

const meta = {
  title: 'Atoms/Icon',
  component: Icon,
};

export default meta;

export const Default = {
  args: {
    name: 'ArrowRight',
    size: 'md',
    strokeWidth: 1.5,
  },
};

export const Labeled = {
  args: {
    name: 'Check',
    size: 'lg',
    'aria-label': 'Success Checkmark',
  },
};
