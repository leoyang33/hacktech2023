import Head from "next/head";
import { Chart } from "src/components/chart";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { alpha, useTheme } from "@mui/material/styles";

const useChartOptions = () => {
  const theme = useTheme();

  return {
    chart: {
      background: "transparent",
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    colors: [theme.palette.primary.main, alpha(theme.palette.primary.main, 0.25)],
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
      type: "solid",
    },
    grid: {
      borderColor: theme.palette.divider,
      strokeDashArray: 2,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    legend: {
      show: false,
    },
    plotOptions: {
      bar: {
        columnWidth: "40px",
      },
    },
    stroke: {
      colors: ["transparent"],
      show: true,
      width: 2,
    },
    theme: {
      mode: theme.palette.mode,
    },
    xaxis: {
      axisBorder: {
        color: theme.palette.divider,
        show: true,
      },
      axisTicks: {
        color: theme.palette.divider,
        show: true,
      },
      categories: [
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
      labels: {
        offsetY: 5,
        style: {
          colors: theme.palette.text.secondary,
        },
      },
    },
    yaxis: {
      labels: {
        formatter: (value) => (value > 0 ? `${value}K` : `${value}`),
        offsetX: -10,
        style: {
          colors: theme.palette.text.secondary,
        },
      },
    },
  };
};

const chartSeries = [
  {
    name: "Electricity",
    data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20],
  },
  {
    name: "Water",
    data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13],
  },
  {
    name: "Gas",
    data: [5, 6, 4, 6, 3, 7, 9, 7, 5, 5, 8, 9],
  },
];

const Page = () => (
  <>
    <Head>
      <title>Leaderboard</title>
    </Head>
    <p>Here</p>
    <Chart height={350} options={useChartOptions()} series={chartSeries} type="bar" width="100%" />
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
