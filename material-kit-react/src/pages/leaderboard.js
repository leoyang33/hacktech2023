import Head from "next/head";
import React from "react";
import { Box, Stack, Container, Typography, Unstable_Grid2 as Grid } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { LeaderboardBellCurve } from "src/sections/leaderboard/LeaderboardBellCurve";
import { OverviewSales } from "src/sections/overview/overview-sales";
import { LeaderboardNeighbourhoodLeaderboard } from "src/sections/leaderboard/leaderboard-neighbourhood-leaderboard";
import dataJSON from '../data/data.json';
import usersJSON from '../data/users.json';

import {GlobalStat} from "src/sections/global/globalStat";
const Page = () => (
  <>
    <Head>
      <title>Leaderboard | Zap</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={3}>        
          <Grid xs={12}>
            <LeaderboardNeighbourhoodLeaderboard
                  usersJSON = {usersJSON}
                  dataJSON = {dataJSON}
                  sx={{ height: '100' }}
                />
            <OverviewSales
              chartSeries={[
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
              ]}
              sx={{ height: "100" }}
            />
          </Grid>
        </Grid>
        <Container maxWidth="lg">
          <Stack spacing={3}>
          <Typography variant="h4">
            How you compare
          </Typography>
          <Grid xs={4}
            padding={1}>
              <GlobalStat
                text={"You were in the top 10% of electricity savers this month."}
                title="Electric Savings"
                type="Electricity"
                sx={{ height: '100%' }}
              />
            </Grid>
            <Grid xs={4}
            padding={1}>
              <GlobalStat
                text={"You were in the top 15% of water savers this month."}
                title="Water Savings"
                type="Water"
                sx={{ height: '100%' }}
              />
            </Grid>
            <Grid xs={4}
            padding={1}>
              <GlobalStat
                text={"You were in the top 25% of gas savers this month."}
                title="Gas Savings"
                type="Gas"
                sx={{ height: '100%' }}
              />
            </Grid>
            </Stack>
          </Container>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
