import React from 'react';
import Cashflow from './cashflow';
import { shallow } from 'enzyme';

function expectRowToMatch(row, expectedValues) {
    expectedValues.forEach((value, index) => {
        expect(row.find('td').at(index).text()).to.equal(value);
    })
};

function expectHeaderRowToMatch(headerRow, expectedHeaders) {
    expectedHeaders.forEach((value, index) => {
        expect(headerRow.find('th').at(index).text()).to.equal(value);
    })
};

describe('Cashflow', () => {
    it('renders a table', () => {
        const cashflow = React.createElement(Cashflow);
        expect(shallow(cashflow).find('table')).to.have.length(1);
    });

    it('renders a thead', () => {
        const cashflow = React.createElement(Cashflow);
        expect(shallow(cashflow).find('thead')).to.have.length(1);
    });

    it('renders a tbody', () => {
        const cashflow = React.createElement(Cashflow);
        expect(shallow(cashflow).find('tbody')).to.have.length(1);
    });

    it('renders months as the headers', () => {
        const props = {
            dates: [
                "2017-01",
                "2017-02",
                "2017-03"
            ]
        };
        const cashflow = React.createElement(Cashflow, props);
        const firstHeadRow = shallow(cashflow).find('thead tr').at(0);
        expectHeaderRowToMatch(firstHeadRow, ['', 'Jan', 'Feb', 'Mar']);
    });

    it('renders income and expense for many months', () => {
        const props = {
            cashflowRows: [{
                key: 'Income',
                values: [1000, 1100, 1200]
            },{
                key: 'Expenses',
                values: [2000, 2100, 2200]
            }]
        };
        const cashflow = React.createElement(Cashflow, props);
        const rows = shallow(cashflow).find('tbody tr');
        expect(rows.length).to.equal(2);
        expectRowToMatch(rows.at(0), ['Income', '1000', '1100', '1200']);
        expectRowToMatch(rows.at(1), ['Expenses', '2000', '2100', '2200']);
    });

});
