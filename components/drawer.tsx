"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import { navMainItems } from '@/lib/nav-items';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { LucideIcon } from 'lucide-react';
import ButtonRouter from './button-router';

const items = navMainItems

export function StandardNavDrawer({ items }: {
  items: {
    title: string
    url: string
    icon: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
}) {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <List
      sx={{ width: '100%', maxWidth: 200, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Navigation
        </ListSubheader>}>
        <ListItemButton>
          <ListItemIcon>"item.icon"</ListItemIcon>
          <ListItemText primary={"item.title"} />
        </ListItemButton>
    </List>
    // <List
    //   sx={{ width: '100%', maxWidth: 200, bgcolor: 'background.paper' }}
    //   component="nav"
    //   aria-labelledby="nested-list-subheader"
    //   subheader={
    //     <ListSubheader component="div" id="nested-list-subheader">
    //       Navigation
    //     </ListSubheader>}>
    //   {items.map((item) => (
    //     <ListItemButton LinkComponent={ButtonRouter()} to="/">
    //       <ListItemIcon>"item.icon"</ListItemIcon>
    //       <ListItemText primary={"item.title"} />
    //       {item.items?.length ? (
    //         <>
    //         </>
    //       ) : null}
    //     </ListItemButton>
    //   ))}
    // </List>
  )
}

export function NavDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton onClick={toggleDrawer(true)}
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
