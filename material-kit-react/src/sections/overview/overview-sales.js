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
  Stack,
} from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import { Chart } from "src/components/chart";
import dataJson from "../../data/data.json";
import { useState, useEffect } from "react";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import OpacityIcon from "@mui/icons-material/Opacity";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";

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

function computeMean(arr) {
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  return sum / arr.length;
}

function computeStd(arr) {
  const mean = computeMean(arr);
  const diffSquared = arr.map((value) => (value - mean) ** 2);
  const variance = diffSquared.reduce((acc, curr) => acc + curr, 0) / arr.length;
  return Math.sqrt(variance);
}

function bellCurve(x, mu, sigma) {
  const a = 1 / (sigma * Math.sqrt(2 * Math.PI));
  const b = (-1 * Math.pow(x - mu, 2)) / (2 * Math.pow(sigma, 2));
  return a * Math.exp(b);
}

function getNStd(mu, std, n, interval = 1) {
  const values = [];
  for (let i = -n; i <= n; i += interval) {
    values.push(mu + i * std);
  }
  return values;
}

export const OverviewSales = (props) => {
  const { chartSeries, sx } = props;
  const chartOptions = useChartOptions();
  const energyData = dataJson.data;
  const [waterUsage, setWaterUsage] = useState([]);
  const [mean, setMean] = useState(null);
  const [std, setStd] = useState(null);
  const [graphData, setGraphData] = useState([]);
  const [options, setOptions] = useState({});
  const [utility, setUtility] = useState("water");
  const [color, setColor] = useState("#1982C4");
  const [point, setPoint] = useState({});

  const utilMap = {
    electric: "#ffca3a",
    gas: "#ff595e",
    water: "#1982C4",
  };

  const handleClick = (util) => {
    setUtility(util);
    setColor(utilMap[util]);
    if (util === "gas") {
      setPoint({
        x: 47120,
        y: 0.00098,
        marker: {
          size: 8,
          fillColor: "#fff",
          strokeColor: "#255aee",
          shadeTo: "light",
          strokeWidth: 2,
        },
      });
    } else if (util === "water") {
      setPoint({
        x: 2405,
        y: 0.001074,
        marker: {
          size: 8,
          fillColor: "#fff",
          strokeColor: "#255aee",
          shadeTo: "light",
          strokeWidth: 2,
        },
      });
    } else {
      setPoint({
        x: 2405,
        y: 0.001074,
        marker: {
          size: 8,
          fillColor: "#fff",
          strokeColor: "#255aee",
          shadeTo: "light",
          strokeWidth: 2,
        },
      });
    }
  };

  useEffect(() => {
    const waterUsageValues = energyData.map((obj) => obj[`${utility}Usage`]);
    setWaterUsage(waterUsageValues);

    setMean(computeMean(waterUsage));
    setStd(computeStd(waterUsage));
    const x_vals = getNStd(mean, std, 3, 0.05);

    const temp_data = [
      {
        name: `${utility} Usage`,
        data: x_vals.map((element) => ({
          x: element,
          y: bellCurve(element, mean, std),
        })),
      },
    ];
    setGraphData(temp_data);
    setOptions({
      chart: {
        height: "350",
        type: "area",
      },
      title: {
        text: `${utility.charAt(0).toUpperCase() + utility.slice(1)} Usage`,
      },
      xaxis: {
        type: "numeric",
        title: {
          text: "Usage",
        },
      },
      yaxis: {
        show: false,
        title: {
          text: "",
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      stroke: {
        curve: "smooth",
      },
      colors: [color],
      annotations: {
        points: [point],
      },
    });
  }, [color]);

  let check = false;
  if (graphData.length) {
    if (graphData[0].data[0]["y"]) {
      check = true;
    }
  }

  if (check == false) {
    const waterUsageValues = energyData.map((obj) => obj[`${utility}Usage`]);
    setWaterUsage(waterUsageValues);

    setMean(computeMean(waterUsage));
    setStd(computeStd(waterUsage));
    const x_vals = getNStd(mean, std, 3, 0.05);

    const temp_data = [
      {
        name: `${utility} Usage`,
        data: x_vals.map((element) => ({
          x: element,
          y: bellCurve(element, mean, std),
        })),
      },
    ];
    setGraphData(temp_data);
    setOptions({
      chart: {
        height: "350",
        type: "area",
      },
      title: {
        text: `${utility.charAt(0).toUpperCase() + utility.slice(1)} Usage`,
      },
      xaxis: {
        type: "numeric",
        title: {
          text: "Usage",
        },
      },
      yaxis: {
        show: false,
        title: {
          text: "",
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      stroke: {
        curve: "smooth",
      },
      colors: [color],
      annotations: {
        points: [point],
      },
    });
  }
  return (
    <>
      <Card>
        <CardHeader
          action={
            <Button
              color="inherit"
              size="small"
              startIcon={
                <SvgIcon fontSize="small">
                  <ArrowPathIcon />
                </SvgIcon>
              }
            >
              Sync
            </Button>
          }
          title="Usage History"
        />
        <Grid justify="center" alignItems="center" container justifyContent={"center"}>
          <Stack direction="row" spacing={20}>
            <Button
              sx={{
                color: "custom.gas",
                backgroundColor: utility == "gas" ? "custom.gas2" : "",
                minWidth: "300px",
                "&:hover": { backgroundColor: utility == "gas" ? "custom.gas2" : "transparent" },
              }}
              onClick={(e) => handleClick("gas")}
            >
              <LocalFireDepartmentIcon />
            </Button>
            <Button
              sx={{
                color: "custom.water",
                backgroundColor: utility == "water" ? "custom.water2" : "",
                minWidth: "300px",
                "&:hover": {
                  backgroundColor: utility == "water" ? "custom.water2" : "transparent",
                },
              }}
              onClick={(e) => handleClick("water")}
            >
              <OpacityIcon />
            </Button>
            <Button
              sx={{
                color: "custom.electricity",
                backgroundColor: utility == "electric" ? "custom.electricity2" : "",
                minWidth: "300px",
                "&:hover": {
                  backgroundColor: utility == "electric" ? "custom.electricity2" : "transparent",
                },
              }}
              onClick={(e) => handleClick("electric")}
            >
              <ElectricBoltIcon />
            </Button>
          </Stack>
        </Grid>

        <CardContent>
          {check && (
            <Chart options={options} series={graphData} type="area" width="100%" height="350" />
          )}
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button
            color="inherit"
            endIcon={
              <SvgIcon fontSize="small">
                <ArrowRightIcon />
              </SvgIcon>
            }
            size="small"
          >
            Overview
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

OverviewSales.protoTypes = {
  chartSeries: PropTypes.array.isRequired,
  sx: PropTypes.object,
};
