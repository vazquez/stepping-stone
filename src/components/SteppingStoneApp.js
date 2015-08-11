'use strict';

var React = require('react/addons');
var Router = require('react-router');
var ReactTransitionGroup = React.addons.TransitionGroup;
var RouteHandler = Router.RouteHandler;

// CSS
require('normalize.css');
require('../styles/main.css');

var imageURL = require('../images/yeoman.png');

var SteppingStoneApp = React.createClass({
  render: function() {
    return (
      <div className="main">
        <ReactTransitionGroup transitionName="fade">
          <img src={imageURL} />
          <RouteHandler/>
        </ReactTransitionGroup>
      </div>
    );
  }
});

module.exports = SteppingStoneApp;
