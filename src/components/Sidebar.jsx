import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import FenceIcon from '@mui/icons-material/Fence';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SpaceDashboardRoundedIcon from '@mui/icons-material/SpaceDashboardRounded';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

export default function ClippedDrawer() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            LivestockIndex
          </Typography>
        </Toolbar>
      </AppBar>
      <Sidebar />
    </Box>
  );
}

function Sidebar() {
  const navigate = useNavigate();

  const handleItemClick = (path) => {
    navigate(path);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {[
            { text: 'Dashboard', icon: <SpaceDashboardRoundedIcon />, path: '/dashboard' },
            { text: 'Livestock', icon: <FenceIcon />, path: '/livestock' },
            { text: 'Mapping', icon: <TravelExploreIcon />, path: '/mapping' },
            { text: 'Tasks', icon: <AssignmentTurnedInOutlinedIcon />, path: '/tasks' },
            { text: 'Inventory', icon: <Inventory2OutlinedIcon />, path: '/inventory' },
            { text: 'Accounting', icon: <PaidOutlinedIcon />, path: '/accounting' },
            { text: 'Health', icon: <HealthAndSafetyOutlinedIcon />, path: '/health' },
          ].map((item, index) => (
            <ListItem key={index} disablePadding onClick={() => handleItemClick(item.path)}>
              <ListItemButton>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {[
            { text: 'Settings', icon: <SettingsOutlinedIcon />, path: '/settings' },
            { text: 'Help', icon: <InfoOutlinedIcon />, path: '/help' },
          ].map((item, index) => (
            <ListItem key={index} disablePadding onClick={() => handleItemClick(item.path)}>
              <ListItemButton>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
