import Head from "next/head";
import { Box, Container, Stack, Typography, Grid } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { GlobalStat } from "src/sections/global/globalStat";
import { InteractiveMap } from "src/sections/map/interactiveMap";
import { TextWidget } from "src/sections/global/textWidget";

const Page = () => (
  <>
    <Head>
      <title>Global Impact | Zap</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      
      <Container>
      
        <Grid container maxWidth="xl" alignItems="center">
          <Typography variant="h4">Global Impact</Typography>

          <Grid container spacing={5} paddingTop={7} alignItems="center">
            <Grid xs={12} paddingLeft={5}>
              <InteractiveMap />
            </Grid>
            <Grid container direction="row" spacing={3} justifyContent="space-between" paddingTop={6} paddingLeft={8}>
              <Grid xs={4}>
                <GlobalStat
                  text={
                    "Users in California used a combined 200,000 kWh less this month than average. That's 163,600 lbs of carbon out of the atmosphere! Keep up the good work!"
                  }
                  title="Electric Savings"
                  type="Electricity"
                  sx={{ height: "100%" }}
                />
              </Grid>
              <Grid xs={4}>
                <GlobalStat
                  text={
                    "Users in your state saved 1,000,000 gallons of water total this month. That's a 1% decrease, saving 380,000 lbs of CO2 from wastewater treatment plants!"
                  }
                  title="Water Savings"
                  type="Water"
                  sx={{ height: "100%" }}
                />
              </Grid>
              <Grid xs={4}>
                <GlobalStat
                  text={
                    "Users in your state used a combined 200,000 cubic feet less of gas this month. That's 29,600,000 lbs of CO2 out of the atmosphere!"
                  }
                  title="Gas Savings"
                  type="Gas"
                  sx={{ height: "100%" }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid paddingTop={3}>
          <TextWidget
          paddingTop={3}
          title="Let's work together!"
          text="Resource management and efficiency is one of the key ways to meet energy service demand while mitigating global warming. Just a 1% decrease in nationwide residential energy usage can decrease greenhouse gas emissions by 46 million metric tons a year."
          />
          </Grid>
          
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
