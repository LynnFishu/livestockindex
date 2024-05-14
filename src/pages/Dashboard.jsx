import React from 'react'
import Sidebar from '../components/Sidebar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { AppBar } from '@mui/material';
import Stack from '@mui/material/Stack';
import { PieChart } from '@mui/x-charts/PieChart';
import { LineChart } from '@mui/x-charts/LineChart';
import CardMedia from '@mui/material/CardMedia';
import GeoChart from '../components/GeoChart';



// Define the Item component or use other content
const Item = ({ children }) => (
  <Typography variant="body2" sx={{ textAlign: 'center' }}>
    {children}
  </Typography>
);

const data = [
  { id: 0, value: 100, label: 'Chicken' },
  { id: 1, value: 30, label: 'Cow' },
  { id: 2, value: 60, label: 'Duck' },
  { id: 3, value: 20, label: 'Goat' },
];


export default function Dashboard() {
  return (
    <>
      <Box height={70}>
        <Box sx={{ display: 'flex' }}>
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={3} sx={{ marginTop: '40px' }}>
              <Grid item xs={8}>
                <Stack spacing={2} direction="row">
                  <Card sx={{ maxWidth: 345 }}>
                    <img src="/images/Chicken1.png" alt="Chicken" style={{ width: '100%' }} />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Chicken
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Adult         : 300 <br />
                        Chicks        : 150 <br />
                        Mortality Rate: 5% <br />
                        Average Growth Rate: <br />
                        200 grams per week
                      </Typography>

                    </CardContent>
                  </Card>
                  <Card sx={{ maxWidth: 350 }}>
                    <img src="/images/Cow1.png" alt="Cow" style={{ width: '100%' }} />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Cow
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Adult         : 500 <br />
                        Calves          : 250 <br />
                        Mortality Rate: 3% <br />
                        Average Growth Rate: <br />
                        250 grams per week
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card sx={{ maxWidth: 345 }}>
                    <img src="/images/Duck2.png" alt="Duck" style={{ width: '100%' }} />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Duck
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Adult         : 400 <br />
                        Ducklings     : 200 <br />
                        Mortality Rate: 4% <br />
                        Average Growth Rate: <br />
                        150 grams per week
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card sx={{ maxWidth: 345 }}>
                    <img src="/images/Goat1.png" alt="Goat" style={{ width: '100%' }} />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Goat
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Adult         : 259 <br />
                        Kid           : 150 <br />
                        Mortality Rate: 3% <br />
                        Average Growth Rate: <br />
                        100 grams per week
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>
              <Grid item xs={4}>
                <Stack spacing={2}>
                  <Card sx={{ maxWidth: 600 }}>
                    <CardContent sx={{ margin: '35px' }}>
                      <Typography gutterBottom variant="h5" component="div">
                        Pie Chart
                      </Typography>
                      <PieChart
                        series={[
                          {
                            data,
                            highlightScope: { faded: 'global', highlighted: 'item' },
                            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                          },
                        ]}
                        width={400} height={250}
                      />
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>
            </Grid>
            <Box height={20}>
              <Grid container spacing={2} sx={{ marginTop: '20px' }}>
                <Grid item xs={8}>
                  <Card sx={{ height: 60 + "vh" }}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        GEO Map
                      </Typography>
                      <GeoChart />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={4}>
                  <Card sx={{ height: 60 + "vh" }}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Line Chart
                      </Typography>
                      <LineChart
                        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                        series={[
                          {
                            data: [2, 5.5, 2, 8.5, 1.5, 5],
                          },
                          {
                            data: [4, 6.5, 3, 7.5, 2.5, 3],
                          },
                          {
                            data: [6, 8.5, 5, 4.5, 5.5, 6],
                          },
                          {
                            data: [4, 5.5, 4, 3.5, 1.5, 5],
                          },
                        ]}
                        width={500}
                        height={400}
                      />
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Box>

        </Box>
      </Box>
    </>
  );
}

