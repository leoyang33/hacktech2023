import PropTypes from 'prop-types';
import ArrowDownIcon from '@heroicons/react/24/solid/ArrowDownIcon';
import ArrowUpIcon from '@heroicons/react/24/solid/ArrowUpIcon';
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from '@mui/material';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';

export const OverviewElectricity = (props) => {
  const { sx, usersJSON, dataJSON } = props;
  const dataInfo = dataJSON.data;
  var curUsage = Math.round(dataInfo[4]['electricUsage']);
  var prevUsage = Math.round(dataInfo[3]['electricUsage']);
  console.log(curUsage, prevUsage);
  var positive = (curUsage < prevUsage);
  var difference = Math.round(Math.abs((curUsage - prevUsage) * 100 / curUsage));

  console.log(difference)
  
  return (
    <Card sx={sx}>
      <CardContent>
        <Stack
          alignItems="flex-start"
          direction="row"
          justifyContent="space-between"
          spacing={3}
        >
          <Stack spacing={1}>
            <Typography
              color="text.secondary"
              variant="overline"
            >
              Electricity
            </Typography>
            <Typography variant="h5">
              {curUsage} KWH
            </Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: 'custom.electricity',
              height: 56,
              width: 56
            }}
          >
            <SvgIcon>
              <ElectricBoltIcon />
            </SvgIcon>
          </Avatar>
        </Stack>
        {difference && (
          <Stack
            alignItems="center"
            direction="row"
            spacing={2}
            sx={{ mt: 2 }}
          >
            <Stack
              alignItems="center"
              direction="row"
              spacing={0.5}
            >
              <SvgIcon
                color={!positive ? 'success' : 'error'}
                fontSize="small"
              >
                {positive ? <ArrowUpIcon /> : <ArrowDownIcon />}
              </SvgIcon>
              <Typography
                color={!positive ? 'success.main' : 'error.main'}
                variant="body2"
              >
                {difference}%
              </Typography>
            </Stack>
            <Typography
              color="text.secondary"
              variant="caption"
            >
              Since last month
            </Typography>
          </Stack>
        )}
      </CardContent>
    </Card>
  );
};

OverviewElectricity.prototypes = {
  sx: PropTypes.object,
};
