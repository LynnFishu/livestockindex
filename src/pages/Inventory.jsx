import React from 'react'
import Sidebar from '../components/Sidebar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { AppBar } from '@mui/material';
import Stack from '@mui/material/Stack';
import InventoryTable from '../components/InventoryTable';






export default function Inventory() {
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
                            Inventory
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                          Inventory Management<br />
                          </Typography>
                          <InventoryTable />
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
    