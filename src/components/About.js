'use strict';

var React = require('react/addons');
var Router = require('react-router');
var Link = Router.Link;

require('styles/About.sass');

var About = React.createClass({

  render: function () {
    return (
        <div className="About">
          <p>Content for About</p>
        </div>
      );
  }
});

module.exports = About;
