import './globals.css';
import { ReactNode } from 'react';
import Head from 'next/head';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Playfair+Display:wght@400;700&family=Roboto:wght@300;400;500&family=Yellowtail&display=swap" rel="stylesheet" />
        <title>Glam By Neha - Exquisite Beauty Services</title>
        <meta name="description" content="Experience premium permanent makeup, skin treatments, brows, lips, nail art, and more at Glam By Neha." />
      </Head>
      <body>{children}</body>
    </html>
  );
}