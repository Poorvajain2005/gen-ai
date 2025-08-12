import React from 'react';
import { Layout } from '@/components/layout/Layout';

const ShopifyIntegration = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Shopify Integration</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Integration Setup</h2>
            <p className="text-gray-600 mb-4">
              Connect your Shopify store to sync products, orders, and customer data seamlessly.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Connect Shopify Store
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Sync Settings</h2>
            <p className="text-gray-600 mb-4">
              Configure how your data syncs between Shopify and our platform.
            </p>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" defaultChecked />
                <span>Sync products automatically</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" defaultChecked />
                <span>Sync orders in real-time</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Sync customer data</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ShopifyIntegration;
