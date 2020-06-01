import React from 'react';
import { connect } from 'react-redux';

const Slide = ({ activeImage }) => {
  return (
    <div style={{width: '50%', border: '1px red solid', heigth: '100vh'}} >
    	<h1 style={{textAlign: 'center'}}>Slide</h1>
      <div
        style={{
          height: '100px', 
          width: '100px', 
          border: '1px #000 solid', 
          margin: '15% auto',
          backgroundColor: activeImage.content,
          transition: 'all 1s ease 0s',
        }}
      ></div>
    </div>
  )
}

export default connect(state => ({
  activeImage: state.activeImage
}))(Slide);
