import React from 'react';
import { ListItem, Grid, Checkbox, Typography, IconButton } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const ReadMessage = ({ sender, caption, time }) => {
  return (
    <ListItem
      sx={{
       marginBottom: '8px',
        borderRadius: '8px',
        padding: '8px',
      }}
    >
      <Grid container alignItems="center" spacing={2} >
        <Grid item>
          <Checkbox />
        </Grid>
        <Grid item>
          <IconButton>
            <StarBorderIcon />
          </IconButton>
        </Grid>
        <Grid item xs>
          <Typography>{sender}</Typography>
          <Typography variant="body2">{caption}</Typography>
        </Grid>
        <Grid item>
          <Typography>{time}</Typography>
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default ReadMessage;
