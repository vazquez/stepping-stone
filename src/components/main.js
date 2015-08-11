'use strict';

var SteppingStoneApp = require('./SteppingStoneApp');
var About = require('./About');
var Contact = require('./Contact');
var NewClients = require('./NewClients');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

var Routes = (
  <Route handler={SteppingStoneApp}>
    <Route name="/" handler={SteppingStoneApp}/>
    <Route name="about" handler={About}/>
    <Route name="contact" handler={Contact}/>
    <Route name="newclients" handler={NewClients}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
