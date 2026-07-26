import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { buildMetadata } from '@/lib/seo/metadata';
import {
  ThemeTokenProvider,
  MotionProvider,
  AnalyticsProvider,
  ToastProvider,
} from '@/providers';
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

export const metadata: Metadata = buildMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-bg-page text-primary-800 font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-bg-elevated focus:text-primary-800"
        >
          Skip to main content
        </a>
        <ThemeTokenProvider>
          <MotionProvider>
            <AnalyticsProvider>
              <ToastProvider>{children}</ToastProvider>
            </AnalyticsProvider>
          </MotionProvider>
        </ThemeTokenProvider>
      </body>
    </html>
  );
}
