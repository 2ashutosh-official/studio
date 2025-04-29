import type { Metadata } from 'next';
import { Inter  } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import NavigationWrapper from '@/components/NavigationWrapper';


const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Ashu\'s Universe',
  description: 'A personal portfolio website for Ashu.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable }>
        <NavigationWrapper>{children}</NavigationWrapper>
        <Toaster />
      </body>
    </html>
  );
}
