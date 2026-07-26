import { Select } from './Select';

const meta = {
  title: 'Atoms/Select',
  component: Select,
};

export default meta;

const sampleOptions = [
  { label: 'Option 1', value: 'opt1' },
  { label: 'Option 2', value: 'opt2' },
  { label: 'Option 3', value: 'opt3' },
];

export const Default = {
  args: {
    options: sampleOptions,
    placeholder: 'Choose an option...',
  },
};
