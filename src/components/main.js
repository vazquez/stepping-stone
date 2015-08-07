'use strict';

var SteppingStoneApp = require('./SteppingStoneApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

var Routes = (
  <Route handler={SteppingStoneApp}>
    <Route name="/" handler={SteppingStoneApp}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
