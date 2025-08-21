import React from 'react';
import { Header } from '@/components/layout/Header';
import { ApiSection } from '@/components/sections/ApiSection';

const Api = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="mt-20">
        <ApiSection />
      </div>
    </main>
  );
};

export default Api;
