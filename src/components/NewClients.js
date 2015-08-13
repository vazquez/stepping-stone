'use strict';

var React = require('react/addons');
var Router = require('react-router');
var Link = Router.Link;

require('styles/NewClients.sass');

var NewClients = React.createClass({

  render: function () {
    return (
        <div className="NewClients">
          <p>Content for NewClients</p>
        </div>
      );
  }
});

module.exports = NewClients;
