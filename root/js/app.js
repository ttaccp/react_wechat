// document.write('hello');

// let img = document.createElement('img');
// img.src = require('../images/wechat.png');


// document.body.appendChild(img);

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import injectTapEventPlugin from 'react-tap-event-plugin';

import '../css/base.css';
import '../css/common.css';

import Index from './index';
import Moments from './moments/index'


// tap
injectTapEventPlugin();

render(
    <Router history={browserHistory}>
        <Route path="/" component={Index} />
        <Route path="/moments" component={Moments} />
    </Router>,
    document.getElementById('container')
);