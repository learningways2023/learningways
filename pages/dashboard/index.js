import React from "react";
import SideNavbar from "../../components/sidebar";
import { Doughnut } from "react-chartjs-2";
import Recomend from "../../components/recomendCourse";
import bullet from "../../public/bulletblack.svg";
import site from "../../public/site.png";

import Image from "next/image";
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
    <div className="md:flex ">
      <SideNavbar />
    </div>
  );
};

export default Dashboard;
