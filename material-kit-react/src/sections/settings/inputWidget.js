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
  CardHeader,
  Divider,
  Grid,
  Stack,
  SvgIcon,
  TextField,
  Typography
} from '@mui/material';

export const InputWidget = () => {
  const [values, setValues] = useState({
    password: '',
    confirm: ''
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
        <Stack
        spacing={3}
        alignItems="flex-start"
        direction="row"
        justifyContent="space-between">
        </Stack>
        <CardContent>
          <Stack
          spacing={3}
          alignItems="flex-start"
          direction="row"
          justifyContent="space-between"
          >
            <Grid
            container
            spacing={3}
            direction="column"
            alignItems="center"
            justifyContent="center"
            border={"-moz-initial"}
            borderColor={"black"}>
            <Avatar
            sx={{
              backgroundColor: 'error.main',
              height: 70,
              width: 70
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
            spacing={3}
            direction="column"
            alignItems="center"
            justifyContent="center">
                <Avatar
                alignItems ="center"
                sx={{
                backgroundColor: 'warning.main',
                height: 70,
                width: 70
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
                value={values.water}
                />
            </Grid>
            <Grid
            container
            spacing={3}
            direction="column"
            alignItems="center"
            justifyContent="center">
                <Avatar
                    sx={{
                    backgroundColor: 'success.main',
                    height: 70,
                    width: 70
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
          </Stack>
        </CardContent>
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button variant="contained">
            Enter
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};
