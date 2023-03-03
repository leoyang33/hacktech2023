import Head from 'next/head';
import { Box, Container, Stack, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { LeaderboardNeighbourhoodLeaderboard } from 'src/sections/leaderboard/leaderboard-neighbourhood-leaderboard';
import dataJSON from '../data/data.json';
import usersJSON from '../data/users.json';

const Page = () => (
  <>
    <Head>
      <title>
        Test Page
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
              Test Page
            </Typography>
          </div>
          <div>
            <Grid
              container
              spacing={3}
            >
              <Grid 
                xs={12}
                md={12}
                lg={8}>
                <LeaderboardNeighbourhoodLeaderboard
                  usersJSON = {usersJSON}
                  dataJSON = {dataJSON}
                  sx={{ height: '100%' }}
                />
              </Grid>
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
