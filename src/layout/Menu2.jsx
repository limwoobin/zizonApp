import React , {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  });

class Menu2 extends Component{
    constructor(props){
        super(props);
        this.state = {
            left: false,
        }
    }

    toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        this.setState({ ...this.state, [side]: open });
      };

    handleClickMenu = (menu) => {
        console.log(menu);
        this.props.getRouter(menu);
      }

    menuList = menu => (
        <List>
            {['Inbox2222', 'Starred222' , 'Send email', 'Drafts'].map((menu, index) => (
            <ListItem 
              button key={menu}
              onClick={() => {this.handleClickMenu(menu)}}
            >
              <ListItemText primary={menu}/>
             </ListItem>
          ))}
        </List>
    );

    divStyle = {
        list: {
            width: 250,
          },
    }

    openSide = side => (
        <div
          role="presentation"
          onClick={this.toggleDrawer(side, false)}
          onKeyDown={this.toggleDrawer(side, false)}
          style={this.divStyle.list}
        >
          {this.menuList()}
        </div>
      );

    render(){
        const {classes} = this.props;
        return(
            <div>
                <IconButton 
                    className={classes.menuButton} 
                    color='inherit' 
                    aria-label="Open drawer"
                    onClick={this.toggleDrawer('left', true)}
                >
                    <MenuIcon />
                </IconButton>
                <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                    {this.openSide('left')}
                </Drawer>
            </div>
        )
    }
}

export default withStyles(styles)(Menu2);