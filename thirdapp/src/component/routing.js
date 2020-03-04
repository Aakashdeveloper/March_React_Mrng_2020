import React,{Fragment} from 'react';
import {BrowserRouter, Route } from 'react-router-dom';

import Home from './Home';

const Routing = ( ) => {
    return(
        <Fragment>
            <BrowserRouter>
                <Route exact path="/" component={Home}></Route>
            </BrowserRouter>
        </Fragment>
    )
}

export default Routing;