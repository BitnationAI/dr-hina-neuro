import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains',
  preload: false,
});

export const metadata: Metadata = {
  title: 'Dr. Hina Neuro — Specialist Neurologist',
  description: 'Expert neurological care with compassion. Dr. Hina provides comprehensive diagnosis and treatment for neurological conditions including headaches, epilepsy, stroke, movement disorders, and more.',
  keywords: ['neurologist', 'neurology', 'brain health', 'headache specialist', 'epilepsy', 'stroke', 'movement disorders', 'neurological care'],
  authors: [{ name: 'Dr. Hina Neuro' }],
  creator: 'Dr. Hina Neuro',
  publisher: 'Dr. Hina Neuro',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://drhina-neuro.com',
    siteName: 'Dr. Hina Neuro',
    title: 'Dr. Hina Neuro — Specialist Neurologist',
    description: 'Expert neurological care with compassion. Comprehensive diagnosis and treatment for neurological conditions.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Hina Neuro - Specialist Neurologist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Hina Neuro — Specialist Neurologist',
    description: 'Expert neurological care with compassion.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className="min-h-screen bg-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}