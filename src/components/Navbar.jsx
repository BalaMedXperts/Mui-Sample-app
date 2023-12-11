import React, { useState } from 'react'
import { AppBar,styled,Box, Toolbar,Typography,Badge, Avatar, Menu, MenuItem } from '@mui/material'

import { Mail, Notifications, Pets } from '@mui/icons-material';
import {InputBase} from '@mui/material';
const StyledToolbar=styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between",
});

const Search=styled("div")(({theme})=>({
    backgroundColor:"white",
    padding:"0 10px",
    borderRadius:theme.shape.borderRadius,
    width:"40%"
}))

const Icons=styled(Box)(({theme})=>({
    display:"none",
    gap:"20px",
    alignItems:"center",
   [theme.breakpoints.up("sm")]:{
    display:"flex"
   }
}))

const UserBox = styled(Box)(({theme})=>({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    [theme.breakpoints.up("sm")]:{
        display:"none"
    }
}));
const Navbar = () => {
    const[open,setOpen] =useState(false)
  return (
    <AppBar position='sticky'>
        <StyledToolbar>
            <Typography variant='h6' sx={{display:{xs:"none",sm:"block"}}} >Lama dev</Typography>
            <Pets sx={{display:{xs:"block",sm:"none"}}} />
            <Search ><InputBase placeholder='Search . . .'>Search</InputBase></Search>
            <Icons>
            <Badge badgeContent={4} color="error">
               <Mail />
            </Badge>
            <Badge badgeContent={2} color="error">
               <Notifications />
            </Badge>
            <Avatar sx={{width:30,height:30}} src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
            onClick={(e)=>setOpen(true)}
            />
            </Icons>
            <UserBox onClick={(e)=>setOpen(true)} >
               <Avatar sx={{width:30,height:30}} 
                src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
            </UserBox>
        </StyledToolbar>
        <Menu
        id="basic-menu"
        anchorOrigin={{
            vertical:'top',
            horizontal:'right',
        }}
        open={open}
        onClose={(e)=>setOpen(false)}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
            <MenuItem >Profile</MenuItem>
            <MenuItem >My account</MenuItem>
            <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar