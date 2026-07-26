import { Accordion } from './Accordion';

const meta = {
  title: 'Molecules/Accordion',
  component: Accordion,
};

export default meta;

const items = [
  { id: 'item-1', title: 'What is NorAI Platform?', content: 'NorAI is an enterprise AI infrastructure platform.' },
  { id: 'item-2', title: 'How does deployment work?', content: 'Deployment is automated through cloud containers.' },
];

export const Single = {
  args: {
    items,
    type: 'single',
  },
};

export const Multiple = {
  args: {
    items,
    type: 'multiple',
  },
};
