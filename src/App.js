import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Berlines from './pages/Berlines';
import Citadine from './pages/Citadine';
import Suv from './pages/Suv';
import Luxury from './pages/Luxury';
import Sport from './pages/Sport';
import Mini from './pages/Mini';
import './App.css';

function App() {
    return ( <
        BrowserRouter basename = "/rent-car" >
        <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        /> <
        Route path = "/Categories/berlines"
        element = { < Berlines / > }
        /> <
        Route path = "/Categories/citadine"
        element = { < Citadine / > }
        /> <
        Route path = "/Categories/luxury"
        element = { < Luxury / > }
        /> <
        Route path = "/Categories/suv"
        element = { < Suv / > }
        /> <
        Route path = "/Categories/sport"
        element = { < Sport / > }
        /> <
        Route path = "/Categories/mini"
        element = { < Mini / > }
        /> <
        /Routes> <
        /BrowserRouter>
    );
}

export default App;