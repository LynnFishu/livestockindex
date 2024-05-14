import React, { useState } from 'react';
import { Box, Button, Container, Divider, FormControlLabel, FormGroup, Switch, Typography } from '@mui/material';

const SettingProfile = () => {
  
  const userProfile = {
    id: '123456',
    name: 'admin123',
    email: 'admin123@livestockindex.com',
  };

  const [receiveEmailNotifications, setReceiveEmailNotifications] = useState(true);

  const handleToggleEmailNotifications = () => {
    setReceiveEmailNotifications(!receiveEmailNotifications);
  };

  const handleLogout = () => {
    console.log('Logged out');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      <Divider />
      <Box mt={3}>
        <Typography variant="h6">Profile Information</Typography>
        <Typography>
          <strong>ID:</strong> {userProfile.id}
        </Typography>
        <Typography>
          <strong>Name:</strong> {userProfile.name}
        </Typography>
        <Typography>
          <strong>Email:</strong> {userProfile.email}
        </Typography>
      </Box>
      <Box mt={3}>
        <Typography variant="h6">Settings</Typography>
        <FormGroup>
          <FormControlLabel
            control={<Switch checked={receiveEmailNotifications} onChange={handleToggleEmailNotifications} />}
            label="Receive Email Notifications"
          />
        </FormGroup>
      </Box>
      <Box mt={3}>
        <Button variant="contained" color="secondary">
          Edit Profile
        </Button>
      </Box>
      <Box mt={3}>
        <Button variant="contained" color="secondary" onClick={handleLogout}>
          Log Out
        </Button>
      </Box>
    </Container>
  );
};

export default SettingProfile;
