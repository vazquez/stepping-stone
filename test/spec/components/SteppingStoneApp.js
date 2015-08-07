'use strict';

describe('SteppingStoneApp', () => {
  let React = require('react/addons');
  let SteppingStoneApp, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    SteppingStoneApp = require('components/SteppingStoneApp.js');
    component = React.createElement(SteppingStoneApp);
  });

  it('should create a new instance of SteppingStoneApp', () => {
    expect(component).toBeDefined();
  });
});
