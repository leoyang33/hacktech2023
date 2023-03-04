import PropTypes from 'prop-types';
import ArrowPathIcon from '@heroicons/react/24/solid/ArrowPathIcon';
import ArrowRightIcon from '@heroicons/react/24/solid/ArrowRightIcon';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  SvgIcon
} from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import { Chart } from 'src/components/chart';
import dataJson from  "../../data/data.json"
import { useState, useEffect } from 'react';

// const useChartOptions = () => {
//   const theme = useTheme();

//   return {
//     chart: {
//       background: 'transparent',
//       stacked: false,
//       toolbar: {
//         show: false
//       }
//     },
//     colors: [theme.palette.primary.main, alpha(theme.palette.primary.main, 0.25)],
//     dataLabels: {
//       enabled: false
//     },
//     fill: {
//       opacity: 1,
//       type: 'solid'
//     },
//     grid: {
//       borderColor: theme.palette.divider,
//       strokeDashArray: 2,
//       xaxis: {
//         lines: {
//           show: false
//         }
//       },
//       yaxis: {
//         lines: {
//           show: true
//         }
//       }
//     },
//     legend: {
//       show: false
//     },
//     plotOptions: {
//       bar: {
//         columnWidth: '40px'
//       }
//     },
//     stroke: {
//       colors: ['transparent'],
//       show: true,
//       width: 2
//     },
//     theme: {
//       mode: theme.palette.mode
//     },
//     xaxis: {
//       axisBorder: {
//         color: theme.palette.divider,
//         show: true
//       },
//       axisTicks: {
//         color: theme.palette.divider,
//         show: true
//       },
//       categories: [
//         'Jan',
//         'Feb',
//         'Mar',
//         'Apr',
//         'May',
//         'Jun',
//         'Jul',
//         'Aug',
//         'Sep',
//         'Oct',
//         'Nov',
//         'Dec'
//       ],
//       labels: {
//         offsetY: 5,
//         style: {
//           colors: theme.palette.text.secondary
//         }
//       }
//     },
//     yaxis: {
//       labels: {
//         formatter: (value) => (value > 0 ? `${value}K` : `${value}`),
//         offsetX: -10,
//         style: {
//           colors: theme.palette.text.secondary
//         }
//       }
//     }
//   };
// };


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
  useEffect(() => {
    const waterUsageValues = energyData.map((obj) => obj.waterUsage);
    setWaterUsage(waterUsageValues);

    setMean(computeMean(waterUsage));
    setStd(computeStd(waterUsage));
  }, [energyData]);

  const x_vals = getNStd(mean, std, 3, 0.25);
  const data = {
    series: [
      {
        name: "Water Usage",
        data: x_vals.map((element) => ({
          x: element,
          y: bellCurve(element, mean, std),
        })),
      },
    ],
  };

  return (
    <Card sx={sx}>
      <CardHeader
        action={(
          <Button
            color="inherit"
            size="small"
            startIcon={(
              <SvgIcon fontSize="small">
                <ArrowPathIcon />
              </SvgIcon>
            )}
          >
            Sync
          </Button>
        )}
        title="Usage History"
      />
      <CardContent>
        <Chart
          height={350}
          options={chartOptions}
          series={data}
          type="bar"
          width="100%"
        />
      </CardContent>
      <Divider />
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button
          color="inherit"
          endIcon={(
            <SvgIcon fontSize="small">
              <ArrowRightIcon />
            </SvgIcon>
          )}
          size="small"
        >
          Overview
        </Button>
      </CardActions>
    </Card>
  );
};

OverviewSales.protoTypes = {
  chartSeries: PropTypes.array.isRequired,
  sx: PropTypes.object
};
