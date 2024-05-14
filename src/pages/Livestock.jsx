import React from 'react'
import Sidebar from '../components/Sidebar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { AppBar } from '@mui/material';
import Stack from '@mui/material/Stack';
import LivestockDemographicsChart from '../components/LiveStockDemographicChart';
import MortalityRateChart from '../components/MortalityRateChart';
import AverageGrowthChart from '../components/AverageGrowthChart';





export default function Livestock() {
    return (
        <>
          <Box height={70}>
            <Box sx={{ display: 'flex' }}>
              <Sidebar />
              <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Grid container spacing={3} sx={{ marginTop: '45px' }}>
                  <Grid item xs={8} sm={6}>
                      <Card sx={{ maxWidth: 800, height: 50 + 'vh' }}>
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                          Livestock Demographics
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                           Demographics for each animal yearly <br />
                          </Typography>
                          <LivestockDemographicsChart />
                        </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4} sm={6}>
                      <Card sx={{ maxWidth: 800, height: 50 + 'vh' }}>
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                          Mortality Rate
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Mortality Rate for each animal yearly <br />
                          </Typography>
                          <MortalityRateChart />
                        </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <Card sx={{ maxWidth: 1600, height: 45 + 'vh' }}>
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                          Average Growth 
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Average Growth for each animal monthly <br />
                          </Typography>
                          <AverageGrowthChart />
                        </CardContent>
                        </Card>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Box>
        </>
      );
    }
    