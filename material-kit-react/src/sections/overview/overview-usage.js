import PropTypes from "prop-types";
import { Box, Button, Card, CardContent, CardHeader, Grid, Stack } from "@mui/material";

import React, { useState } from "react";

import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import OpacityIcon from "@mui/icons-material/Opacity";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import { Container, padding } from "@mui/system";
import { HomepageElectric } from "./homepage-electric-graph";

export const OverviewUsage = (props) => {
  const { graphs, sx } = props;

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [utility, setUtility] = useState("electric");

  const Input = {
    electric: [
      {
        name: "Electric",
        data: [680, 731, 730, 700, 692, 711],
      },
    ],
    water: [
      {
        name: "Water",
        data: [2689, 2646, 3246, 3321, 3506, 2506],
      },
    ],
    gas: [
      {
        name: "Gas",
        data: [47885, 46774, 49343, 48435, 45234, 46480],
      },
    ],
  };

  const handleClick = (util) => {
    setUtility(util);
  };

  return (
    <Card sx={sx}>
      <CardHeader title="Usage History" />
      <CardContent>
        <Grid justify="center" alignItems="center">
          <Stack direction="row" spacing={10}>
            <Button
              sx={{
                color: "custom.gas",
                backgroundColor: utility == "gas" ? "custom.gas2" : "",
                minWidth: "200px",
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
                minWidth: "200px",
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
                minWidth: "200px",
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
        <HomepageElectric chartSeriesInp={Input[utility]} util={utility} />
      </CardContent>
    </Card>
  );
};

OverviewUsage.prototype = {
  graphs: PropTypes.array,
  sx: PropTypes.object,
};
