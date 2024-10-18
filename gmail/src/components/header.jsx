import React from 'react'
import { AppBar, Toolbar, IconButton, InputBase, Box, Avatar } from '@mui/material';
import { Menu, Search, Tune } from '@mui/icons-material';
import AppsIcon from '@mui/icons-material/Apps';
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Header() {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'white', boxShadow: 1 }}>
    <Toolbar>
      <IconButton edge="start" sx={{ mr: 2 }}>
        <Menu />
      </IconButton>
      <img
        src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
        alt="Gmail Logo"
        style={{ height: '40px', marginRight: '20px' }}
      />
      <Box sx={{ display: 'flex', flex: 1, alignItems: 'center', backgroundColor: '#f1f3f4', borderRadius: 5, px: 2 }}>
        <Search />
        <InputBase placeholder="Search mail" fullWidth sx={{ ml: 1}} />
        <IconButton>
          <Tune />
        </IconButton>
      </Box>
      <IconButton sx={{ ml: 2 }}>
      <HelpIcon />
      <SettingsIcon />
      <AppsIcon />
      <Avatar src="gimage.jpg" sx={{marginLeft:2 }} />
      </IconButton>
    </Toolbar>
  </AppBar>
  )
}
