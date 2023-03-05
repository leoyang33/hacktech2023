import PropTypes from 'prop-types';
import { Avatar, Card, CardContent, Divider, Pagination, Stack, SvgIcon, Typography } from '@mui/material';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { BoltIcon, BeakerIcon, FireIcon } from "@heroicons/react/24/solid";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import React, { useState } from 'react';
import {EmailShareButton, FacebookShareButton, TwitterShareButton} from "react-share";
import AssessmentIcon from '@mui/icons-material/Assessment';

export const OverviewStat = (props) => {
  const { stats, sx } = props;
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
              This Month:
            </Typography>
            <Avatar
            sx={{
              backgroundColor: 'warning.main',
              height: 56,
              width: 56
            }}
            >
              <AssessmentIcon/>
            </Avatar>
          </Grid>
          <Grid container paddingTop={5}>
            <Typography
              color="text.primary"
              variant="body1"
              height={'10vh'}
              paddingLeft = {"10px"}
              paddingRight = {"10px"}
            >
              {stats[page-1]}
            </Typography>
          </Grid>
          <Grid container justifyContent='space-between' paddingTop={5}>
            <Pagination count={stats.length} page={page} 
                    onChange={handleChange} siblingCount={0} boundaryCount={0}/>
            <Grid container justifyContent='flex-end'>
              <FacebookShareButton url={"Zap.com"} quote="test" hashtag="Zap">
                <FacebookIcon/>
              </FacebookShareButton>
              <TwitterShareButton url={"Zap.com"} hashtags={["ecofriendly", "Zap"]} title={"From Zap I learned: " + stats[page-1]}>
                <TwitterIcon/>
              </TwitterShareButton>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};


OverviewStat.propTypes = {
  stats: PropTypes.array.isRequired,
  sx: PropTypes.object
};