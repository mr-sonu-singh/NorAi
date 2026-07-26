import { PricingCard } from './PricingCard';
import { Button } from '@/components/atoms/Button';

const meta = {
  title: 'Molecules/PricingCard',
  component: PricingCard,
};

export default meta;

export const Standard = {
  args: {
    tierName: 'Pro Tier',
    price: '$99',
    interval: 'mo',
    description: 'For growing teams requiring scalable AI infrastructure.',
    features: ['Up to 10 Agent Workflows', 'Standard Support', '99.9% Uptime SLA'],
    cta: <Button variant="secondary" className="w-full">Get Started</Button>,
  },
};

export const Highlighted = {
  args: {
    tierName: 'Enterprise Tier',
    price: '$299',
    interval: 'mo',
    highlighted: true,
    badgeText: 'Recommended',
    description: 'Full autonomy for high-scale enterprise operations.',
    features: ['Unlimited Workflows', 'Dedicated 24/7 Support', 'Custom Fine-Tuning'],
    cta: <Button variant="primary" className="w-full">Start Free Trial</Button>,
  },
};
