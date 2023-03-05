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
  Continer,
} from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import { Chart } from "src/components/chart";
import dataJson from "../../data/data.json";
import { useState, useEffect } from "react";

const useChartOptions = (util) => {
  const theme = useTheme();

  const utilMap = {
    electric: "#ffca3a",
    gas: "#ff595e",
    water: "#1982C4",
  };

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
      type: "solid",
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
      colors: [utilMap[util]],
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
    tooltip: {
      marker: {
        fillColors: [utilMap[util]], // set marker color to red
      },
    },
  };
};

export const HomepageElectric = (props) => {
  const chartSeries = props.chartSeriesInp;
  const util = props.util;
  //   const { _, sx } = props;
  const chartOptions = useChartOptions(util);

  return <Chart options={chartOptions} series={chartSeries} type="line" width="90%" height="350" />;
};
