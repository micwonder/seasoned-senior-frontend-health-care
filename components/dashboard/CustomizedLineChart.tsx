import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register ChartJS components using ChartJS.register
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);
const CustomizedLineChart = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        data: [300, 350, 320, 280, 210, 250, 270, 210, 230, 200, 260, 240],
        backgroundColor: "#CB5A6F",
        borderColor: "#CB5A6F",
        tension: 0.4, // Adjust the tension value for smoothness (between 0 and 1)
        pointRadius: 0,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: true,
          color: "#F5F5F5",
        },
      },
    },
    interaction: {
      intersect: false,
      axis: "x",
    },
    plugins: {
      tooltip: {
        backgroundColor: "rgba(200, 200, 200, 0.2)", // Set the background color of the tooltip
        titleColor: "#000", // Set the color of the tooltip title
        bodyColor: "#000", // Set the color of the tooltip body
        displayColors: false, // Hide the color boxes in the tooltip
        yAlign: "bottom", // Use this to control the placement of the tooltip relative to its point
        mode: "index", // Show tooltip for all datasets when hovering over the chart
        callbacks: {
          label: function (context: any) {
            let label = context.dataset.label || "";

            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(context.parsed.y);
            }
            return label;
          },
        },
      },
    },
  };

  return (
    <div
      className="flex flex-col justify-center items-center w-full"
      style={{ borderLeft: "0.614px solid #C4C4C4" }}
    >
      <div>
        <Line data={data} width={510} height={260} options={options} />
      </div>
    </div>
  );
};

export default CustomizedLineChart;
