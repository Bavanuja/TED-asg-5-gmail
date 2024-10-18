import React from 'react'
import Header from './components/header'
import Sidebar from './components/sidebar'
import Tab from './components/tab'
import MailList from './components/mailList'
import { CssBaseline, Grid, Box, Toolbar } from '@mui/material';

export default function App() {
  return (
    <>
    <CssBaseline />
    <Header />
    <Box sx={{ display: 'flex', mt: 8 }}>
      <Toolbar />
      <Grid container sx={{ height: '100vh' }}>
        {/* Left Sidebar with small width */}
        <Grid item xs={2} sx={{ backgroundColor: '#f5f5f5' }}>
          <Sidebar />
        </Grid>

        {/* Mail List taking up the rest */}
        <Grid item xs={10} sx={{ padding: 2, backgroundColor: '#ffffff' }}>
          <Tab />
          <MailList />
        </Grid>
      </Grid>
    </Box>
  </>
  )
}

