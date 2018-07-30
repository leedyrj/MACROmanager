import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './CSS/index.css';
import Main from './Main';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <React.Fragment>
            <Main />
        </React.Fragment>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
