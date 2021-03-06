import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { library } from '@fortawesome/fontawesome-svg-core'
/* Lines 8 and 10, adds Font Awesome Icons universally */
import { faBars, faShoppingCart, faTimes, faBolt, faGamepad, faTags, faStar, faStarHalfAlt, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

library.add(faBars, faShoppingCart, faTimes, faBolt, faGamepad, faTags, faStar, faStarHalfAlt, faArrowLeft);

/* Lines 13 - 18, renders React Components into HTML */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
