"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { NavDrawer } from './drawer';
import { Calendar, Home, PenTool, Scroll } from 'lucide-react';
import { useRouter } from 'next/navigation';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import { orange } from '@mui/material/colors';
import "@/app/globals.css"

export function BottomNavBar() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

  const router = useRouter();

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Dashboard"
            icon={<Home />}
            onClick={() => {
              router.push("/dashboard");
            }} />
          <BottomNavigationAction
            label="Log"
            icon={<PenTool />}
            onClick={() => {
              router.push("/log");
            }} />
          <BottomNavigationAction
            label="Calendar"
            icon={<Calendar />}
            onClick={() => {
              router.push("/calendar");
            }} />
          <BottomNavigationAction
            label="Knowledge"
            icon={<Scroll />}
            onClick={() => {
              router.push("/knowledge");
            }} />
        </BottomNavigation>
      </Paper>
    </Box>
  )
}

export function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ bgcolor: orange }}>
        <Toolbar>
          <NavDrawer />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
