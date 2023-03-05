import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { OverviewElectricity } from 'src/sections/overview/overview-electricity';
import { OverviewGas } from 'src/sections/overview/overview-gas';
import { OverviewWater } from 'src/sections/overview/overview-water';
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
        Dashboard | Zap
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
              tips={[
                "Reduce phantom load – Make sure appliances like TV and laptop are truly off when not in use. Plug appliances into power strips and turn off power strips before going to bed each night.",
                "Turn down the thermostat–  households can save as much as 5-15% a year on their heating and cooling bills by simply turning their thermostat back 10⁰ to 15⁰ for 8 hours a day.",
                "Use cold water in the washing machine and wash full loads."
                ]}
              type="Electricity"
              sx={{ height: '100%' }}
            />
          </Grid>
          <Grid xs={4}>
            <OverviewTip
              tips={["Turn off the water while brushing your teeth and shaving.",
              "Check toilets for leaks – these can waste over 100 gallons of water per day. Try putting a few drops of food coloring in the toilet tank. If, without flushing, the color starts to appear in the bowl, this is a sign of a leak.",
              "Sweep driveways and steps with a broom instead of hosing",
              "Add mulch to plants to conserve moisture. Water plants and lawns during a cool part of the day."
              ]}
              type="Water"
              sx={{ height: '100%' }}
            />
          </Grid>
          <Grid xs={4}>
            <OverviewTip
              tips={["Clean or replace filters on furnaces and air conditioners once a month or as recommended. Dirty filters reduce airflow, making the system less efficient and wasting energy.",
              "Let heat circulate by checking that curtains, drape, and rugs are not blocking heat registers and vents.",
              "Turn your hot water tank down to 120 degrees. For every 10 degree reduction in temperature, you can save between 3% and 5% on your water heating costs."
              ]}
              type="Gas"
              sx={{ height: '100%' }}
            />
          </Grid>
          <Grid xs={4}>
            <OverviewStat
              stats={["You saved 5000 gallons of water so far. That's enough water to fill up a swimming pool!",
              "You saved 500 kWh of electricity this month. That's equivalent to 427.5 lbs of carbon emissions you avoided!",
              "You saved 20 cubic feet of gas this month. That's enough to power the average car for 3.5 months!"
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
