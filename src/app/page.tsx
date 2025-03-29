'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import SearchModal from '@/components/SearchModal';

export default function Home() {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-12 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6">
                Title Title title title
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button 
                  onClick={() => setIsSearchModalOpen(true)}
                  className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium text-lg"
                >
                  Search Pets
                </button>
              </div>
            </div>
            
            {/* Right Content - Hero Image */}
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            </div>
          </div>
        </div>
      </section>

      {/* Features Section
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">How TailTracker Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Search Database</h3>
              <p className="text-gray-600">Browse through our database of missing pets and shelter animals.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Get Reunited</h3>
              <p className="text-gray-600">Connect with shelters and pet owners to bring your pet home.</p>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Pet?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community of pet owners and shelters working together to reunite lost pets with their families.
          </p>
          <Link 
            href="/report-missing"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium text-lg inline-block"
          >
            Get Started Now
          </Link>
        </div>
      </section>

      {/* Search Modal */}
      <SearchModal 
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
      />
    </main>
  );
}
