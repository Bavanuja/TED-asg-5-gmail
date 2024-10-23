import React from 'react'
import Header from './components/header'
import Sidebar from './components/sidebar'

import { CssBaseline, Box, Toolbar, Tab } from '@mui/material';
import Grid from '@mui/material/Grid2';
import GmailTabs from './components/tab';
import MailList from './components/mailList';
import RightBar from './components/rightBar';

export default function App() {
  return (
    <>
    <CssBaseline />
    <Header />
    <Box sx={{ display: 'flex', mt: 8 }}>
      <Toolbar />
      <Grid container sx={{ height: '100vh' }}>
        <Grid item xs={2} sx={{ backgroundColor: '#f5f5f5' }}>
          <Sidebar />
        </Grid>
        <Grid item xs={8} sx={{ padding: 3, backgroundColor: '#ffffff' }}>
        <GmailTabs/>
        <MailList/>
        </Grid>
        
      </Grid>
      <Grid item xs={2} sx={{ backgroundColor: '#f5f5f5'}}>
          <RightBar />
        </Grid>
    </Box>
  </>
  )
}

