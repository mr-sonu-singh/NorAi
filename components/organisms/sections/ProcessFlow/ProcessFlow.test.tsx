/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React from 'react';
import { render } from '@testing-library/react';
import { ProcessFlow } from './ProcessFlow';

const mockSteps = [
  {
    icon: 'upload-cloud',
    title: 'Raw Workload Input',
    description: 'Ingest raw neural model prompts or dataset payloads via secure TLS stream.',
  },
  {
    icon: 'cpu',
    title: 'Deterministic AI Execution',
    description: 'Execute payload on verified hardware nodes and generate ZK-STARK proofs.',
  },
  {
    icon: 'check-circle',
    title: 'Verified Proof Output',
    description: 'Receive cryptographically audited response with cryptographic guarantees.',
  },
];

describe('ProcessFlow Organism', () => {
  it('defines ProcessFlow component correctly', () => {
    expect(ProcessFlow).toBeDefined();
  });

  it('renders heading, exactly 3 ordered steps, and step captions', () => {
    const { getByRole, getByText } = render(
      <ProcessFlow heading="Unified Product Workflow" steps={mockSteps} />,
    );

    expect(getByRole('heading', { level: 2 }).textContent).toBe('Unified Product Workflow');
    expect(getByText('Raw Workload Input')).toBeTruthy();
    expect(getByText('Deterministic AI Execution')).toBeTruthy();
    expect(getByText('Verified Proof Output')).toBeTruthy();
    expect(getByText('Step 01')).toBeTruthy();
    expect(getByText('Step 02')).toBeTruthy();
    expect(getByText('Step 03')).toBeTruthy();
  });

  it('enforces ordered list semantics and hides connectors for keyboard accessibility', () => {
    const { container, getAllByRole } = render(
      <ProcessFlow heading="Workflow" steps={mockSteps} />,
    );

    const list = container.querySelector('ol');
    expect(list).toBeTruthy();

    const items = getAllByRole('listitem');
    expect(items).toHaveLength(3);

    const connectors = container.querySelectorAll('[aria-hidden="true"]');
    expect(connectors.length).toBeGreaterThan(0);
  });

  it('verifies responsive layout assumptions for Horizontal vs Vertical variants', () => {
    const { getByTestId, rerender, container } = render(
      <ProcessFlow heading="Workflow" steps={mockSteps} variant="Horizontal" />,
    );

    let section = getByTestId('process-flow-organism');
    expect(section.getAttribute('data-variant')).toBe('Horizontal');

    let list = container.querySelector('ol');
    expect(list.className).toContain('md:grid-cols-3');

    rerender(<ProcessFlow heading="Workflow" steps={mockSteps} variant="Vertical" />);
    section = getByTestId('process-flow-organism');
    expect(section.getAttribute('data-variant')).toBe('Vertical');

    list = container.querySelector('ol');
    expect(list.className).toContain('max-w-xl');
    expect(list.className).not.toContain('md:grid-cols-3');
  });
});
