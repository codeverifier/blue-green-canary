import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import RequestCounter from './RequestCounter';
import { APP_HOSTNAME, APP_CANARY_COLOR } from './AppConfig';

import './App.css';

function Copyright() {
  return (
    <Typography variant="body2" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://solo.io" target="_blank" rel="noreferrer">
        solo.io
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

function App() {
  const renderHostname = () => {
    if (APP_HOSTNAME) {
      return <Typography variant="h5" component="div">{APP_HOSTNAME}</Typography>;
    } else {
      return <Typography variant="h5" component="div">{'Undefined'}</Typography>;
    }
  }

  const checkCanaryColor = () => {
    if (APP_CANARY_COLOR) {
      if (APP_CANARY_COLOR === 'green') {
        return "green-flip";
      } else if (APP_CANARY_COLOR === 'blue') {
        return "blue-flip";
      } else if (APP_CANARY_COLOR === 'gray') {
        return "gray-flip";
      }
    }
    return "gray-flip";
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      <Grid container spacing={20} direction="column" alignItems="center" justifyContent="center">
        <Grid item xs={3}>
          <Container component="main" sx={{ mt: 8, mb: 2 }}>
            <Typography variant="h2" component="h1" align="center" gutterBottom>
              Blue Green Canary Application
            </Typography>
          </Container>
        </Grid>
        <Grid item xs={8}>
          <RequestCounter tickerColor={checkCanaryColor()}/>
          <Typography variant="body1" component="h2" align="center" gutterBottom>
            {'Number of messages received'}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="body1" component="h2" align="center" gutterBottom>
            <Card style={{ backgroundColor: "rgb(32, 38, 45)" }} sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} gutterBottom>
                  Hostname
                </Typography>
                {renderHostname()}
              </CardContent>
            </Card>
          </Typography>
        </Grid>
      </Grid>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto'
        }}
      >
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}

export default App;
