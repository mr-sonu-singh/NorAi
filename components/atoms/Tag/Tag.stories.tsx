import { Tag } from './Tag';

const meta = {
  title: 'Atoms/Tag',
  component: Tag,
};

export default meta;

export const Default = {
  args: {
    children: 'Frontend',
    variant: 'neutral',
  },
};

export const Removable = {
  args: {
    children: 'React 19',
    variant: 'accent',
    removable: true,
  },
};
