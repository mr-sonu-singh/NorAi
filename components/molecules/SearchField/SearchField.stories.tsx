import { SearchField } from './SearchField';

const meta = {
  title: 'Molecules/SearchField',
  component: SearchField,
};

export default meta;

export const Empty = {
  args: {
    placeholder: 'Search articles, guides, and releases...',
  },
};

export const WithValue = {
  args: {
    value: 'Artificial Intelligence',
  },
};
