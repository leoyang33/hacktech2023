import { useCallback, useState } from 'react';
import ArrowDownIcon from '@heroicons/react/24/solid/ArrowDownIcon';
import ArrowUpIcon from '@heroicons/react/24/solid/ArrowUpIcon';
import { BoltIcon, FireIcon, BeakerIcon } from "@heroicons/react/24/solid";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Stack,
  SvgIcon,
  TextField,
  Typography
} from '@mui/material';

export const InputWidget = () => {
  const [values, setValues] = useState({
    electric: '',
    gas: '',
    water: ''
  });

  const handleChange = useCallback(
    (event) => {
      setValues((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value
      }));
    },
    []
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
    },
    []
  );

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardContent>
          <Stack
          spacing={3}
          alignItems="flex-end"
          direction="row"
          justifyContent="space-bewteen"
          paddingLeft={"3%"}
          >
            <Grid
            container
            sx={{height: 200}}
            spacing={3}
            direction="column"
            alignItems="center"
            justifyContent="space-between"
            marginTop={"4%"}
            >
            <Avatar
            sx={{
              backgroundColor: 'custom.electricity',
              height: 100,
              width: 100
            }}
            >
                <SvgIcon><BoltIcon /></SvgIcon>
            </Avatar>
                <TextField
                fullWidth
                label="Enter electricity usage (kWh)"
                name="electric"
                onChange={handleChange}
                type="electric"
                value={values.electric}
                />
            </Grid>
            <Grid
            container
            sx={{height: 200}}
            spacing={3}
            direction="column"
            alignItems="center"
            justifyContent="space-between"
            marginTop={"4%"}>
                <Avatar
                    sx={{
                    backgroundColor: 'custom.water',
                    height: 100,
                    width: 100
                    }}
                    >
                        <SvgIcon><BeakerIcon /></SvgIcon>
                    </Avatar>
                <TextField
                fullWidth
                label="Enter water usage (gallons)"
                name="water"
                onChange={handleChange}
                type="water"
                value={values.water}
                />
            </Grid>
            <Grid
            container
            sx={{height: 200}}
            spacing={3}
            direction="column"
            alignItems="center"
            justifyContent="space-between"
            marginTop={"4%"}>
                <Avatar
                alignItems ="center"
                sx={{
                backgroundColor: 'custom.gas',
                height: 100,
                width: 100
                }}
                >
                    <SvgIcon><FireIcon /></SvgIcon>
                </Avatar>
                <TextField
                fullWidth
                label="Enter gas usage (cubic feet)"
                name="gas"
                onChange={handleChange}
                type="gas"
                value={values.gas}
                />
            </Grid>
        </Stack>
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button variant="contained">
            Enter
          </Button>
        </CardActions>
        </CardContent>
      </Card>
    </form>
  );
};
