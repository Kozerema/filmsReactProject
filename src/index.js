import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";

import './index.css';
import {App} from './App';
import {setUpStore} from "./redux";
import {history} from "./services";
import {unstable_HistoryRouter as BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));

const store=setUpStore();

root.render(

       <Provider store={store}>
           <BrowserRouter history={history}>
               <App />
           </BrowserRouter>

       </Provider>

);
