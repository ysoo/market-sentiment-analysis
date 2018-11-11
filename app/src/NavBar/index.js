import React, { Component } from 'react'
import SearchBar from '../SearchBar';
import Arrow from '../Arrow';
import {Link} from 'react-router-dom';
import './index.css';
import {setNavbarRef} from './NavBarService';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            returnHome: false
        }

        setNavbarRef(this);
    }
    returnHome = (atHome) => {
        console.log(atHome)
        this.setState({returnHome: atHome})
    }

      render() {
        if (this.state.returnHome) {
            return (
                <div className="navbar">
                  <Link to="/">
                  <div className="left-nav-list" onClick={() => {this.returnHome(false)}}>
                  <div className="back">
                    <Arrow />
                  </div>
                  <div className="mini">TestApp</div>  
                  </div>
                  </Link>
            
                </div>
              )
        }
        return (
          <div className="navbar">
            <div className="title">TestApp</div>
            <SearchBar /> 
          </div>
        )
      }
}

export default NavBar;
