import { InputGroup } from './InputGroup';
import { Icon } from '@/components/atoms/Icon';

const meta = {
  title: 'Molecules/InputGroup',
  component: InputGroup,
};

export default meta;

export const WithLeadingIcon = {
  args: {
    placeholder: 'Search documentation...',
    leading: <Icon name="search" size="sm" />,
  },
};
