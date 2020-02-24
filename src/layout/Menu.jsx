import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import {API} from '../api/Call_API';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const [data , setData] = React.useState();

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const handleClickMenu = (menu) => {
    console.log(menu);
    // setGetRouter(menu);
  }

  // useEffect(() => {
  //   API.GET_Categories()
  //   .then((response) => {
  //     setData(response.data);
  //     console.log(response.data);
  //     console.log(response.data.data);
  //   })
  // }, []);

  const renderCategories = (data) => {
    console.log(data);
  }

  const menuList = menu => (
    <List>
        {['Inbox', 'Starred' , 'Send email', 'Drafts'].map((menu, index) => (
        <ListItem 
          button key={menu}
          onClick={() => {handleClickMenu(menu)}}
        >
          <ListItemText primary={menu}/>
         </ListItem>
      ))}
    </List>
);

  const openSide = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      {menuList()}
    </div>
  );

  return (
    <div>
      <IconButton 
          className={classes.menuButton} 
          color='inherit' 
          aria-label="Open drawer"
          onClick={toggleDrawer('left', true)}
      >
          <MenuIcon />
      </IconButton>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {openSide('left')}
      </Drawer>
    </div>
  );
}