'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? 'bg-blue-700' : 'hover:bg-blue-700';
  };

  return (
    <header className="bg-white shadow-md relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-20">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              {/*
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              */}
            </div>
            <span className="text-2xl font-bold text-blue-900">TailTracker</span>
          </Link>
        </div>
      </div>
    </header>
  );
} 