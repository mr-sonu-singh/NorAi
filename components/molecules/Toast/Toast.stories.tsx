import { Toast } from './Toast';

const meta = {
  title: 'Molecules/Toast',
  component: Toast,
};

export default meta;

export const Default = {
  args: {
    severity: 'success',
    title: 'Changes Saved',
    message: 'Your profile updates have been published.',
  },
};

export const WithAction = {
  args: {
    severity: 'info',
    title: 'Update Available',
    message: 'A new version of the AI engine is ready.',
    actionLabel: 'Update Now',
  },
};
