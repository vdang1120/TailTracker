'use client';

import Image from 'next/image';
import { useState } from 'react';
import SearchModal from '@/components/SearchModal';

export default function Home() {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  return (
    <main className="">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 border-b border-gray-200">
        <div className="container mx-auto px-12 pt-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6">
                Search for Your Missing Pet Online
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Based in Arlington, Texas, <strong className="text-blue-600">TailTracker</strong> is a platform that helps you find your missing pet.
                We use AI to analyze pet features and match them with potential matches from shelters across the city of Arlington.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button
                  onClick={() => setIsSearchModalOpen(true)}
                  className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium text-lg cursor-pointer"
                >
                  Search for Your Pet
                </button>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative h-[300px] md:h-[400px] rounded-t-2xl overflow-hidden">
              <Image
                src="/images/hero.png"
                alt="Beau"
                height={500}
                width={500}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">How TailTracker Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Upload a Photo</h3>
              <p className="text-gray-600">Upload a clear photo of your missing pet.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">AI-Powered Search</h3>
              <p className="text-gray-600">AI technology analyzes pet features to find potential matches.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Get Reunited</h3>
              <p className="text-gray-600">Connect with local Arlington shelters to bring your pet home.</p>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Pet?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Connect with a local Arlington shelter to find your missing pet today!
          </p>
          <button onClick={() => setIsSearchModalOpen(true)}
            className="cursor-pointer bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium text-lg inline-block"
          >
            Get Started Now
          </button>
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
