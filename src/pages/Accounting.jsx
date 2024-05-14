import React from 'react';
import Sidebar from '../components/Sidebar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import ExpenseRecordTable from '../components/ExpenseRecordTable';
import ExpenseAnalysisChart from '../components/ExpenseAnalysisChart';

export default function Accounting() {
  return (
    <>
      <Box height={70}>
        <Box sx={{ display: 'flex' }}>
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={3} sx={{ marginTop: '30px' }}>
              <Grid item xs={12} sm={12}>
                <Stack spacing={4}>
                  <Card sx={{ maxWidth: 1600, height: 45 + 'vh' }}>
                    <Box sx={{ overflowY: 'auto', maxHeight: '100%' }}>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Accounting
                        </Typography>
                        <ExpenseRecordTable />
                      </CardContent>
                    </Box>
                  </Card>
                  <Card sx={{ maxWidth: 1600, height: 40 + 'vh' }}>
                    <CardContent>
                      <Typography gutterBottom variant="h7" component="div">
                        EXPENSE ANALYSIS<br />
                      </Typography>
                      <ExpenseAnalysisChart />
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}
