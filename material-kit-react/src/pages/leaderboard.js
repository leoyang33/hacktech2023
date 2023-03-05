import Head from "next/head";
import React from "react";
import { Box, Stack, Container, Typography, Unstable_Grid2 as Grid } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { LeaderboardBellCurve } from "src/sections/leaderboard/LeaderboardBellCurve";
import { OverviewSales } from "src/sections/overview/overview-sales";
import {GlobalStat} from "src/sections/global/globalStat";
const Page = () => (
  <>
    {/* <Head>
      <title>Leaderboard</title>
    </Head>
    <p>Here</p>
    <Chart height={350} options={useChartOptions()} series={chartSeries} type="bar" width="100%" /> */}
    <Head>
      <title>Leaderboard | Zap</title>
    </Head>
    {/* <LeaderboardBellCurve sx={{ height: "100%" }} /> */}
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={3}>        
          <Grid xs={12} lg={8}>
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
              sx={{ height: "100%" }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
