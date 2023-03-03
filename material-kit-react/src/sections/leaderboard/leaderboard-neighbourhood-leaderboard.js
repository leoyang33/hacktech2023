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
    const usersInPin = usersInfo.filter(user => user.zipcode == pin);
    const validData = dataInfo.filter(data => data.month == 1 && data.year == 2023)

    let filteredData = [];
    for (var i in usersInPin) {
        const found = validData.find(d => d.id == usersInPin[i].id);
        if (found) {
            filteredData.push(Object.assign({}, found, usersInPin[i]));
        }
    }

    filteredData.sort((a, b) => a['water-usage'] - b['water-usage']);
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
    setToShowData(cpy);
    var d = {};
    d[col] = direction;
    setSortingRules(d);
    console.log(sortingRules);
  }

  return (
    <Card sx={sx}>
      <CardHeader title="Neighborhood Leaderboard" />
      <Scrollbar sx={{ flexGrow: 1 }}>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={"gas-usage" in sortingRules}
                    direction={"gas-usage" in sortingRules ? sortingRules["gas-usage"] : "asc"} 
                    onClick={() => onSortData("gas-usage")}>
                  </TableSortLabel>
                  Gas Usage
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={"water-usage" in sortingRules}
                    direction={"water-usage" in sortingRules ? sortingRules["water-usage"] : "asc"} 
                    onClick={() => onSortData("water-usage")}>
                  </TableSortLabel>
                  Water Usage
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={"electric-usage" in sortingRules}
                    direction={"electric-usage" in sortingRules ? sortingRules["electric-usage"] : "asc"} 
                    onClick={() => onSortData("electric-usage")}>
                  </TableSortLabel>
                  Electricity Usage
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
                      {data.id == 1 ? <b>{data.name}</b> : data.name}
                    </TableCell>
                    <TableCell>
                      {data.id == 1 ? <b>{data['gas-usage']}</b> : data['gas-usage']}
                    </TableCell>
                    <TableCell sortDirection="desc">
                      {data.id == 1 ? <b>{data['water-usage']}</b> : data['water-usage']}
                    </TableCell>
                    <TableCell>
                      {data.id == 1 ? <b>{data['electric-usage']}</b> : data['electric-usage']}
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
