import React from 'react';
import { ProductCard } from './ProductCard';

const meta = {
  title: 'Organisms/Cards/ProductCard',
  component: ProductCard,
};

export default meta;

export const Default = () => (
  <ProductCard
    name="NorAI Inference Engine"
    summary="Sub-10ms deterministic execution engine with cryptographic zero-knowledge proofs."
    href="/products/inference-engine"
    category="Core Compute"
  />
);

export const Expanded = () => (
  <ProductCard
    name="NorAI Enterprise Suite"
    summary="Complete end-to-end platform for verifiable AI workloads with strict SLA guarantees."
    href="/products/enterprise-suite"
    category="Enterprise"
    variant="Expanded"
  />
);

export const Loading = () => (
  <ProductCard
    name="Pending Product"
    summary="Summary"
    href="/products/pending"
    pending
  />
);
