import { useCallback, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Unstable_Grid2 as Grid
} from '@mui/material';

const states = [
  {
    label: "Alabama",
    value: "AL"
},
{
    label: "Alaska",
    value: "AK"
},
{
    label: "American Samoa",
    value: "AS"
},
{
    label: "Arizona",
    value: "AZ"
},
{
    label: "Arkansas",
    value: "AR"
},
{
    label: "California",
    value: "CA"
},
{
    label: "Colorado",
    value: "CO"
},
{
    label: "Connecticut",
    value: "CT"
},
{
    label: "Delaware",
    value: "DE"
},
{
    label: "District Of Columbia",
    value: "DC"
},
{
    label: "Federated States Of Micronesia",
    value: "FM"
},
{
    label: "Florida",
    value: "FL"
},
{
    label: "Georgia",
    value: "GA"
},
{
    label: "Guam",
    value: "GU"
},
{
    label: "Hawaii",
    value: "HI"
},
{
    label: "Idaho",
    value: "ID"
},
{
    label: "Illinois",
    value: "IL"
},
{
    label: "Indiana",
    value: "IN"
},
{
    label: "Iowa",
    value: "IA"
},
{
    label: "Kansas",
    value: "KS"
},
{
    label: "Kentucky",
    value: "KY"
},
{
    label: "Louisiana",
    value: "LA"
},
{
    label: "Maine",
    value: "ME"
},
{
    label: "Marshall Islands",
    value: "MH"
},
{
    label: "Maryland",
    value: "MD"
},
{
    label: "Massachusetts",
    value: "MA"
},
{
    label: "Michigan",
    value: "MI"
},
{
    label: "Minnesota",
    value: "MN"
},
{
    label: "Mississippi",
    value: "MS"
},
{
    label: "Missouri",
    value: "MO"
},
{
    label: "Montana",
    value: "MT"
},
{
    label: "Nebraska",
    value: "NE"
},
{
    label: "Nevada",
    value: "NV"
},
{
    label: "New Hampshire",
    value: "NH"
},
{
    label: "New Jersey",
    value: "NJ"
},
{
    label: "New Mexico",
    value: "NM"
},
{
    label: "New York",
    value: "NY"
},
{
    label: "North Carolina",
    value: "NC"
},
{
    label: "North Dakota",
    value: "ND"
},
{
    label: "Northern Mariana Islands",
    value: "MP"
},
{
    label: "Ohio",
    value: "OH"
},
{
    label: "Oklahoma",
    value: "OK"
},
{
    label: "Oregon",
    value: "OR"
},
{
    label: "Palau",
    value: "PW"
},
{
    label: "Pennsylvania",
    value: "PA"
},
{
    label: "Puerto Rico",
    value: "PR"
},
{
    label: "Rhode Island",
    value: "RI"
},
{
    label: "South Carolina",
    value: "SC"
},
{
    label: "South Dakota",
    value: "SD"
},
{
    label: "Tennessee",
    value: "TN"
},
{
    label: "Texas",
    value: "TX"
},
{
    label: "Utah",
    value: "UT"
},
{
    label: "Vermont",
    value: "VT"
},
{
    label: "Virgin Islands",
    value: "VI"
},
{
    label: "Virginia",
    value: "VA"
},
{
    label: "Washington",
    value: "WA"
},
{
    label: "West Virginia",
    value: "WV"
},
{
    label: "Wisconsin",
    value: "WI"
},
{
    label: "Wyoming",
    value: "WY"
}
];

export const AccountProfileDetails = () => {
  const [values, setValues] = useState({
    firstName: 'Krish',
    lastName: 'Mehta',
    email: 'kmmehta@caltech.edu',
    householdSize: 1,
    state: 'CA',
    city: 'Pasadena'
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
    <form
      autoComplete="off"
      noValidate
      onSubmit={handleSubmit}
    >
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Profile"
        />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid
              container
              spacing={3}
            >
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="First name"
                  name="firstName"
                  onChange={handleChange}
                  required
                  value={values.firstName}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Last name"
                  name="lastName"
                  onChange={handleChange}
                  required
                  value={values.lastName}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  onChange={handleChange}
                  required
                  value={values.email}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Household Size"
                  name="householdSize"
                  onChange={handleChange}
                  type="number"
                  value={values.householdSize}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="City"
                  name="city"
                  onChange={handleChange}
                  required
                  value={values.city}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Select State"
                  name="state"
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={values.state}
                >
                  {states.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button variant="contained">
            Save details
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};
