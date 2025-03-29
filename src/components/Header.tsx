'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="bg-white shadow-lg border-b border-gray-200">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-center h-20">
                    {/* Logo and Brand */}
                    <Link href="/" className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                            <Image
                                src="/images/paw.png"
                                alt="TailTracker Logo"
                                width={24}
                                height={24}
                                className="text-white"
                            />
                        </div>
                        <span className="text-2xl font-bold text-blue-900">TailTracker</span>
                    </Link>
                </div>
            </div>
        </header>
    );
} 