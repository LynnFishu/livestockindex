import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function NotificationListTask() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="A" src="" />
        </ListItemAvatar>
        <ListItemText
          primary="Hakim"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                3/5/24
              </Typography>
              {" — I let the cow graze at lot 4 and monitored them until they have finished grazing and guide them back to their barn "}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="B" src="" />
        </ListItemAvatar>
        <ListItemText
          primary="Alex"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                2/5/24
              </Typography>
              {" — I finished haversted the eggs that were laid this week in coop 3 and 10"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="C" src="" />
        </ListItemAvatar>
        <ListItemText
          primary="Mohd"
          secondary={
            <React.Fragment> 
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                2/5/24
              </Typography>
              {' — Ive have fed the chickens in coop 3 and 10 with chicken feed for the evening'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}