import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { OverviewElectricity } from 'src/sections/overview/overview-electricity';
import { OverviewLatestOrders } from 'src/sections/overview/overview-latest-orders';
import { OverviewLatestProducts } from 'src/sections/overview/overview-latest-products';
import { OverviewSales } from 'src/sections/overview/overview-sales';
import { OverviewGas } from 'src/sections/overview/overview-gas';
import { OverviewWater } from 'src/sections/overview/overview-water';
import { OverviewTotalProfit } from 'src/sections/overview/overview-total-profit';
import { OverviewTraffic } from 'src/sections/overview/overview-traffic';
import { OverviewTip } from 'src/sections/overview/overview-tip'
import { OverviewStat } from 'src/sections/overview/overview-stats'
import { OverviewUsage } from 'src/sections/overview/overview-usage';
import dataJSON from '../data/data.json';
import usersJSON from '../data/users.json';
import { OverviewBill } from 'src/sections/overview/overview-bill';


const now = new Date();

const Page = () => (
  <>
    <Head>
      <title>
        Overview
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={3}
        >
          <Grid
            xs={12}
            md={6}
            lg={4}
          >
            <OverviewTraffic
              chartSeries={[100, 325, 215]}
              labels={['Water','Electricity', 'Gas']}
              sx={{ height: '100%' }}
            />
          </Grid>
          <Grid
            xs={8}
          >
            <OverviewUsage
              graphs={[
                {
                  name: 'Electricity',
                  data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20]
                },
                {
                  name: 'Water',
                  data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13]
                },
                {
                  name: 'Gas',
                  data: [5, 6, 4, 6, 3, 7, 9, 7, 5, 5, 8, 9]
                }
              ]}
              sx={{ height: '100%' }}
            />
          </Grid>
          
          {/* start overview utilities */}
          
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewBill
              sx={{ height: '100%' }}
              value="$640"
              difference="6"
              positive
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewElectricity
              sx={{ height: '100%' }}
              usersJSON = {usersJSON}
              dataJSON = {dataJSON}
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewWater
              sx={{ height: '100%' }}
              usersJSON = {usersJSON}
              dataJSON = {dataJSON}
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewGas
              sx={{ height: '100%' }}
              usersJSON = {usersJSON}
              dataJSON = {dataJSON}
            />
          </Grid>
          
          {/* end overview utilities */}
          <Grid xs={4}>
            <OverviewTip
              tips={["You can save electricity by turning off the lights. Turning off the lights makes you use less electricity!",
              "Tip 2",
              "Tip 3"
              ]}
              type="Electricity"
              sx={{ height: '100%' }}
            />
          </Grid>
          <Grid xs={4}>
            <OverviewTip
              tips={["You can save water by turning off the water. Turning off the water makes you use less water!",
              "Tip 2",
              "Tip 3"
              ]}
              type="Water"
              sx={{ height: '100%' }}
            />
          </Grid>
          <Grid xs={4}>
            <OverviewTip
              tips={["You can save gas by turning off the gas. Turning off the gas makes you use less gas!",
              "Tip 2",
              "Tip 3"
              ]}
              type="Gas"
              sx={{ height: '35vh' }}
            />
          </Grid>
          <Grid xs={4}>
            <OverviewStat
              stats={["You saved enough water to fill up a swimming pool!",
              "Stat 2",
              "Stat 3"
              ]}
              sx={{ height: '100%' }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
