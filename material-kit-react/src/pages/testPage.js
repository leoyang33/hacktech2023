import Head from 'next/head';
import { Box, Container, Stack, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import {  }
import { LeaderboardNeighbourhoodLeaderboard } from 'src/sections/leaderboard/leaderboard-neighbourhood-leaderboard';


const Page = () => (
  <>
    <Head>
      <title>
        Account | Devias Kit
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3}>
          <div>
            <Typography variant="h4">
              Account
            </Typography>
          </div>
          <div>
            <Grid
              container
              spacing={3}
            >
              <LeaderboardNeighbourhoodLeaderboard
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
          </div>
        </Stack>
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
