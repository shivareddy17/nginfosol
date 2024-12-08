import React from 'react';
import Card from './Card';
import EmployeeTable from './EmployeeOnboarding';

const Dashboard = () => (
  <div className="p-6 bg-gray-50 min-h-screen">
    <h1 className="text-2xl font-bold text-indigo-600 mb-4">Welcome to Onboarding Tool!</h1>
    <div className="grid grid-cols-4 gap-4 mb-6">
      <Card title="Onboarding This Month" value="15" trend="+45%" />
      <Card title="Total Onboarding This Year" value="135" trend="+16%" />
      <Card title="Onboarding Journeys In Progress" value="5" trend="-10%" />
      <Card title="Avg Onboarding Evaluation Score" value="8.5" trend="+5%" />
    </div>
    <EmployeeTable />
  </div>
);

export default Dashboard;
