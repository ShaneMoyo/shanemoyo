import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


const NavBarLink = props => <NavLink {...props} 
className="nav-link" 
activeClassName="active"
/>;

class Navigation extends Component {

  state = {
    isActive: false
  }

  onClickNav = () => {
    this.setState({ isActive: !this.state.isActive})
  }


  render() {
  
    const { isActive} = this.state;
    return (
      <div class="hero-head">
      <nav class="navbar">
      <div class="container is-fluid">
        <div class="navbar-brand">

          <a class="navbar-item">
            <NavBarLink exact to="/"><span class="tag is-medium has-text-white is-warning">Home</span></NavBarLink>
          </a>
          

          <span class={isActive ? "navbar-burger burger is-active" : "navbar-burger burger"} data-target="navbarMenu" onClick={() => this.onClickNav()}>
            <span></span>
            <span></span>
            <span></span>
          </span>
          
        </div>

        <div class={ isActive ? "animated fadeIn navbar-menu is-active is-success" : "animated fadeIn navbar-menu"}>
          <div class="navbar-end">

            
            <a class="navbar-item is-transparent">
              <NavBarLink exact to="/projects" onClick={() => this.onClickNav()}><span class="tag is-medium has-text-white is-warning">Projects</span></NavBarLink>
            </a>

            <a class="navbar-item is-transparent">
              <NavBarLink exact to="/drawings" onClick={() => this.onClickNav()}><span class="tag is-medium has-text-white is-warning">Artwork</span></NavBarLink>
            </a>

            <a class="navbar-item is-transparent">
              <NavBarLink exact to="/education" onClick={() => this.onClickNav()}><span class="tag is-medium has-text-white is-warning">Education</span></NavBarLink>
            </a>
            
            

            
          </div>
        </div>

      </div>
     </nav>
     
     </div>
    );
  }
}

export default Navigation;