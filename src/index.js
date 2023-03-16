import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import LocalisationWrapper from './components/LocalisationWrapper/LocalisationWrapper';
import Rating from './components/Rating/Rating';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <LocalisationWrapper>
      <App />
      {/*<Rating />*/}
    </LocalisationWrapper>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
