import Head from 'next/head';
import { Box, Card, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Button, Stack, SvgIcon, Typography } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';



const Page = () => (
  <>
    <Head>
      <title>
        About Us
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non pellentesque odio, sed fringilla ex. Morbi porta eros ac augue gravida gravida efficitur ut risus. Nam a mattis ante. Sed et justo vel augue pharetra dignissim. Mauris quis nulla ut mauris laoreet vulputate. Curabitur efficitur ligula at nisl efficitur, vel dapibus erat sodales. Donec in cursus arcu, nec tempor mauris. Curabitur sodales pulvinar auctor. Suspendisse potenti. Fusce ornare mattis turpis, ac tristique odio varius non.

              Morbi consequat at ex sodales pretium. Donec sed lorem justo. Duis interdum sollicitudin libero, nec iaculis dolor aliquam sed. Etiam vulputate, mauris quis elementum finibus, leo quam efficitur elit, at consectetur nulla ante eget lorem. Aenean elementum eu quam gravida vestibulum. In a sodales quam. Ut lacus nisi, dapibus ac justo non, efficitur finibus leo. Integer venenatis urna non facilisis gravida. Nulla convallis dignissim tempor.

              Donec posuere non ipsum in fermentum. Aliquam vitae odio malesuada, semper magna eget, dictum ex. Nulla velit nisl, rhoncus venenatis dui placerat, ornare interdum nisl. Nullam blandit diam eu felis hendrerit lobortis. Aenean porta dapibus nunc. Vestibulum sit amet dui ac purus semper egestas. Quisque sit amet risus sed est tempus ornare ac sit amet dolor. Suspendisse potenti. Sed mollis gravida arcu in lobortis. Proin in gravida eros. Praesent lacinia sem tellus, eu sollicitudin purus volutpat iaculis.

              Cras fermentum dolor at ligula sodales volutpat. In id vulputate libero. Fusce et lobortis eros, non laoreet libero. Nulla facilisi. Etiam in arcu vitae nunc consectetur convallis pretium et magna. Sed dignissim enim ac tempor semper. Sed posuere et magna eu interdum. In aliquet nulla eget est facilisis, et rhoncus massa fermentum. Pellentesque pellentesque massa at augue scelerisque, sit amet elementum dolor varius. Phasellus et nunc quis lectus blandit vulputate ac at sem.

              Sed vitae gravida lectus, ac rutrum neque. Ut sed elementum massa. Curabitur fermentum dolor sed luctus cursus. Praesent in pharetra ligula. Mauris aliquet nisl sit amet massa sodales vulputate. Vestibulum mollis justo imperdiet cursus congue. Phasellus placerat, diam a vehicula viverra, eros elit suscipit odio, ut iaculis lacus ipsum in velit. In imperdiet tincidunt ex nec dictum. Cras ultricies elit at cursus iaculis. Quisque ornare libero vel diam pellentesque convallis. Phasellus laoreet neque eget odio varius placerat. Pellentesque vestibulum lorem id diam bibendum posuere. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis id tortor et ante pulvinar mattis. Nunc tincidunt quam lobortis quam tempor rhoncus. Fusce sed porta odio.
            </Typography>
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