import { StatCard } from './StatCard';

const meta = {
  title: 'Molecules/StatCard',
  component: StatCard,
};

export default meta;

export const Default = {
  args: {
    value: '99.99%',
    label: 'Uptime SLA Guarantee',
  },
};

export const WithIcon = {
  args: {
    value: '10x',
    label: 'Inference Velocity',
    icon: 'zap',
    emphasis: true,
  },
};
