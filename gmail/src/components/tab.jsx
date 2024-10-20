import React, { useState } from 'react';
import { Tabs, Tab, Box, Badge } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const GmailTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  

  return (
    <Box 
      sx={{ 
        width: '100%', 
        bgcolor: 'background.paper', 
        borderBottom: 1, 
        borderColor: 'divider',
        }}
    >
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        
      >
        <Tab 
          icon={
            <Badge badgeContent={2} color="error">
              <InboxIcon />
            </Badge>
          } 
          label="Primary" 
          
        />
        <Tab 
          icon={
            <Badge badgeContent={3} color="error">
              <PeopleIcon />
            </Badge>
          } 
          label="Social" 
          
          
        />
        <Tab 
          icon={
            <Badge badgeContent={1} color="error">
              <LocalOfferIcon />
            </Badge>
          } 
          label="Promotions" 
          
        />
      </Tabs>
    </Box>
  );
};

export default GmailTabs;
