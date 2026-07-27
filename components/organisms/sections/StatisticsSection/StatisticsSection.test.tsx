/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React from 'react';
import { render } from '@testing-library/react';
import { StatisticsSection } from './StatisticsSection';

const mockStats = [
  { value: '99.99%', label: 'Uptime SLA' },
  { value: '< 10ms', label: 'Inference Latency' },
  { value: '10M+', label: 'Daily API Requests' },
];

describe('StatisticsSection Organism', () => {
  it('defines StatisticsSection component correctly', () => {
    expect(StatisticsSection).toBeDefined();
  });

  it('renders stats items correctly', () => {
    const { getByText } = render(<StatisticsSection stats={mockStats} />);
    expect(getByText('99.99%')).toBeTruthy();
    expect(getByText('Uptime SLA')).toBeTruthy();
    expect(getByText('< 10ms')).toBeTruthy();
    expect(getByText('Inference Latency')).toBeTruthy();
    expect(getByText('10M+')).toBeTruthy();
    expect(getByText('Daily API Requests')).toBeTruthy();
  });

  it('renders heading when provided', () => {
    const { getByText } = render(
      <StatisticsSection
        stats={mockStats}
        heading="Proven Performance"
      />,
    );
    expect(getByText('Proven Performance')).toBeTruthy();
  });

  it('renders twoUp variant when specified or when 2 stats provided', () => {
    const twoStats = [
      { value: '100%', label: 'Security' },
      { value: '24/7', label: 'Support' },
    ];
    const { getByTestId } = render(<StatisticsSection stats={twoStats} />);
    const container = getByTestId('statistics-section-organism');
    expect(container.getAttribute('data-variant')).toBe('twoUp');
  });

  it('renders fourUp variant when specified', () => {
    const fourStats = [
      { value: '1', label: 'One' },
      { value: '2', label: 'Two' },
      { value: '3', label: 'Three' },
      { value: '4', label: 'Four' },
    ];
    const { getByTestId } = render(
      <StatisticsSection stats={fourStats} variant="fourUp" />,
    );
    const container = getByTestId('statistics-section-organism');
    expect(container.getAttribute('data-variant')).toBe('fourUp');
  });
});
