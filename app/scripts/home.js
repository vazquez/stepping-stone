var Home = React.createClass({
	render: function() {
		return (
			<h2>
				Hello! This is home.
			</h2> 
		);
	}
});

React.render(
	<Home />,
	document.body
);