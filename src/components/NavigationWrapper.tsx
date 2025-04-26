'use client';

import React from 'react';
import {useCursor} from '@/hooks/use-cursor';

interface NavigationWrapperProps {
  children: React.ReactNode;
}

const NavigationWrapper: React.FC<NavigationWrapperProps> = ({children}) => {
  useCursor();

  return (
    <div>
      {/* Navigation Bar (You can replace this with your actual navbar) */}
      <nav className="p-4 bg-secondary text-secondary-foreground">
        {/* Add navigation links here */}
        <a href="/" className="mr-4">
          Home
        </a>
        <a href="/projects" className="mr-4">
          Projects
        </a>
        <a href="/social" className="mr-4">
          Social Feed
        </a>
        <a href="/blog" className="mr-4">
          Blog
        </a>
        <a href="/contact">Contact</a>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto py-8">{children}</main>

      {/* Footer (Optional) */}
      <footer className="p-4 bg-muted text-muted-foreground text-center">
        <p>&copy; {new Date().getFullYear()} Ashu's Universe</p>
      </footer>
    </div>
  );
};

export default NavigationWrapper;
