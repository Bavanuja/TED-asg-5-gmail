import React from 'react';
import { List, Box } from '@mui/material';
import UnreadMessage from './unreadMessage';
import ReadMessage from './readMessage';

const MailList = ({ messages }) => {
  return (
    <Box sx={{ padding: '16px',  height: '100%' }}>
      <List sx={{ width: '100%', padding: 0 }}>
        {messages.map((msg) =>
          msg.read ? (
            <ReadMessage key={msg.id} {...msg} />
          ) : (
            <UnreadMessage key={msg.id} {...msg} />
          )
        )}
      </List>
    </Box>
  );
};

export default MailList;
