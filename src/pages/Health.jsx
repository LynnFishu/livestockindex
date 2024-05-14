import React from 'react'
import Sidebar from '../components/Sidebar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { AppBar } from '@mui/material';
import Stack from '@mui/material/Stack';
import Calendar from '../components/Calendar';
import NotificationListHealth from '../components/NotificationListHealth';





export default function Health() {
    return (
        <>
          <Box height={70}>
            <Box sx={{ display: 'flex' }}>
              <Sidebar />
              <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Grid container spacing={3} sx={{ marginTop: '45px' }}>
                  <Grid item xs={12} sm={10}>
                      <Card sx={{ maxWidth: 1350, height: 85 + 'vh' }}>
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            Health
                          </Typography>
                          <Calendar />
                        </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={2}>
                      <Card sx={{ maxWidth: 400, height: 85 + 'vh' }}>
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            Alerts
                          </Typography>
                          <NotificationListHealth />
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
    