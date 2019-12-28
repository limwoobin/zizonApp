import React, {Component} from 'react';
import Main from './Main';
import './layout.css';

class Menu extends Component{

  state = {
    page : 0,
  }

  componentWillReceiveProps = (prevState) => {
      console.log('menu componentWillReceiveProps:' + prevState.page);
      this.setState({
          page : prevState.page,
      })
  }

  _renderList = (page) => {
      this.setState({
          page : page,
      })
  }

  render(){
    return(
        <div>
           <div className="inc_menu">
              <button onClick={() => this._renderList('Contact')}>Contact</button><br/>
            </div>
          <div className="inc_main"><Main page={this.state.page} /></div>
        </div>
    );
  }
}

export default Menu;
