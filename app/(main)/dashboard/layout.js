import React, { Suspense } from 'react';
import DashboardPage from './page';
import { BarLoader } from 'react-spinners';

const Layout = () => {
  return (
    <div className="">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-6xl font-bold tracking-tight gradient-title">Dashboard</h1>
      </div>
      <Suspense fallback={<BarLoader width={'100%'} color="#9333ea" />}>
        <DashboardPage />
      </Suspense>
    </div>
  );
};

export default Layout;
