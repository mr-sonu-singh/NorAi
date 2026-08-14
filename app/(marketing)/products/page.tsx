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
    <div
      className="
        text-primary-800
        min-h-screen
        font-sans
        selection:bg-[var(--accent-500)]
        selection:text-[var(--bg-page)]

        bg-[linear-gradient(180deg,#F4F7FF_0%,#EEF2FF_25%,#F5F0FF_55%,#F4F7FF_100%)]
      "
    >
      {/* Hero Section */}
      <Section className="relative overflow-hidden isolate py-20 md:py-28">

        {/* Product Hero Cover Image - Full Background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
        >
          <img
            src="/images/hero-bg.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Tinted overlay so text/headline stay readable over the image */}
        <div aria-hidden="true" className="absolute inset-0 bg-[var(--bg-page)]/20" />
        
        {/* AI Animated Background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none overflow-hidden"
        >
          {/* Blue Glow */}
          <div
            className="
              absolute
              -left-32
              top-10
              w-[420px]
              h-[420px]
              rounded-full
              bg-blue-500/15
              blur-[120px]
              animate-pulse
            "
          />

          {/* Purple Glow */}
          <div
            className="
              absolute
              -right-32
              top-20
              w-[460px]
              h-[460px]
              rounded-full
              bg-violet-500/15
              blur-[130px]
              animate-pulse
            "
            style={{ animationDelay: '1200ms' }}
          />

          {/* Center Cyan Glow */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-[320px]
              h-[320px]
              rounded-full
              bg-cyan-400/10
              blur-[110px]
              animate-pulse
            "
          />

          {/* AI Nodes */}
          <span
            className="
              absolute left-[12%] top-[35%]
              w-2 h-2 rounded-full
              bg-blue-400
              shadow-[0_0_25px_rgba(59,130,246,0.9)]
              animate-ping
            "
          />

          <span
            className="
              absolute right-[15%] top-[30%]
              w-2 h-2 rounded-full
              bg-violet-400
              shadow-[0_0_25px_rgba(139,92,246,0.9)]
              animate-ping
            "
            style={{ animationDelay: '1s' }}
          />

          {/* Grid */}
          <div
            className="
              absolute inset-0
              opacity-40
              bg-[linear-gradient(rgba(99,102,241,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.08)_1px,transparent_1px)]
              bg-[size:48px_48px]
            "
          />
        </div>

        <Container size="default" className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">

            {/* Eyebrow */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                border
                border-white/30
                bg-white/10
                backdrop-blur-md
                text-white
                text-xs
                font-mono
                font-semibold
                tracking-wider
                uppercase
                shadow-sm
              "
            >
              <Sparkles className="w-3.5 h-3.5" />

              Self-Serve Micro-SaaS AI Utilities
            </div>

            {/* Heading */}
            <Heading
               as="h1"
                  variant="display-xl"
                  className="font-display font-extrabold text-white tracking-[-0.03em] leading-[1.08] drop-shadow-[0_2px_12px_rgba(0,0,0,0.25)]"
                >
              Instant AI Tools Built for{" "}
              <span
                className="
                  text-[#DDF7FF] underline decoration-[color:var(--accent-mono)/0.6] underline-offset-8"
              >
                High-Volume Workflows
              </span>
            </Heading>

            {/* Subhead */}
            <Text
              variant="body-lg"
              className="
                mt-6
                text-[#E8F7FF]
                font-medium
                leading-[1.8]
                max-w-3xl
                mx-auto
                drop-shadow-[0_1px_6px_rgba(0,20,50,0.35)]
              "
            >
              Sign up, connect via dashboard or REST API, and start automating
              candidate screening, lecture summarization, chat digesting, and
              news curation in under 60 seconds.
            </Text>

            {/* CTA */}
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">

              <Link href="#catalog" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  className="
                    w-full sm:w-auto
                    bg-gradient-to-r
                    from-blue-600
                    to-indigo-600
                    hover:from-blue-700
                    hover:to-violet-600
                    text-white
                    font-semibold
                    px-8
                    py-3.5
                    rounded-xl
                    shadow-lg
                    shadow-blue-500/20
                    hover:shadow-blue-500/30
                    hover:-translate-y-0.5
                    transition-all
                    duration-300
                  "
                >
                  Explore Self-Serve Tools
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>

              <Link href="/pricing" className="w-full sm:w-auto">
                <Button
                  variant="secondary"
                  size="lg"
                  className="
                    w-full sm:w-auto
                    bg-white/60
                    backdrop-blur-md
                    border
                    border-blue-400/20
                    hover:bg-white/80
                    hover:border-blue-400/40
                    text-primary-800
                    font-semibold
                    px-8
                    py-3.5
                    rounded-xl
                    shadow-sm
                    hover:-translate-y-0.5
                    transition-all
                    duration-300
                  "
                >
                  View Pricing Tiers
                </Button>
              </Link>

            </div>

            {/* Services Cross Link */}
            <div className="pt-6">
              <Link
                href="/services"
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  rounded-full
                  bg-white/10
                  backdrop-blur-md
                  border
                  border-white/30
                  text-white
                  hover:bg-white/20
                  hover:border-white/50
                  transition-all
                  text-xs
                  font-mono
                  group
                "
              >
                <Briefcase className="w-3.5 h-3.5 text-[#DDF7FF]" />

                Need custom enterprise AI engineering?

                <span className="text-[#DDF7FF] font-bold group-hover:translate-x-0.5 transition-transform">
                  Explore NorAI Services →
                </span>
              </Link>
            </div>

          </div>
        </Container>
      </Section>

      {/* Signature Element: Monospace Telemetry Bar */}
      <Section
          className="
            py-4
            border-y
            border-blue-400/10
            bg-white/30
            backdrop-blur-md
          "
        >
        <Container size="default">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono">
              <div className="flex items-center gap-2 text-primary-700">
              <Activity className="w-4 h-4 text-[var(--accent-500)]" aria-hidden="true" />
              <span className="font-bold text-primary-800 uppercase tracking-wider">CATALOG_STATUS:</span>
              <span className="text-[var(--accent-mono)]">● 4 SELF-SERVE UTILITIES READY TO DEPLOY</span>
            </div>

              <div className="flex items-center gap-2 text-primary-700">
              <span
                className="
                  inline-flex
                  items-center
                  gap-1.5
                  text-xs
                  text-blue-600
                  bg-white/40
                  backdrop-blur-sm
                  px-3
                  py-1
                  rounded-lg
                  border
                  border-blue-400/15
                "
              >
                <Terminal className="w-3.5 h-3.5 text-[var(--accent-500)]" aria-hidden="true" />
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
            <div className="text-xs font-mono text-[var(--accent-500)] uppercase font-bold tracking-widest">
              Self-Serve Product Suite
            </div>
            <Heading as="h2" variant="display-md" className="font-display font-extrabold text-primary-800">
              Instant-Deploy AI Micro-Tools
            </Heading>
            <Text variant="body-md" className="text-primary-700">
              Self-serve micro-SaaS utilities with sub-second execution speeds, predictable pricing, and zero persistent data logging.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {productsList.map((product) => {
              const IconComp = ICON_MAP[product.iconName] || Sparkles;
              return (
                <div
                  key={product.id}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    p-8
                    flex
                    flex-col
                    justify-between
                    space-y-6

                    bg-white/45
                    backdrop-blur-xl

                    border
                    border-blue-400/15

                    shadow-[0_10px_40px_rgba(59,130,246,0.06)]

                    hover:-translate-y-2
                    hover:border-blue-400/30
                    hover:shadow-[0_20px_55px_rgba(59,130,246,0.14)]

                    transition-all
                    duration-500
                  "
                >
                  {/* Card AI Glow */}
                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      -top-24
                      -right-24
                      w-56
                      h-56
                      rounded-full
                      bg-blue-500/10
                      blur-[80px]
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-500
                      pointer-events-none
                    "
                  />

                  {/* Purple Glow */}
                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      -bottom-24
                      -left-24
                      w-52
                      h-52
                      rounded-full
                      bg-violet-500/10
                      blur-[80px]
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-700
                      pointer-events-none
                    "
                  />

                  {/* Scan Line */}
                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      top-0
                      left-0
                      right-0
                      h-px
                      bg-gradient-to-r
                      from-transparent
                      via-blue-400/50
                      to-transparent
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-500
                    "
                  />

                  <div className="relative z-10 space-y-4">
                    {/* Top Monospace Bar */}
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-primary-700 font-bold tracking-wider">{product.id}</span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[color:var(--accent-500)/0.1] text-[var(--accent-mono)] border border-[color:var(--accent-500)/0.2] font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-mono)] animate-pulse" />
                        SELF-SERVE
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div
                        className="
                          p-3
                          rounded-xl
                          bg-white/40
                          backdrop-blur-md
                          border
                          border-blue-400/20
                          text-blue-600

                          group-hover:bg-blue-500/10
                          group-hover:border-blue-400/40
                          group-hover:text-blue-600
                          group-hover:scale-110
                          group-hover:rotate-2

                          transition-all
                          duration-300
                        "
                      >
                        <IconComp className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <div>
                        <Heading
                          as="h3"
                          variant="heading-lg"
                          className="
                            font-display
                            font-bold
                            text-primary-800
                            group-hover:text-blue-600
                            transition-colors
                          "
                        >
                          {product.title}
                        </Heading>
                        <span className="text-xs font-mono text-[var(--accent-mono)]">{product.badge}</span>
                      </div>
                    </div>

                    <Text variant="body-sm" className="text-primary-700 leading-relaxed">
                      {product.excerpt}
                    </Text>

                    {/* Features Preview List */}
                    <div className="pt-2 space-y-1.5">
                      {product.features.slice(0, 2).map((feat, idx) => (
                        <div key={idx} className="text-xs font-mono text-primary-700 flex items-center gap-2">
                          <span
                            className="
                              w-1.5
                              h-1.5
                              rounded-full
                              bg-blue-500
                              shadow-[0_0_10px_rgba(59,130,246,0.8)]
                              group-hover:animate-pulse
                            "
                          />
                          <span className="text-primary-800 font-medium">{feat.title}:</span> {feat.desc}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative z-10 pt-6 border-t border-blue-400/10 flex items-center justify-between text-xs font-mono">
                      <span className="text-primary-700 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[var(--accent-500)]" aria-hidden="true" /> {product.latency} Latency
                    </span>
                    <Link href={`/products/${product.slug}`} className="inline-flex items-center font-bold text-[var(--accent-500)] group-hover:text-[var(--accent-mono)]">
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