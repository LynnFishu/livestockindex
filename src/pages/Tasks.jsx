import React from 'react'
import Sidebar from '../components/Sidebar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { AppBar } from '@mui/material';
import Stack from '@mui/material/Stack';
import NotificationListTask from '../components/NotificationListTask';
import TodoList from '../components/Todolist';




export default function Tasks() {
  return (
    <>
      <Box height={70}>
        <Box sx={{ display: 'flex' }}>
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={3} sx={{ marginTop: '45px' }}>
              <Grid item xs={12} sm={10}>
                <Card sx={{ maxWidth: 1350, height: 85 + 'vh' }}>
                  <Box sx={{ overflowY: 'auto', maxHeight: '100%' }}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Task Board
                      </Typography>
                      <TodoList />
                    </CardContent>
                  </Box>
                </Card>
              </Grid>
              <Grid item xs={2}>
                <Card sx={{ maxWidth: 400, height: 85 + 'vh' }}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Recent Activities
                    </Typography>
                    <NotificationListTask />
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

