import { format } from 'date-fns';
import PropTypes from 'prop-types';
import ArrowRightIcon from '@heroicons/react/24/solid/ArrowRightIcon';
import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel
} from '@mui/material';
import { Scrollbar } from 'src/components/scrollbar';
import { SeverityPill } from 'src/components/severity-pill';

const statusMap = {
  pending: 'warning',
  delivered: 'success',
  refunded: 'error'
};

export const LeaderboardNeighbourhoodLeaderboard = (props) => {
  const { usersJSON, dataJSON,  sx } = props;
  const usersInfo = usersJSON.data; 
  const dataInfo = dataJSON.data;

  const formatData = (usersInfo, dataInfo) => {
    const pin = 91125;
    const usersInPin = usersInfo.filter(user => user.zipCode == pin);
    const validData = dataInfo.filter(data => data.month == 1 && data.year == 2023)

    let filteredData = [];
    for (var i in usersInPin) {
        const found = validData.find(d => d.id == usersInPin[i].id);
        if (found) {
            filteredData.push(Object.assign({}, found, usersInPin[i]));
        }
    }

    filteredData.sort((a, b) => a['waterUsage'] - b['waterUsage']);
    for (var i in filteredData) {
      filteredData[i].rank = (Number(i) + 1);
    }

    console.log(filteredData);
    return filteredData;
  }

  const formattedData = formatData(usersInfo, dataInfo);
  const [toShowData, setToShowData] = useState(formattedData);
  const [sortingRules, setSortingRules] = useState({});

  const onSortData = (col) => {
    var direction;
    if (col in sortingRules) {
      direction = sortingRules[col] == "asc" ? "desc" : "asc";
    } else {
      direction = "asc";
    }

    const asc = (a, b) => a - b;
    const dsc = (a, b) => b - a;
    let cpy = [...toShowData];

    cpy.sort((a, b) => direction == "asc" ? asc(a[col], b[col]) : dsc(a[col], b[col]));

    if (direction == "asc") {
      for (var i in cpy) {
        cpy[i].rank = (Number(i) + 1);
      }
    } else {
      for (var i in cpy) {
        cpy[i].rank = (cpy.length - Number(i));
      }
    }
    setToShowData(cpy);
    var d = {};
    d[col] = direction;
    setSortingRules(d);
    console.log(sortingRules);
  }

  const formatDP = (num) => {
    return Number(num).toFixed(0);
  }

  return (
    <Card sx={sx}>
      <CardHeader title="Neighborhood Leaderboard" />
      <Scrollbar sx={{ flexGrow: 1 }}>
        <Box>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Rank
                </TableCell>
                <TableCell>
                  Name
                </TableCell>
                <TableCell align={'right'}>
                  <TableSortLabel
                    active={"gasUsage" in sortingRules}
                    direction={"gasUsage" in sortingRules ? sortingRules["gasUsage"] : "asc"} 
                    onClick={() => onSortData("gasUsage")}>
                  </TableSortLabel>
                  Gas (cu. ft)
                </TableCell>
                <TableCell align='right'>
                  <TableSortLabel
                    active={"waterUsage" in sortingRules}
                    direction={"waterUsage" in sortingRules ? sortingRules["waterUsage"] : "asc"} 
                    onClick={() => onSortData("waterUsage")}>
                  </TableSortLabel>
                  Water (gal)
                </TableCell>
                <TableCell align='right'>
                  <TableSortLabel
                    active={"electricUsage" in sortingRules}
                    direction={"electricUsage" in sortingRules ? sortingRules["electricUsage"] : "asc"} 
                    onClick={() => onSortData("electricUsage")}>
                  </TableSortLabel>
                  Electricity (kwh)
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {toShowData.map((data) => {
                return (

                  <TableRow
                    hover
                    key={data.id}
                  >
                    <TableCell>
                      {data.id == 1 ? <b>{data.rank}</b> : data.rank}
                    </TableCell>
                    <TableCell>
                      {data.id == 1 ? <b>{data.name}</b> : data.name}
                    </TableCell>
                    <TableCell align='right' >
                      {data.id == 1 ? <b>{formatDP(data.gasUsage)}</b> : formatDP(data.gasUsage)}
                    </TableCell>
                    <TableCell align='right'>
                      {data.id == 1 ? <b>{formatDP(data.waterUsage)}</b> : formatDP(data.waterUsage)}
                    </TableCell>
                    <TableCell align='right'>
                      {data.id == 1 ? <b>{formatDP(data.electricUsage)}</b> : formatDP(data.electricUsage)}
                    </TableCell>
                  </TableRow>
                  
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
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
          variant="text"
        >
          View all
        </Button>
      </CardActions>
    </Card>
  );
};

LeaderboardNeighbourhoodLeaderboard.prototype = {
  sx: PropTypes.object
};
