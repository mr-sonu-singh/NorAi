import { Alert } from './Alert';

const meta = {
  title: 'Molecules/Alert',
  component: Alert,
};

export default meta;

export const Info = {
  args: {
    severity: 'info',
    title: 'System Maintenance',
    message: 'Scheduled maintenance is taking place on Sunday at 02:00 UTC.',
  },
};

export const Success = {
  args: {
    severity: 'success',
    title: 'Deployment Complete',
    message: 'Your new AI pipeline model has been deployed successfully.',
  },
};

export const Error = {
  args: {
    severity: 'error',
    title: 'Connection Failed',
    message: 'Unable to reach the server. Please check your network connection.',
  },
};
