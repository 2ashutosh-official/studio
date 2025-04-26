'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function NavigationWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <>
      {/* Only show navigation bar on non-home pages */}
      {!isHomePage && (
        <nav className="bg-black p-4 text-white hover:bg-white hover:text-black transition-all">
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:text-accent">Home</Link></li>
            <li><Link href="/projects" className="hover:text-accent">Projects</Link></li>
            <li><Link href="/social" className="hover:text-accent">Social Feed</Link></li>
            <li><Link href="/blog" className="hover:text-accent">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </nav>
      )}
      
      {/* Conditional container class based on page */}
      <main className={isHomePage ? "min-h-screen" : "container mx-auto py-8"}>
        {children}
      </main>
    </>
  );
}