import { Chip } from './Chip';

const meta = {
  title: 'Atoms/Chip',
  component: Chip,
};

export default meta;

export const Unselected = {
  args: {
    children: 'Machine Learning',
    selected: false,
  },
};

export const Selected = {
  args: {
    children: 'Natural Language Processing',
    selected: true,
  },
};
