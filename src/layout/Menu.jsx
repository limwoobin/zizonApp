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

class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {
            left: false,
            menuitems: [],
        }
    }

    componentDidMount = () => {
      setInterval(20);
      this.GetMenuItems()
        .then(res => {
          let arr = [];
          res.map((c) => {
            arr.push(c.name);
            return c;
          })
          this.setState({
            menuitems: arr,
          })
        })
        .catch(err => console.log(err));
    }

    GetMenuItems = async() => {
      const response = await fetch('/dr/category/list');
      const body = await response.json();
      return body.data;
    }

    toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        this.setState({[side]: open });
      };

    handleClickMenu = (menu) => {
        this.props.getRouter(menu);
      }

    divStyle = {
        list: {
            width: 270,
          },
    }

    openSide = side => (
        <div
          role="presentation"
          onClick={this.toggleDrawer(side, false)}
          onKeyDown={this.toggleDrawer(side, false)}
          style={this.divStyle.list}
        >
          {this.menuList(this.state.menuitems)}
        </div>
      );

    menuList = (menuitems) => {
      return <List>
          {menuitems.map((menu) => (
          <ListItem 
            button key={menu}
            onClick={() => {this.handleClickMenu(menu)}}
          >
            <ListItemText primary={menu}/>
           </ListItem>
        ))}
      </List>
  };


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

export default withStyles(styles)(Menu);