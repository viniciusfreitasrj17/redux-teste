import { createStore } from 'redux';

const INITIAL_STATE = {
  activeImage: {},
  images: [
    {
      id: 1,
      title: 'Green',
      content: '#0f0',
    },
    {
      id: 2,
      title: 'Red',
      content: '#f00',
    },
    {
      id: 3,
      title: 'Blue',
      content: '#00f',
    },
    {
      id: 4,
      title: 'White',
      content: '#fff',
    },
    {
      id: 5,
      title: 'Black',
      content: '#000',
    },
    {
      id: 6,
      title: 'Yellow',
      content: '#ff0',
    },
  ]
}

const reducer = (state = INITIAL_STATE, action) => {
  if(action.type === 'TOGGLE_IMAGE') {
    return {
      ...state,
      activeImage: action.img
    };
  }

  return state;
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store
