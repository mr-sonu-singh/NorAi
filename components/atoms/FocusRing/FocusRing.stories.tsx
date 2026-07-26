import React from 'react';
import { FocusRing } from './FocusRing';

const meta = {
  title: 'Atoms/FocusRing',
  component: FocusRing,
};

export default meta;

export const Default = {
  render: () => (
    <FocusRing>
      <button className="px-4 py-2 bg-primary-800 text-white rounded-md">Focusable Button</button>
    </FocusRing>
  ),
};
