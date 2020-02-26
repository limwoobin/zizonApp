import React , {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
// import {API} from '../api/Call_API';
import axios from 'axios';

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
            menuitems: '',
        }
    }

    componentDidMount = () => {
      setInterval(20);
      this.GetMenuItems()
        .then(res => {
          console.log(res);
          this.setState({menuitems: res})
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
        // this.setState({ ...this.state, [side]: open });
        this.testClick();
      };

    testClick = () => {
      const arr = this.state.menuitems;
      console.log(arr);
      arr.map((c) => {
        console.log(c.name);
      })
    }

    handleClickMenu = (menu) => {
        console.log(menu);
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
          {this.menuList()}
        </div>
      );

      menuList = () => (
        <List>
            {['Inbox2222', 'Starred222' , 'Send email', 'Drafts'].map((menu) => (
            <ListItem 
              button key={menu}
              onClick={() => {this.handleClickMenu(menu)}}
            >
              <ListItemText primary={menu}/>
             </ListItem>
          ))}
        </List>
    );

  //   menuList = () => {
  //     const arr = this.state.menuitems;
  //     console.log(arr);

  //     return <List>
  //         {arr.map((c) => (
  //         <ListItem 
  //           button key={c.name}
  //           onClick={() => {this.handleClickMenu(c.name)}}
  //         >
  //           <ListItemText primary={c.name}/>
  //          </ListItem>
  //       ))}
  //     </List>
  // };


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
                  {this.state.menuItems}
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