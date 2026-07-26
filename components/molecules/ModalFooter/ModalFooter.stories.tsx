import { ModalFooter } from './ModalFooter';
import { Button } from '@/components/atoms/Button';

const meta = {
  title: 'Molecules/ModalFooter',
  component: ModalFooter,
};

export default meta;

export const Default = {
  args: {
    secondaryAction: <Button variant="secondary">Cancel</Button>,
    primaryAction: <Button variant="primary">Confirm</Button>,
  },
};
