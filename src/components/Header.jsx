import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Header() {
  return (
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#0d1726',  boxShadow: '0px 4px 12px rgba(220, 0, 0, 0.5)' }}>
        <Toolbar>
           <img src="src\assets\reels.png" alt="" width={'60'}  className='me-2'/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,fontWeight: 'bold' }}>
            Movie Explorer
          </Typography>
         {/*  <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header