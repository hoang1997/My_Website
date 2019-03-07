import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
    
        <App/>,
    
    document.getElementById('root')
);
    
    serviceWorker.unregister();
