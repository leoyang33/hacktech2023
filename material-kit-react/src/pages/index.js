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
            sm={6}
            lg={3}
          >
            <OverviewElectricity
              difference={12}
              positive={false}
              sx={{ height: '100%' }}
              value="20k KWH"
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewWater
              difference={16}
              positive={true}
              sx={{ height: '100%' }}
              value="2k CCF"
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewGas
              difference={12}
              positive={false}
              sx={{ height: '100%' }}
              value="120 CCF"
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewTotalProfit
              sx={{ height: '100%' }}
              value="$15k"
            />
          </Grid>
          <Grid
            xs={12}
            lg={8}
          >
            <OverviewSales
              chartSeries={[
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
            xs={12}
            md={6}
            lg={4}
          >
            <OverviewLatestProducts
              products={[
                {
                  id: '5ece2c077e39da27658aa8a9',
                  image: '/assets/products/product-1.png',
                  name: 'Healthcare Erbology',
                  updatedAt: subHours(now, 6).getTime()
                },
                {
                  id: '5ece2c0d16f70bff2cf86cd8',
                  image: '/assets/products/product-2.png',
                  name: 'Makeup Lancome Rouge',
                  updatedAt: subDays(subHours(now, 8), 2).getTime()
                },
                {
                  id: 'b393ce1b09c1254c3a92c827',
                  image: '/assets/products/product-5.png',
                  name: 'Skincare Soja CO',
                  updatedAt: subDays(subHours(now, 1), 1).getTime()
                },
                {
                  id: 'a6ede15670da63f49f752c89',
                  image: '/assets/products/product-6.png',
                  name: 'Makeup Lipstick',
                  updatedAt: subDays(subHours(now, 3), 3).getTime()
                },
                {
                  id: 'bcad5524fe3a2f8f8620ceda',
                  image: '/assets/products/product-7.png',
                  name: 'Healthcare Ritual',
                  updatedAt: subDays(subHours(now, 5), 6).getTime()
                }
              ]}
              sx={{ height: '100%' }}
            />
          </Grid>
          <Grid
            xs={12}
            md={12}
            lg={8}
          >
            <OverviewLatestOrders
              orders={[
                {
                  id: 'f69f88012978187a6c12897f',
                  ref: 'DEV1049',
                  amount: 30.5,
                  customer: {
                    name: 'Ekaterina Tankova'
                  },
                  createdAt: 1555016400000,
                  status: 'pending'
                },
                {
                  id: '9eaa1c7dd4433f413c308ce2',
                  ref: 'DEV1048',
                  amount: 25.1,
                  customer: {
                    name: 'Cao Yu'
                  },
                  createdAt: 1555016400000,
                  status: 'delivered'
                },
                {
                  id: '01a5230c811bd04996ce7c13',
                  ref: 'DEV1047',
                  amount: 10.99,
                  customer: {
                    name: 'Alexa Richardson'
                  },
                  createdAt: 1554930000000,
                  status: 'refunded'
                },
                {
                  id: '1f4e1bd0a87cea23cdb83d18',
                  ref: 'DEV1046',
                  amount: 96.43,
                  customer: {
                    name: 'Anje Keizer'
                  },
                  createdAt: 1554757200000,
                  status: 'pending'
                },
                {
                  id: '9f974f239d29ede969367103',
                  ref: 'DEV1045',
                  amount: 32.54,
                  customer: {
                    name: 'Clarke Gillebert'
                  },
                  createdAt: 1554670800000,
                  status: 'delivered'
                },
                {
                  id: 'ffc83c1560ec2f66a1c05596',
                  ref: 'DEV1044',
                  amount: 16.76,
                  customer: {
                    name: 'Adam Denisov'
                  },
                  createdAt: 1554670800000,
                  status: 'delivered'
                }
              ]}
              sx={{ height: '100%' }}
            />
          </Grid>
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
              sx={{ height: '50vh' }}
            />
          </Grid>
          <Grid xs={4}>
            <OverviewStat
              stats={["You saved 5000 gallons of water so far this year. That's enough water to fill up a swimming pool!",
              "You saved 500 kWh of elecricity this month. That's equivalent to 427.5 lbs of carbon emissions you avoided!",
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
