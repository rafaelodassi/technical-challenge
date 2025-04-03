import { Header } from '@/components/Header';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Technical Challenge',
  description: 'Technical Challenge',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='flex flex-col min-h-screen bg-custom-gray-10'>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
