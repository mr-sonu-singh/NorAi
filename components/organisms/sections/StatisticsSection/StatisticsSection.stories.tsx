import { StatisticsSection } from './StatisticsSection';

const meta = {
  title: 'Organisms/Sections/StatisticsSection',
  component: StatisticsSection,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const ThreeUpDefault = {
  args: {
    heading: 'Proven Enterprise Performance',
    stats: [
      { value: '99.99%', label: 'Guaranteed Service Availability' },
      { value: '< 15ms', label: 'Global Average Response Time', emphasis: true },
      { value: '500M+', label: 'Verified Inferences Processed' },
    ],
  },
};

export const FourUp = {
  args: {
    variant: 'fourUp',
    stats: [
      { value: '100%', label: 'Data Privacy Compliant' },
      { value: '50ms', label: 'P99 Latency' },
      { value: '10k+', label: 'Active Developers' },
      { value: '24/7', label: 'Dedicated Support' },
    ],
  },
};

export const TwoUp = {
  args: {
    heading: 'Key Metrics',
    variant: 'twoUp',
    stats: [
      { value: '99.9%', label: 'Uptime SLA' },
      { value: '2.5x', label: 'Faster Than Benchmark', emphasis: true },
    ],
  },
};
