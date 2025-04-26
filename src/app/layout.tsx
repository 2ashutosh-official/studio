
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Link from 'next/link';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <nav className="bg-secondary p-4 text-white">
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:text-accent">Home</Link></li>
            <li><Link href="/projects" className="hover:text-accent">Projects</Link></li>
            <li><Link href="/social" className="hover:text-accent">Social Feed</Link></li>
            <li><Link href="/blog" className="hover:text-accent">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </nav>
        <main className="container mx-auto py-8">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
