import Head from 'next/head';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { OverviewTip } from 'src/sections/testthings/overview-tip';



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
      <Container maxWidth="xl">
        <Grid
          container
          spacing={3}
        >
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