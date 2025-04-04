'use client';

import { Header } from '@/components/Header';
import { AppProvider } from '@/context/AppContext';
import { SessionProvider } from 'next-auth/react';
import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <SessionProvider>
          <AppProvider>
            <div className='flex flex-col min-h-screen bg-custom-gray-10'>
              <Header />
              {children}
            </div>
          </AppProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
