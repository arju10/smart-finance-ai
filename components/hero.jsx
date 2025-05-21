'use client';

import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section
      className="relative w-full min-h-screen flex flex-col justify-center items-center text-center text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/banner4.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Content */}
      <div className="relative z-10 px-4 space-y-6">
        <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 drop-shadow-lg text-blue-200">
          Manage Your Finances <br /> with Intelligence
        </h1>

        <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
          An AI-powered financial management platform that helps you track, analyze, and optimize
          your spending with real-time insights.
        </p>

        <div className="flex justify-center flex-wrap gap-4 pt-4">
          <Link href="/dashboard">
            <button className="px-8 py-3 border border-white bg-white text-black rounded-md hover:bg-black hover:text-white transition duration-300">
              Get Started
            </button>
          </Link>
          <Link href="https://youtube.com" target="_blank">
            <button className="px-8 py-3 border border-white text-white rounded-md hover:bg-white hover:text-black transition duration-300">
              Watch Demo
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
