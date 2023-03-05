import { useCallback, useState } from 'react';
import ArrowDownIcon from '@heroicons/react/24/solid/ArrowDownIcon';
import ArrowUpIcon from '@heroicons/react/24/solid/ArrowUpIcon';
import { BoltIcon, FireIcon, BeakerIcon } from "@heroicons/react/24/solid";
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import OpacityIcon from '@mui/icons-material/Opacity';
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
      setValues({electric: '', gas : '', water: ''})
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
            sx={{height: 250}}
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
                <SvgIcon><ElectricBoltIcon /></SvgIcon>
            </Avatar>
                <TextField
                fullWidth
                label="Enter electricity usage (kWh)"
                name="electric"
                onChange={handleChange}
                type="electric"
                value={values.electric}
                />
                <Button
                  variant="contained"
                  component="label"
                >
                  Upload Electric Bill
                  <input
                    type="file"
                    hidden
                  />
                </Button>
            </Grid>
            <Grid
            container
            sx={{height: 250}}
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
                        <SvgIcon><OpacityIcon /></SvgIcon>
                    </Avatar>
                <TextField
                fullWidth
                label="Enter water usage (gallons)"
                name="water"
                onChange={handleChange}
                type="water"
                value={values.water}
                />
                <Button
                  variant="contained"
                  component="label"
                >
                  Upload Water Bill
                  <input
                    type="file"
                    hidden
                  />
                </Button>
            </Grid>
            <Grid
            container
            sx={{height: 250}}
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
                    <SvgIcon><LocalFireDepartmentIcon /></SvgIcon>
                </Avatar>
                <TextField
                fullWidth
                label="Enter gas usage (cubic feet)"
                name="gas"
                onChange={handleChange}
                type="gas"
                value={values.gas}
                />
                <Button
                  variant="contained"
                  component="label"
                >
                  Upload Gas Bill
                  <input
                    type="file"
                    hidden
                  />
                </Button>
            </Grid>
        </Stack>
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button variant="contained"
          onClick={handleSubmit}>
            Enter
          </Button>
        </CardActions>
        </CardContent>
      </Card>
    </form>
  );
};
