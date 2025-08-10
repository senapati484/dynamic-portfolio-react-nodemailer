import '@/styles/globals.css';

import { PropsWithChildren } from 'react';
import type { Metadata, Viewport } from 'next';

import { ActiveSectionProvider } from '@/components/active-section-provider';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/toaster';
import { fonts } from '@/lib/fonts';
import { siteConfig } from '@/lib/site-config';
import { cn } from '@/lib/utils';

export const viewport: Viewport = {
  themeColor: '#06c1db',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  robots: { index: true, follow: true },
  icons: {
    icon: '/icon/logo-ico.ico',
    shortcut: '/icon/logo.jpeg',
    apple: '/icon/logo.jpeg',
  },
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={cn('min-h-screen font-sans', fonts)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ActiveSectionProvider>
            {children}
            <Toaster position="bottom-left" />
          </ActiveSectionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
