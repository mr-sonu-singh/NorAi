export interface ProductData {
  slug: string;
  name: string;
  category: string;
  summary: string;
  image: string;
  headline: string;
  subhead: string;
  problemHeading: string;
  problemBody: string;
  capabilitiesHeading: string;
  capabilities: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  processHeading: string;
  processSteps: [
    { icon: string; title: string; description: string },
    { icon: string; title: string; description: string },
    { icon: string; title: string; description: string },
  ];
  pricingHeading: string;
  pricingTiers: Array<{
    name: string;
    price: string;
    interval?: string;
    description?: string;
    features: string[];
    highlighted?: boolean;
    ctaLabel: string;
  }>;
}

export const PRODUCTS_DATA: Record<string, ProductData> = {
  core: {
    slug: 'core',
    name: 'NorAI Core',
    category: 'Compute Platform',
    summary: 'Sub-10ms deterministic AI inference engine designed for high-throughput enterprise workloads.',
    image: '/images/products/core.jpg',
    headline: 'Sub-10ms Deterministic Neural Compute Engine',
    subhead: 'High-throughput neural workload engine designed for high-scale enterprise computation with zero-knowledge execution SLA.',
    problemHeading: 'Eliminate Neural Execution Uncertainty',
    problemBody: 'Legacy AI APIs introduce unpredictable latency spikes and unverifiable neural outputs. NorAI Core enforces deterministic hardware execution with sub-10ms latency SLA guarantees.',
    capabilitiesHeading: 'Engineered Compute Capabilities',
    capabilities: [
      {
        title: 'Sub-10ms Execution SLA',
        description: 'Guaranteed latency upper-bounds for real-time algorithmic decision pipelines.',
        icon: 'cpu',
      },
      {
        title: 'Deterministic State',
        description: 'Bit-exact reproducible neural model outputs across heterogeneous hardware clusters.',
        icon: 'layers',
      },
      {
        title: 'Hardware ZK Proofs',
        description: 'Automatic generation of STARK execution proofs for regulatory auditing.',
        icon: 'shield-check',
      },
      {
        title: 'High-Throughput Stream',
        description: 'Parallel stream processing scaling to millions of concurrent inferencing requests.',
        icon: 'zap',
      },
    ],
    processHeading: '3-Step Execution Model',
    processSteps: [
      {
        icon: 'upload-cloud',
        title: 'Ingest Payload',
        description: 'Stream model inputs via high-speed TLS endpoint.',
      },
      {
        icon: 'cpu',
        title: 'Deterministic Compute',
        description: 'Execute workload on hardware nodes with ZK tracking.',
      },
      {
        icon: 'check-circle',
        title: 'Verified Output',
        description: 'Receive bit-exact output payload with cryptographic proof.',
      },
    ],
    pricingHeading: 'Flexible Execution Plans',
    pricingTiers: [
      {
        name: 'Starter',
        price: '$999',
        interval: '/mo',
        description: 'For growing teams requiring deterministic AI SLAs.',
        features: ['Up to 10M monthly inferences', '10ms latency SLA', 'Standard ZK audit logs', 'Email support'],
        ctaLabel: 'Get Started',
      },
      {
        name: 'Scale',
        price: '$2,499',
        interval: '/mo',
        description: 'For high-scale enterprise production workloads.',
        features: ['Up to 50M monthly inferences', '5ms latency SLA', 'Real-time ZK proof verification', '24/7 Priority support'],
        highlighted: true,
        ctaLabel: 'Start Scaling',
      },
      {
        name: 'Enterprise',
        price: 'Contact Sales',
        description: 'For mission-critical compute requiring custom SLAs.',
        features: ['Custom throughput capacity', 'Dedicated hardware clusters', 'Custom ZK circuit compilation', 'Dedicated SLA guarantees'],
        ctaLabel: 'Contact Sales',
      },
    ],
  },
  vision: {
    slug: 'vision',
    name: 'NorAI Vision',
    category: 'Computer Vision',
    summary: 'Real-time multi-stream neural computer vision processor with hardware-level ZK auditability.',
    image: '/images/products/vision.jpg',
    headline: 'Real-Time Multi-Stream Neural Vision Engine',
    subhead: 'Sub-millisecond frame processing with hardware-level zero-knowledge proof generation for critical vision pipelines.',
    problemHeading: 'Verifiable Perception at Scale',
    problemBody: 'Standard vision models fail under high frame rates and lack verifiable auditability. NorAI Vision delivers deterministic multi-camera stream processing with cryptographic proof of visual analysis.',
    capabilitiesHeading: 'Vision Engine Features',
    capabilities: [
      {
        title: 'Multi-Stream Ingestion',
        description: 'Concurrent processing of up to 64 ultra-high-definition video feeds per node.',
        icon: 'video',
      },
      {
        title: 'Hardware Edge Proofs',
        description: 'Real-time ZK proof generation directly on edge inference accelerators.',
        icon: 'shield-check',
      },
      {
        title: 'Sub-Millisecond Tracking',
        description: 'Ultra-low latency frame detection and object trajectory calculation.',
        icon: 'activity',
      },
      {
        title: 'Tamper-Proof Audit',
        description: 'Cryptographic hash chain verifying frame integrity and neural bounding boxes.',
        icon: 'lock',
      },
    ],
    processHeading: 'Visual Verification Pipeline',
    processSteps: [
      {
        icon: 'upload-cloud',
        title: 'Video Feed Stream',
        description: 'Ingest multi-camera video streams with hardware timestamping.',
      },
      {
        icon: 'cpu',
        title: 'Neural Frame Analysis',
        description: 'Process frame batches through vision models on ZK nodes.',
      },
      {
        icon: 'check-circle',
        title: 'Audited Frame Output',
        description: 'Output detection metadata accompanied by STARK verification proofs.',
      },
    ],
    pricingHeading: 'Vision Processing Plans',
    pricingTiers: [
      {
        name: 'Pro Vision',
        price: '$1,499',
        interval: '/mo',
        description: 'For multi-camera automated monitoring pipelines.',
        features: ['Up to 16 concurrent video streams', 'Real-time object detection', 'Standard STARK proofs', '99.9% Uptime SLA'],
        ctaLabel: 'Get Started',
      },
      {
        name: 'Enterprise Vision',
        price: 'Contact Sales',
        description: 'For industrial and security infrastructure.',
        features: ['Unlimited video stream capacity', 'Custom edge node deployments', 'Dedicated cryptographic pipeline', '24/7 On-call engineering'],
        highlighted: true,
        ctaLabel: 'Contact Sales',
      },
    ],
  },
  security: {
    slug: 'security',
    name: 'NorAI Security',
    category: 'ZK Cryptography',
    summary: 'Cryptographic zero-knowledge proof generator for privacy-preserving neural inference.',
    image: '/images/products/security.jpg',
    headline: 'Cryptographic ZK Engine for Neural Compute',
    subhead: 'Mathematical zero-knowledge proof engine enforcing privacy and execution integrity across enterprise AI workloads.',
    problemHeading: 'Zero-Knowledge Trust for AI Workloads',
    problemBody: 'Enterprise data privacy demands verifiable neural compute without exposing proprietary model weights or sensitive dataset payloads.',
    capabilitiesHeading: 'Security & Cryptographic Primitives',
    capabilities: [
      {
        title: 'ZK-STARK Generation',
        description: 'Ultra-fast proof generation eliminating trusted setup security vulnerabilities.',
        icon: 'shield-check',
      },
      {
        title: 'Model Weight Privacy',
        description: 'Execute neural models while keeping proprietary weights fully encrypted.',
        icon: 'lock',
      },
      {
        title: 'Dataset Protection',
        description: 'Verify inference correctness without revealing underlying user inputs.',
        icon: 'database',
      },
      {
        title: 'Auditor Verification',
        description: 'Lightweight client-side verification runnable in any browser environment.',
        icon: 'check-circle',
      },
    ],
    processHeading: 'Zero-Knowledge Audit Workflow',
    processSteps: [
      {
        icon: 'upload-cloud',
        title: 'Payload Encryption',
        description: 'Encrypt sensitive input payload using ZK-friendly cryptographic scheme.',
      },
      {
        icon: 'cpu',
        title: 'STARK Proof Generation',
        description: 'Generate cryptographic proof during neural model execution.',
      },
      {
        icon: 'check-circle',
        title: 'Verifiable Certification',
        description: 'Publish lightweight proof for instant third-party audit verification.',
      },
    ],
    pricingHeading: 'Cryptographic Security Plans',
    pricingTiers: [
      {
        name: 'Pro Cryptography',
        price: '$1,999',
        interval: '/mo',
        description: 'For privacy-critical financial and health AI models.',
        features: ['Full ZK-STARK proof generation', 'Standard neural circuit library', 'Client verification SDK', 'Priority support'],
        ctaLabel: 'Get Started',
      },
      {
        name: 'Enterprise Security',
        price: 'Contact Sales',
        description: 'For defense and regulated banking infrastructure.',
        features: ['Custom ZK circuit compilation', 'Dedicated audit reporting', 'On-premise proof generation', 'Custom SLA & compliance'],
        highlighted: true,
        ctaLabel: 'Contact Sales',
      },
    ],
  },
};
