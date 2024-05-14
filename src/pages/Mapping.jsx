import React from 'react'
import Sidebar from '../components/Sidebar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { AppBar } from '@mui/material';
import Stack from '@mui/material/Stack';
import RelocationTable from '../components/RelocationTable';



export default function Mapping() {
  return (
    <>
      <Box height={70}>
        <Box sx={{ display: 'flex' }}>
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={3} sx={{ marginTop: '45px' }}>
              <Grid item xs={12} sm={10}>
                <Card sx={{ maxWidth: 1350, height: 48 + 'vh' }}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Editable Map Here
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Note: It should be able to be edited  <br />
                      users can sketch a line to set up their location of kept animals <br />
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ maxWidth: 1350, height: '40vh', marginTop: '5px' }}>
                  <Box sx={{ overflowY: 'auto', maxHeight: '100%' }}>
                    <CardContent>
                      <RelocationTable /> 
                    </CardContent>
                  </Box>
                </Card>
              </Grid>
              <Grid item xs={2}>
                <Card sx={{ maxWidth: 400, height: 89 + 'vh' }}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Recent Re-location
                    </Typography>
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
