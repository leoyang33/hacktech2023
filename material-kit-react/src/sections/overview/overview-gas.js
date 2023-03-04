import PropTypes from 'prop-types';
import ArrowDownIcon from '@heroicons/react/24/solid/ArrowDownIcon';
import ArrowUpIcon from '@heroicons/react/24/solid/ArrowUpIcon';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from '@mui/material';


export const OverviewGas = (props) => {
  const { sx, usersJSON, dataJSON } = props;
  const dataInfo = dataJSON.data;
  var curUsage = Math.round(dataInfo[4]['gasUsage']);
  var prevUsage = Math.round(dataInfo[3]['gasUsage']);
  console.log(curUsage, prevUsage);
  var positive = (curUsage < prevUsage);
  var value = curUsage;
  var difference = Math.round(Math.abs((curUsage - prevUsage) * 100 / curUsage));


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
              Gas
            </Typography>
            <Typography variant="h5">
              {value} CFT
            </Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: 'custom.gas',
              height: 56,
              width: 56
            }}
          >
            <SvgIcon>
              <LocalFireDepartmentIcon />
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

OverviewGas.propTypes = {
  sx: PropTypes.object
};

