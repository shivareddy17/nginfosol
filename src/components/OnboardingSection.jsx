import React from "react";
import img from "../assets/images/girl-laptop-works-while-sitting-260nw-1690356628.webp"

const StartGuide = () => {
  return (
    <div className="flex-[3] bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
        <div className="mb-4 lg:mb-0 lg:mr-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Do not know where to start?
          </h2>
          <p className="text-gray-600 mb-4">
            Take a quick tour of our onboarding tool to know how to onboard an
            employee.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
            Start a Tour →
          </button>
        </div>
        <img
          src={img}
          alt="Onboarding Illustration"
          className="w-48 h-auto"
        />
      </div>
    </div>
  );
};

const ActionButtons = () => {
  return (
    <div className="flex-1 bg-white p-6 rounded-lg shadow-md flex flex-col gap-4">
      <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
        View Dashboard →
      </button>
      <button className="bg-green-600 px-4 py-2 rounded-full text-gray-800 hover:bg-green-700 transition">
        Add New Employee →
      </button>
      <button className="bg-violet-600 px-4 py-2 rounded-full text-gray-800 hover:bg-violet-700 transition">
        Customization →
      </button>
    </div>
  );
};

const OnboardingSection = () => {
  return (
    <div className="bg-gray-200 p-6">
      <div className="flex flex-wrap lg:flex-nowrap items-stretch gap-6">
        <StartGuide />
        <ActionButtons />
      </div>
    </div>
  );
};

export default OnboardingSection;
