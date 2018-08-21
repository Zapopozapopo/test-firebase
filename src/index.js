import React from 'react';
import {render} from 'react-dom'
import './helpers/vendor'
import HomeContainer from './containers/HomeContainer'

render(
    <HomeContainer/>
    ,
    document.getElementById('app')
);
