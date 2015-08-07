'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import Contact from 'components/Contact.js';

describe('Contact', () => {
    let ContactComponent;

    beforeEach(() => {
        ContactComponent = createComponent(Contact);
    });

    it('should have its component name as default className', () => {
        expect(ContactComponent._store.props.className).toBe('Contact');
    });
});
