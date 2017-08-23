import React from 'react';
import { Cashflow } from './cashflow';
import { shallow } from 'enzyme';

describe('Cashflow', () => {
    it('renders a table', () => {
        const cashflow = React.createElement(Cashflow);
        expect(shallow(cashflow).find('table')).to.have.length(1);
    });

    it('renders a thead', () => {
        const cashflow = React.createElement(Cashflow);
        expect(shallow(cashflow).find('thead')).to.have.length(1);
    });
});