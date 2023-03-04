import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Divider,
  SvgIcon,
  Table,
  Tabs,
  Tab,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Grid
} from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { BeakerIcon, BoltIcon, FireIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import OpacityIcon from '@mui/icons-material/Opacity';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import { Container } from '@mui/system';

export const OverviewUsage = (props) => {
  const { graphs, sx } = props;

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card sx={sx}>
      <CardContent>
        <Grid container direction="column" justify="center" alignItems="center">
          <TabContext value={value}>
          <Grid justify="center" alignItems="center">
            <Box>
              <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
                <Tab icon={<ElectricBoltIcon />} value="1"/>
                <Tab icon={<OpacityIcon />} value="2"/>
                <Tab icon={<LocalFireDepartmentIcon />} value="3"/>
              </Tabs>
            </Box>
          </Grid>
          <Grid>
            <TabPanel value="1">TODO: PUT ELEC. GRAPH HERE</TabPanel>
            <TabPanel value="2">TODO: PUT WATER GRAPH HERE</TabPanel>
            <TabPanel value="3">TODO: PUT GAS GRAPH HERE</TabPanel>
          </Grid>
          </TabContext>
        </Grid>
        <Grid>
        </Grid>

        
      </CardContent>
    </Card>
  );
};

OverviewUsage.prototype = {
  graphs: PropTypes.array,
  sx: PropTypes.object
};
