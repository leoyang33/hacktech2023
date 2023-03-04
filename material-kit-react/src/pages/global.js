import Head from 'next/head';
import { Box, Container, Stack, Typography, Grid } from '@mui/material';
import { SettingsNotifications } from 'src/sections/settings/settings-notifications';
import { InputWidget } from 'src/sections/settings/inputWidget';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { GlobalStat } from 'src/sections/global/globalStat'

const Page = () => (
  <>
    <Head>
      <title>
        Upload Usage
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
          <Typography variant="h4">
            Global impact
          </Typography>
          <Grid container
          spacing={4}
          margin={4}>
          <Grid xs={4}
          padding={1}>
            <GlobalStat
              text={"Users in your state saved 200,000 kWh of electricity this month!"}
              title="State impact"
              type="Electricity"
              sx={{ height: '100%' }}
            />
          </Grid>
          <Grid xs={4}
          padding={1}>
            <GlobalStat
              text={"Users in your state saved 50,000 gallons of water this month!"}
              title="State impact"
              type="Water"
              sx={{ height: '100%' }}
            />
          </Grid>
          <Grid xs={4}
          padding={1}>
            <GlobalStat
              text={"Users in your state saved 200,000 cubic feet of gas this month!"}
              title="State impact"
              type="Gas"
              sx={{ height: '100%' }}
            />
          </Grid>
          </Grid>
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
