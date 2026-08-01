import React from 'react';
import { PRODUCTS_DATA } from '@/lib/products';
import { Container } from '@/components/foundation/Container';
import { Section } from '@/components/foundation/Section';
import { Heading } from '@/components/foundation/Heading';
import { Text } from '@/components/foundation/Text';
import { Button } from '@/components/atoms/Button';
import { Link } from '@/components/atoms/Link';
import {
  Sparkles,
  Zap,
  Cpu,
  Layers,
  ArrowRight,
  Clock,
  Terminal,
  Activity,
  Briefcase,
} from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  Sparkles,
  Zap,
  Cpu,
  Layers,
};

export default function ProductsPage() {
  const productsList = Object.values(PRODUCTS_DATA);

  return (
    <div className="dark-ambient-bg text-slate-100 min-h-screen font-sans selection:bg-[#0CCAB1] selection:text-[#0B0F17]">
      {/* Hero Section */}
      <Section className="relative pt-12 pb-14 md:pt-20 md:pb-16 overflow-hidden">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#0CCAB1]/30 bg-[#0CCAB1]/10 text-[#45F7D6] text-xs font-mono tracking-wide uppercase">
              <Terminal className="w-3.5 h-3.5 text-[#0CCAB1]" aria-hidden="true" />
              <span>Self-Serve Micro-SaaS AI Utilities</span>
            </div>

            {/* Headline */}
            <Heading
              as="h1"
              variant="display-xl"
              className="font-display font-extrabold tracking-tight text-white leading-tight"
            >
              Instant AI Tools Built for{' '}
              <span className="text-[#0CCAB1] underline decoration-[#0CCAB1]/40 underline-offset-8">
                High-Volume Workflows
              </span>
            </Heading>

            {/* Subhead */}
            <Text variant="body-lg" className="text-slate-300 font-normal leading-relaxed">
              Sign up, connect via dashboard or REST API, and start automating candidate screening, lecture summarization, chat digesting, and news curation in under 60 seconds.
            </Text>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="#catalog" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full sm:w-auto bg-[#0CCAB1] hover:bg-[#45F7D6] text-[#0B0F17] font-semibold px-8 py-3.5 rounded-lg shadow-lg shadow-[#0CCAB1]/20 transition-all">
                  Explore Self-Serve Tools <ArrowRight className="w-4 h-4 ml-2 inline-block" aria-hidden="true" />
                </Button>
              </Link>
              <Link href="/pricing" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto border-white/10 bg-white/5 hover:bg-white/10 text-white px-8 py-3.5 rounded-lg backdrop-blur-md">
                  View Pricing Tiers
                </Button>
              </Link>
            </div>

            {/* Quiet Mirrored Cross-Link to /services */}
            <div className="pt-2">
              <Link href="/services" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-[#131924]/60 text-slate-300 hover:text-white hover:border-[#0CCAB1]/40 transition-all text-xs font-mono group">
                <Briefcase className="w-3.5 h-3.5 text-[#0CCAB1]" aria-hidden="true" />
                <span>Need custom enterprise engineering or bespoke AI models instead?</span>
                <span className="text-[#0CCAB1] font-bold group-hover:translate-x-0.5 transition-transform">
                  Explore NorAI Services &rarr;
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Signature Element: Monospace Telemetry Bar */}
      <Section className="py-4 border-y border-white/10 bg-[#131924]/60">
        <Container size="default">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-2 text-slate-400">
              <Activity className="w-4 h-4 text-[#0CCAB1]" aria-hidden="true" />
              <span className="font-bold text-white uppercase tracking-wider">CATALOG_STATUS:</span>
              <span className="text-[#45F7D6]">● 4 SELF-SERVE UTILITIES READY TO DEPLOY</span>
            </div>

            <div className="flex items-center gap-2 text-slate-400">
              <span className="inline-flex items-center gap-1.5 text-xs text-[#45F7D6] bg-[#0B0F17] px-3 py-1 rounded border border-white/10">
                <Terminal className="w-3.5 h-3.5 text-[#0CCAB1]" aria-hidden="true" />
                INSTANT API ACCESS &amp; DASHBOARD DEPLOYMENT
              </span>
            </div>
          </div>
        </Container>
      </Section>

      {/* Product Catalog Grid */}
      <Section id="catalog" className="py-16">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="text-xs font-mono text-[#0CCAB1] uppercase font-bold tracking-widest">
              Self-Serve Product Suite
            </div>
            <Heading as="h2" variant="display-md" className="font-display font-extrabold text-white">
              Instant-Deploy AI Micro-Tools
            </Heading>
            <Text variant="body-md" className="text-slate-400">
              Self-serve micro-SaaS utilities with sub-second execution speeds, predictable pricing, and zero persistent data logging.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {productsList.map((product) => {
              const IconComp = ICON_MAP[product.iconName] || Sparkles;
              return (
                <div
                  key={product.id}
                  className="bg-[#131924] border border-white/10 rounded-xl p-8 flex flex-col justify-between space-y-6 hover:border-[#0CCAB1]/40 transition-all group"
                >
                  <div className="space-y-4">
                    {/* Top Monospace Bar */}
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-500 font-bold tracking-wider">{product.id}</span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#0CCAB1]/10 text-[#45F7D6] border border-[#0CCAB1]/20 font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#45F7D6] animate-pulse" />
                        SELF-SERVE
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-[#0CCAB1]/10 border border-[#0CCAB1]/20 text-[#0CCAB1] group-hover:scale-105 transition-transform">
                        <IconComp className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <div>
                        <Heading as="h3" variant="heading-lg" className="font-display font-bold text-white group-hover:text-[#0CCAB1] transition-colors">
                          {product.title}
                        </Heading>
                        <span className="text-xs font-mono text-[#45F7D6]">{product.badge}</span>
                      </div>
                    </div>

                    <Text variant="body-sm" className="text-slate-300 leading-relaxed">
                      {product.excerpt}
                    </Text>

                    {/* Features Preview List */}
                    <div className="pt-2 space-y-1.5">
                      {product.features.slice(0, 2).map((feat, idx) => (
                        <div key={idx} className="text-xs font-mono text-slate-400 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0CCAB1]" />
                          <span className="text-white font-medium">{feat.title}:</span> {feat.desc}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#0CCAB1]" aria-hidden="true" /> {product.latency} Latency
                    </span>
                    <Link href={`/products/${product.slug}`} className="inline-flex items-center font-bold text-[#0CCAB1] group-hover:text-[#45F7D6]">
                      Explore Tool <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>
    </div>
  );
}
