'use client';

import { keycloak } from '@/auth/config';
import { Header } from '@/components/Header';
import { AppProvider } from '@/context/AppContext';
import { ReactKeycloakProvider } from '@react-keycloak/web';
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
        <ReactKeycloakProvider authClient={keycloak}>
          <AppProvider>
            <div className='flex flex-col min-h-screen bg-custom-gray-10'>
              <Header />
              {children}
            </div>
          </AppProvider>
        </ReactKeycloakProvider>
      </body>
    </html>
  );
}
