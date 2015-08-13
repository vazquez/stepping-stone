'use strict';

var React = require('react/addons');
var Router = require('react-router');
var Link = Router.Link;


require('styles/Contact.sass');

var Contact = React.createClass({

  render: function () {
    return (
        <div className="Contact">
          <p>Content for Contact</p>
          <a href="/about">Go to About using normal link</a>
          <br></br>
          <Link to="about">Go to About using Link component</Link>
        </div>
      );
  }
});

module.exports = Contact;
