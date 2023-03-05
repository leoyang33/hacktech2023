import PropTypes from "prop-types";
import ArrowPathIcon from "@heroicons/react/24/solid/ArrowPathIcon";
import ArrowRightIcon from "@heroicons/react/24/solid/ArrowRightIcon";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  SvgIcon,
  Grid,
  Box, 
  Continer
} from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import { Chart } from "src/components/chart";
import dataJson from "../../data/data.json";
import { useState, useEffect } from "react";

const useChartOptions = () => {
  const theme = useTheme();

  const utilMap = {
    "electric": "custom.gas1",
    "gas": "custom.gas",
    "water": "custom.water"
  }

  return {
    chart: {
      height: 350,
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
      type: "solid"
    },
    grid: {
      borderColor: theme.palette.divider,
      strokeDashArray: 2,
      xaxis: {
        lines: {
          show: true,
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
    stroke: {
      colors: ["#000000"],
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
      //   categories: [
      //     "Jan",
      //     "Feb",
      //     "Mar",
      //     "Apr",
      //     "May",
      //     "Jun",
      //     "Jul",
      //     "Aug",
      //     "Sep",
      //     "Oct",
      //     "Nov",
      //     "Dec",
      //   ],
      labels: {
        offsetY: 5,
        style: {
          colors: theme.palette.text.secondary,
        },
      },
    },
    yaxis: {
      labels: {
        formatter: (value) => (value > 0 ? `${value}` : `${value}`),
        offsetX: -10,
        style: {
          colors: theme.palette.text.secondary,
        },
      },
    },
  };
};

export const HomepageElectric = (props) => {
  const chartSeries = props.chartSeriesInp;
  
  //   const { _, sx } = props;
  const chartOptions = useChartOptions();

  return (
      <Chart options={chartOptions} series={chartSeries} type="line" width="90%" height="350"/>
  );
};
