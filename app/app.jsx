var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
import {createStore} from 'redux';
var {Route, Router, IndexRoute, browserHistory, hashHistory} = require('react-router');

import Main from 'Main';
import Home from 'Home';
import Login from 'Login';
import Register from 'Register';
import SearchResult from 'SearchResult';
import CategoryPage from 'CategoryPage';

import allReducers from "./reducers"

// Load foundation
$(document).foundation();
// App css
// App css
require('style!css!sass!applicationStyles')

const store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <Route path="login" component={Login}/>
        <Route path="register" component={Register}/>
        <Route path="results" component={SearchResult}/>
        <Route path="category" component={CategoryPage}/>
        <Route path="category/:categoryName" component={CategoryPage}/>
        <IndexRoute component={Home}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
