import React from 'react';
import { Header } from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, Zap, Shield, Users, BarChart3, Settings } from 'lucide-react';

const Product = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-4">Product Page</h1>
        <p className="text-lg text-gray-600">
          This is the product page. More details will be added here.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <CheckCircle className="h-8 w-8 text-pink-500 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Feature 1</h2>
            <p className="text-gray-600">Description of feature 1.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Zap className="h-8 w-8 text-pink-500 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Feature 2</h2>
            <p className="text-gray-600">Description of feature 2.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Shield className="h-8 w-8 text-pink-500 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Feature 3</h2>
            <p className="text-gray-600">Description of feature 3.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Users className="h-8 w-8 text-pink-500 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Feature 4</h2>
            <p className="text-gray-600">Description of feature 4.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <BarChart3 className="h-8 w-8 text-pink-500 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Feature 5</h2>
            <p className="text-gray-600">Description of feature 5.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Settings className="h-8 w-8 text-pink-500 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Feature 6</h2>
            <p className="text-gray-600">Description of feature 6.</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Product;
