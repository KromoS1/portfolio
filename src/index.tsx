import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter} from 'react-router-dom';
import {ScrollToTop} from './ScrollToTop';

ReactDOM.render(
    <HashRouter>
        <ScrollToTop/>
        <App/>
    </HashRouter>,
    document.getElementById('root')
);

reportWebVitals();
