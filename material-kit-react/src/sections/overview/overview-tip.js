import PropTypes from 'prop-types';
import { Avatar, Card, CardContent, Divider, Pagination, Stack, SvgIcon, Typography } from '@mui/material';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { BoltIcon, BeakerIcon, FireIcon } from "@heroicons/react/24/solid";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import React, { useState } from 'react';

import {EmailShareButton, FacebookShareButton, TwitterShareButton} from "react-share";

const iconMap = {
  Electricity: (
    <SvgIcon>
      <BoltIcon />
    </SvgIcon>
  ),
  Water: (
    <SvgIcon>
      <BeakerIcon />
    </SvgIcon>
  ),
  Gas: (
    <SvgIcon>
      <FireIcon />
    </SvgIcon>  
  )
};

const colorMap = {
  Electricity: 'custom.electricity',
  Water: 'custom.water',
  Gas: 'custom.gas'
};


export const OverviewTip = (props) => {
  const { tips, type, sx } = props;
  const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
  return (
    <Card sx={sx}>
      <CardContent sx={sx}>
        <Grid container spacing={5} direction="column" justifyContent="space-between">
          <Grid container spacing={3} justifyContent="space-between" alignItems="center" >
            <Typography
              color="text.secondary"
              variant="h4"
            >
              {type} Tips
            </Typography>
            <Avatar
            sx={{
              backgroundColor: colorMap[type],
              height: 56,
              width: 56
            }}
            >
              {iconMap[type]}
            </Avatar>
          </Grid>
          <Grid container paddingTop={5}>
            <Typography
              color="text.primary"
              variant="body1"
              height={'25vh'}
            >
              {tips[page-1]}
            </Typography>
          </Grid>
          <Grid container justifyContent='space-between' paddingTop={5}>
            <Pagination count={tips.length} page={page} 
                    onChange={handleChange} siblingCount={0} boundaryCount={0}/>
            <Grid container justifyContent='flex-end'>
              <FacebookShareButton url={"google.com"} quote="test" hashtag="TODO">
                <FacebookIcon/>
              </FacebookShareButton>
              <TwitterShareButton url={"google.com"} hashtags={["ecofriendly"]} title={"From TODO I learned: " + tips[page-1]}>
                <TwitterIcon/>
              </TwitterShareButton>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};


OverviewTip.propTypes = {
  tips: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  sx: PropTypes.object
};