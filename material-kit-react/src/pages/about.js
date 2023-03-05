import Head from 'next/head';
import { Box, Card, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Button, Stack, SvgIcon, Typography } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import TextField from '@mui/material/TextField';



const Page = () => (
  <>
    <Head>
      <title>
        About Us | Zap
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
          direction='column'
          paddingLeft={5}
          paddingRight={5}
        >
          <Grid>
            <Typography variant="h4">
              About Us
            </Typography>
          </Grid>
          <Grid>
            <Typography
              color="text.primary"
              variant="body1"
              align='justify'
            >
              Our idea is to incentivize people to reduce their carbon footprint by tracking monthly usage of electricity, water, and gas and comparing personal usage statistics against local and global trends. The residential sector accounts for 21% of energy usage in the US, and even a small reduction in energy usage across households would have a significant impact on carbon emissions. We chose electricity, water, and gas because they are easy to track, commonly billed utilities, and individuals have control over their personal usage.
            </Typography>
            <Typography
            color="text.primary"
            variant="body1"
            align='justify'
            paddingTop={2}
            paddingLeft={4}
            >
              - Jay, Krish, Leo, Vivian
            </Typography>
          </Grid>
          <Typography variant="h5" paddingTop={10}>
              Contact Us
            </Typography>
          <Grid container justifyContent={"center"}>
            <TextField
              id="outlined-multiline-flexible"
              label="Name"
              multiline
              maxRows={4}
            />
            <TextField
              id="outlined-textarea"
              label="Email"
              multiline
            />
            <TextField
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={4}
            />
            <Button>
              Submit
            </Button>
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