import { Tabs } from './Tabs';

const meta = {
  title: 'Molecules/Tabs',
  component: Tabs,
};

export default meta;

const mockTabs = [
  { id: 'overview', label: 'Overview', content: <p>Overview panel content</p> },
  { id: 'features', label: 'Features', content: <p>Features panel content</p> },
  { id: 'specs', label: 'Specifications', content: <p>Specifications panel content</p> },
];

export const Horizontal = {
  args: {
    tabs: mockTabs,
    orientation: 'horizontal',
  },
};

export const Vertical = {
  args: {
    tabs: mockTabs,
    orientation: 'vertical',
  },
};
