import React, { Component } from 'react';

class Art extends Component {

  render(){
    const { paragraph1, paragraph2, header, imgsrc  } = this.props;
    const tileStyle = { 
      background: `url(${imgsrc}) no-repeat center center`,
      backgroundSize: 'cover' 
    };

    return(
      <div class="animated fadeIn is-success card article">
          <img src={imgsrc}/> 
      </div>
    );
  }
}

export default Art;