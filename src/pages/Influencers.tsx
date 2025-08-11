import React from 'react';
import { InfluencerTable } from '@/components/dashboard/InfluencerTable';

const Influencers = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Influencers</h1>
      <InfluencerTable />
    </div>
  );
};

export default Influencers;
