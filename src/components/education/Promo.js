import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const NavBarLink = props => <NavLink {...props} 
className="nav-link" 
activeClassName="active"
/>;

class Promo extends Component {

  render(){
    return(
      <section class="hero is-info is-bold is-small promo-block">
        <div class="hero-body">
          <div class="container">
          <br/>
          <br/>
            <h1 class="animated fadeIn is-4 title">
              Education
            </h1>
            <hr/>
            <br/>
          <br/>
            <p class="animated fadeIn is-4 title">
              Portland State University
            </p>
            <p class="animated fadeIn is-6 title">
               B.S. Mathematics
            </p>
            <p class="animated fadeIn is-4 title">
            Alchemy Code Lab
            </p>
            <p class="animated fadeIn is-6 title">
            Full-Stack Advanced Javascript
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Promo;