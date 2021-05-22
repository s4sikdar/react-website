import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import './Navbar.css';
import "./FrontPage.css";
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { Website } from "./Website.js";
import { SecondPage,AccordionProps } from './SecondPage.js';
import { ThirdPage } from './ThirdPage.js';
import { FourthPage } from './FourthPage.js';


const {render} = ReactDOM;

render(
  <React.StrictMode>
    {/* <App /> */}
    <Website name = "Sailesh Sikdar"/>
  </React.StrictMode>,
  document.getElementById('root')
);

render(
  <React.StrictMode>
    <SecondPage />
  </React.StrictMode>,
  document.getElementById('page_2')
);

render(
  <React.StrictMode>
    <ThirdPage />
  </React.StrictMode>,
  document.getElementById('page_3')
);

render(
  <React.StrictMode>
    <FourthPage />
  </React.StrictMode>,
  document.getElementById('page_4')
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
