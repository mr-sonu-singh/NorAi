import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Bricolage_Grotesque } from 'next/font/google';
import { buildMetadata } from '@/lib/seo/metadata';
import { ThemeTokenProvider, MotionProvider, AnalyticsProvider, ToastProvider } from '@/providers';
import { BackgroundProvider } from '@/providers/BackgroundProvider';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
});

export const metadata: Metadata = buildMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${bricolageGrotesque.variable}`}>
      <body
        className="min-h-screen text-primary-800 font-sans antialiased"
        style={{
          background:
            'var(--site-bg, linear-gradient(135deg, rgba(46,91,255,0.06) 0%, rgba(124,58,237,0.05) 50%, rgba(59,110,246,0.06) 100%))',
          backgroundColor: 'rgb(245, 244, 252)',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
        }}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-bg-elevated focus:text-primary-800"
        >
          Skip to main content
        </a>
        <ThemeTokenProvider>
          <BackgroundProvider>
            <MotionProvider>
              <AnalyticsProvider>
                <ToastProvider>{children}</ToastProvider>
              </AnalyticsProvider>
            </MotionProvider>
          </BackgroundProvider>
        </ThemeTokenProvider>
      </body>
    </html>
  );
}