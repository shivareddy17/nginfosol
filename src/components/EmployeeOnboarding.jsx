import React from "react";
import filter from '../assets/icons/icons8-filter-16.png'
import exporticon from '../assets/icons/icons8-export-16.png'
import sorting from "../assets/icons/icons8-sorting-arrows-16.png"


const EmployeeOnboarding = () => {
  return (
    <div className="bg-gray-200 p-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <h2 className="text-xl font-bold text-gray-800">
            Check on UIROLL onboarding employees
          </h2>
          <div className="flex flex-wrap items-center gap-4">
            <input
              type="text"
              placeholder="Search for employee here..."
              className="border border-gray-300 rounded-md p-2 w-full lg:w-64"
            />
            <button className="bg-gray-200 px-4 py-2 rounded-md text-gray-800 hover:bg-gray-300 flex">
            <img src={filter} alt="" />
              Filter
            </button>
            <button className="bg-gray-200 px-4 py-2 rounded-md text-gray-800 hover:bg-gray-300 flex">
            <img src={filter} alt="" />
              Export
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-6">
          <button className=" text-gray-600 px-4 py-2 rounded-md hover:underline decoration-blue-600 decoration-2 underline-offset-1">
            All
          </button>
          <button className=" text-gray-600 px-4 py-2 rounded-md hover:underline decoration-blue-600 decoration-2 underline-offset-2">
            New Hires
          </button>
          <button className=" text-gray-600 px-4 py-2 rounded-md hover:underline decoration-blue-600 decoration-2 underline-offset-2 active:underline">
            Transporting Employees
          </button>
          <button  className=" text-gray-600 px-4 py-2 rounded-md hover:underline decoration-blue-600 decoration-2 underline-offset-2">
            Returning Employees
          </button>
          <button className=" text-gray-600 px-4 py-2 rounded-md hover:underline decoration-blue-600 decoration-2 underline-offset-2">
            External
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="px-4 py-2">
                  <input type="checkbox" />
                </th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Employee ID</th>
                <th className="px-4 py-2">Type</th>
                <th className="px-4 py-2">Progress</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Start Date</th>
                <th className="px-4 py-2">Unit</th>
                <th className="px-4 py-2">Hiring Manager</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: "Cody Fisher",
                  id: "GAD501",
                  type: "New Employee",
                  progress: "1/5",
                  status: "In-Progress",
                  startDate: "10/6/13",
                  unit: "UIROLL Oy",
                  manager: "Leslie Alexander",
                },
                {
                  name: "Darrell Steward",
                  id: "GAD502",
                  type: "New Employee",
                  progress: "1/5",
                  status: "In-Progress",
                  startDate: "4/4/18",
                  unit: "UIROLL Infra",
                  manager: "Darlene Robertson",
                },{
                  name: "Cody Fisher",
                  id: "GAD501",
                  type: "New Employee",
                  progress: "1/5",
                  status: "In-Progress",
                  startDate: "10/6/13",
                  unit: "UIROLL Oy",
                  manager: "Leslie Alexander",
                },
                {
                  name: "Darrell Steward",
                  id: "GAD502",
                  type: "New Employee",
                  progress: "1/5",
                  status: "In-Progress",
                  startDate: "4/4/18",
                  unit: "UIROLL Infra",
                  manager: "Darlene Robertson",
                },{
                  name: "Cody Fisher",
                  id: "GAD501",
                  type: "New Employee",
                  progress: "1/5",
                  status: "In-Progress",
                  startDate: "10/6/13",
                  unit: "UIROLL Oy",
                  manager: "Leslie Alexander",
                },
                {
                  name: "Darrell Steward",
                  id: "GAD502",
                  type: "New Employee",
                  progress: "1/5",
                  status: "In-Progress",
                  startDate: "4/4/18",
                  unit: "UIROLL Infra",
                  manager: "Darlene Robertson",
                },{
                  name: "Cody Fisher",
                  id: "GAD501",
                  type: "New Employee",
                  progress: "1/5",
                  status: "In-Progress",
                  startDate: "10/6/13",
                  unit: "UIROLL Oy",
                  manager: "Leslie Alexander",
                },
                {
                  name: "Darrell Steward",
                  id: "GAD502",
                  type: "New Employee",
                  progress: "1/5",
                  status: "In-Progress",
                  startDate: "4/4/18",
                  unit: "UIROLL Infra",
                  manager: "Darlene Robertson",
                },
              ].map((employee, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-2">
                    <input type="checkbox" />
                  </td>
                  <td className="px-4 py-2">{employee.name}</td>
                  <td className="px-4 py-2">{employee.id}</td>
                  <td className="px-4 py-2">{employee.type}</td>
                  <td className="px-4 py-2">{employee.progress}</td>
                  <td className="px-4 py-2">{employee.status}</td>
                  <td className="px-4 py-2">{employee.startDate}</td>
                  <td className="px-4 py-2">{employee.unit}</td>
                  <td className="px-4 py-2">{employee.manager}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeOnboarding;
