import PropTypes from 'prop-types';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { BoltIcon, BeakerIcon, FireIcon } from "@heroicons/react/24/solid";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import React, { useState } from 'react';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import OpacityIcon from '@mui/icons-material/Opacity';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import {  Avatar,
    Button,
    Card,
    CardActions,
    CardContent,
    Pagination,
    Stack,
    SvgIcon,
    TextField,
    Typography
  } from '@mui/material';
import {EmailShareButton, FacebookShareButton, TwitterShareButton} from "react-share";

const iconMap = {
  Electricity: (
    <SvgIcon>
      <ElectricBoltIcon />
    </SvgIcon>
  ),
  Water: (
    <SvgIcon>
      <OpacityIcon />
    </SvgIcon>
  ),
  Gas: (
    <SvgIcon>
      <LocalFireDepartmentIcon />
    </SvgIcon>  
  )
};

const colorMap = {
  Electricity: 'custom.electricity',
  Water: 'custom.water',
  Gas: 'custom.gas'
};


export const GlobalStat = (props) => {
  const { title, text, type, sx } = props;
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
              paddingLeft={2}
            >
              {title} 
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
              height={'15vh'}
              margin={3}
            >
              {text}
            </Typography>
          </Grid>
          <Grid container justifyContent='space-between' paddingTop={5}>
            <Grid container
            justifyContent='flex-end'
            marginLeft={2}>
              <FacebookShareButton url={"google.com"} quote="test" hashtag="Zap">
                <FacebookIcon/>
              </FacebookShareButton>
              <TwitterShareButton url={"google.com"} hashtags={["ecofriendly"]} title={"From Zap I learned: " + text}>
                <TwitterIcon/>
              </TwitterShareButton>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};


GlobalStat.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string.isRequired,
  sx: PropTypes.object
};