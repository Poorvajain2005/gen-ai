import React from 'react';
import { Layout } from '@/components/layout/Layout';

const Management = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Management Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Team Overview</h3>
            <p className="text-gray-600">Manage your team members and permissions</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Projects</h3>
            <p className="text-gray-600">Track and manage all your projects</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Analytics</h3>
            <p className="text-gray-600">View detailed analytics and reports</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Management;
