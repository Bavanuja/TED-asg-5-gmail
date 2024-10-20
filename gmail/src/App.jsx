import React from 'react'
import Header from './components/header'
import Sidebar from './components/sidebar'

import { CssBaseline, Box, Toolbar } from '@mui/material';
import Grid from '@mui/material/Grid2';
import MailList from './components/mailList';
import Gmail from './components/gmail';

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
        <Grid item xs={10} sx={{ padding: 3, backgroundColor: '#ffffff' }}>
          <Gmail />
          </Grid>
      </Grid>
    </Box>
  </>
  )
}

