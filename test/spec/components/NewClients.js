'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import NewClients from 'components/NewClients.js';

describe('NewClients', () => {
    let NewClientsComponent;

    beforeEach(() => {
        NewClientsComponent = createComponent(NewClients);
    });

    it('should have its component name as default className', () => {
        expect(NewClientsComponent._store.props.className).toBe('NewClients');
    });
});
