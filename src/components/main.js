'use strict';

var Router = require('react-router');
var SteppingStoneApp = require('./SteppingStoneApp');
var About = require('./About');
var Contact = require('./Contact');
var NewClients = require('./NewClients');
var React = require('react');
var Route = Router.Route;
var Link = Router.Link;

var content = document.getElementById('content');

var routes = (
  <Route handler={SteppingStoneApp} path="/">
    <Route name="/" handler={SteppingStoneApp}/>
    <Route name="about" handler={About}/>
    <Route name="contact" handler={Contact}/>
    <Route name="newclients" handler={NewClients}/>
  </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, content);
});
