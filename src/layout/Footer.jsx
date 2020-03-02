import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';


const styles = theme => ({
  root: {
    width: "100%",
    minWidth: 1080,
    backgroundColor: ''
  }
})

class Footer extends Component{  
  state = {
    value: 0
  }

  render(){
    const {classes} = this.props;
    const value = this.state;

    return(
      <BottomNavigation
            value={value}
            onChange={(event, newValue) => {}}
            showLabels
            className={classes.root}
            position='absolute'
            color="primary"
          >
            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
          </BottomNavigation>
    );
  }
}

export default withStyles(styles)(Footer);