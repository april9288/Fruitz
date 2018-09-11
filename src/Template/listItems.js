import React from 'react';
import ListItem from '@material-ui/core/ListItem';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

import DashboardIcon from '@material-ui/icons/Dashboard';
import AndroidIcon from '@material-ui/icons/Android';
import PollIcon from '@material-ui/icons/Poll';
import InfoIcon from '@material-ui/icons/Info';
import SpaIcon from '@material-ui/icons/Spa';


export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AndroidIcon />
      </ListItemIcon>
      <ListItemText primary="Training Mode" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PollIcon />
      </ListItemIcon>
      <ListItemText primary="Test Mode" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <InfoIcon />
      </ListItemIcon>
      <ListItemText primary="Tutorial" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <SpaIcon />
      </ListItemIcon>
      <ListItemText primary="Github" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SpaIcon />
      </ListItemIcon>
      <ListItemText primary="Linkedin" />
    </ListItem>
  </div>
);