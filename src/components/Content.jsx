import React from 'react';
import { connect } from  'react-redux';

const toggleImage = img => ({
  type: 'TOGGLE_IMAGE',
  img,
})

const Content = ({ images, dispatch }) => {
  return (
    <div style={{width: '50%', border: '1px green solid', heigth: '100vh'}} >
      <h1 style={{textAlign: 'center'}}>Content</h1>
      <ul className='row col-md-4' style={{margin: '0 auto'}}>
        {images.map(img => (
          <div 
            key={img.id} 
            style={{padding: '1rem'}}
          >
            <strong> {img.title} </strong>
            <li>
              {img.content}
            </li>
            <button onClick={() => dispatch(toggleImage(img))}>
              OK
            </button>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default connect(state => ({ images: state.images }))(Content);
