import React, {Component} from 'react';
import Style from './layout.css';
import Menu from './Menu';

class Header extends Component{
  state = {
      page : '',
  }

  _gotoPage = (page) => {
      console.log('page:' + page);
      this.setState({
          page : page,
      })
  }

  render(){
    return(
        <div className="headerMain" style={Style}>
            <div className="headerLeft">
                {/* <a href="main"><img src={AppLogo} alt="AppLogo" className="AppLogo"/></a> */}
            </div>
            <div className="headerRight">
                <button onClick={() => this._gotoPage('signUp')}>Sign Up</button>
                <button onClick={() => this._gotoPage('signIn')}>Sign In</button>
                    {/* <a href="https://www.naver.com">Sign Up </a> */}
                    {/* <a href="https://www.daum.net">Sign In</a> */}
            </div>
            <div className="inc_sub"><Menu page={this.state.page}/></div>
        </div>
    );
  }
}

export default Header;


