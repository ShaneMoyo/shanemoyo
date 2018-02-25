import React, { Component } from 'react';
import Art from './Art';

class Artwork extends Component {

  render(){
    return(
      <div class="is-success">
        <br/>
        <br/>
      <Art imgsrc="https://pre00.deviantart.net/dac1/th/pre/i/2014/353/a/7/patience_by_shanebot-d8aftps.jpg"/>
      <Art imgsrc="https://img00.deviantart.net/3e91/i/2014/295/8/c/silence_by_shanebot-d7ydqwc.jpg"/>
      <Art imgsrc="https://img00.deviantart.net/d691/i/2013/169/5/c/through_my_eyes___speed_paint_by_shanebot-d69md6m.jpg"/>
      </div>
    );
  }
}

export default Artwork;