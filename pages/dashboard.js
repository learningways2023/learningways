import React from "react";
import SideNavbar from "../components/sidebar";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
const Dashboard = () => {
  Chart.register(ArcElement);
  const data = {
    labels: ["Red", "Green", "Yellow"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };
  return (
    <div className="md:flex">
      <SideNavbar />
      <div className=" min-h-[95vh] m-0 mt-4 md:m-4 w-[100vw] flex justify-center items-center bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
          <div className="w-full h-full flex  justify-center items-center">
            <Doughnut data={data} width={400} height={400} />
          </div>
          <div className="w-full h-full flex  justify-center items-center">
            <Doughnut data={data} width={400} height={400} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
