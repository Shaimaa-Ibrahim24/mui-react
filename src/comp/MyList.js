import { Box, List, useTheme } from '@mui/material';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import {ListItem} from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Switch from '@mui/material/Switch';
import { DarkMode, LightMode } from '@mui/icons-material';

const MyList = ({setmymode,showlist, setshowlist}) => {
const theme =  useTheme()
  const lista = [
    {title:"HomePage",icon:<HomeIcon/>},
    {title:"Pages",icon:<ArticleIcon/>},
    {title:"Groups",icon:<GroupIcon/>},
    {title:"Marketplace",icon:<StorefrontIcon/>},
    {title:"Friends",icon:<PersonIcon/>},
    {title:"Settings",icon:<SettingsIcon/>},
    {title:"Profile",icon:<AccountBoxIcon/>},
  ]
  
  return (
    <Box className="myko" sx={{minWidth:"222px",flexGrow:{md:"1.5",lg:"3"},display:{xs:showlist,md:"block"},bgcolor:theme.palette.favColor.main}}>
      <List sx={{position:"fixed"}}>
        {lista.map((item) => {
          return(
            <ListItem key={item.title} disablePadding>
            <ListItemButton>
              <ListItemIcon>
              {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
          )
        })}
        <ListItem>
        <ListItemIcon>
          {theme.palette.mode === "dark"? <DarkMode/>:<LightMode/>}
        </ListItemIcon>
        <ListItemText sx={{textTransform:"capitalize"}}  primary={theme.palette.mode} />
        <Switch
          edge="end"
          onChange={() => {
            localStorage.setItem("currentmode",theme.palette.mode === "light"?"dark":"light")
      setmymode(theme.palette.mode === "light"?"dark":"light")
          }}
          
          inputProps={{
            'aria-labelledby': 'switch-list-label-wifi',
          }}
        />
      </ListItem>
        
      </List>
    </Box>
  );
}

export default MyList;
