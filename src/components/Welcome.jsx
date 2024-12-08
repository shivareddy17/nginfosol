import React from "react";
import Idea from '../assets/images/icons8-idea.svg';
import User from '../assets/images/icons8-user-60.png';
import Trend from '../assets/images/icons8-graph-60 (1).png';
import Graph from '../assets/images/icons8-graph-60.png';

const GradientBackground = ({ children }) => {
  return (
    <div className="relative bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white p-8 rounded-lg overflow-hidden">
      {children}
    </div>
  );
};

const StatCard = ({ image, title, number, percentage, isPositive }) => {
  return (
    <div className="bg-white text-black p-4 rounded-lg shadow-lg flex flex-col items-center transform transition-transform duration-300 hover:scale-105">
      <img src={image} alt={title} className="w-20 h-20 object-cover rounded-full mb-4" />
      <h3 className="text-gray-500">{title}</h3>
      <div className="flex justify-between items-center mt-2 w-full">
        <span className="text-2xl font-bold text-indigo-600">{number}</span>
        <span className={`text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {isPositive ? `+${percentage}%` : `-${percentage}%`}
        </span>
      </div>
    </div>
  );
};

const WelcomeSection = () => {
  return (
    <GradientBackground>
      <div className="absolute top-8 left-8">
        <h1 className="text-4xl font-bold">Welcome</h1>
        <h3 className="text-2xl font-semibold mt-2">to Onboarding Tool!</h3>
      </div>

      <div className="relative mt-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            image={Idea}
            title="Onboarding This Month"
            number="15"
            percentage="45"
            isPositive={true}
          />
          <StatCard
            image={User}
            title="Total Onboarding This Year"
            number="135"
            percentage="16"
            isPositive={true}
          />
          <StatCard
            image={Trend}
            title="Onboarding Journeys In Progress"
            number="5"
            percentage="10"
            isPositive={false}
          />
          <StatCard
            image={Graph}
            title="Avg Onboarding Evaluation Score"
            number="8.5"
            percentage="5"
            isPositive={true}
          />
        </div>
      </div>
    </GradientBackground>
  );
};

export default WelcomeSection;
