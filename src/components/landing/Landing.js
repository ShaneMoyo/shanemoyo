import React, { Component } from 'react';


export default class Landing extends Component {
  
  render(){
    return(
        <body>
          <section class="animated fadeIn hero is-info is-fullheight">
            <div class="hero-body">
              <div class="container has-text-centered">
                <div class="column is-6 is-offset-3"> 
                  <p class="animated fadeIn subtitle is-3">
                  Hello, I'm <strong>Shane Moyo</strong>.<br/>I develop full-stack web applications
                  </p>
              </div>
            </div>
          </div>
      </section>
    </body>
    );
  }
}