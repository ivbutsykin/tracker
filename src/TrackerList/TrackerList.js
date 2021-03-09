import { Component } from 'react';

import {
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Divider, Typography
} from '@material-ui/core';
import { green, grey, red } from '@material-ui/core/colors';

import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

class TrackerList extends Component {
  render() {
    return (
      <List>
        <Divider/>
        <ListItem style={{ paddingRight: 96 }}>
          <ListItemText
            primary={
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                color: green[500]
              }}>
                <Typography display="inline" style={{
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}>
                  No name tracker #1
                </Typography>
                <Typography display="inline">00:01:32</Typography>
              </div>
            }
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" style={{ color: grey[900] }}>
              <PauseCircleOutlineIcon/>
            </IconButton>
            <IconButton edge="end" style={{ color: red[300] }}>
              <RemoveCircleOutlineIcon/>
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <Divider/>
      </List>
    );
  }
}

export default TrackerList;
