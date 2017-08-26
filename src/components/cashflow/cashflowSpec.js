import React from 'react';
import {Cashflow, countOccurrences} from './cashflow';
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

    it('renders years months as the headers', () => {
        const props = {
            dates: [
                "2016-10",
                "2016-11",
                "2016-12",
                "2017-01",
                "2017-02",
                "2017-03"
            ]
        };
        const cashflow = React.createElement(Cashflow, props);
        const firstHeadRow = shallow(cashflow).find('thead tr').at(0);
        const secondHeadRow = shallow(cashflow).find('thead tr').at(1);
        expectHeaderRowToMatch(firstHeadRow, ['', '2016', '2017']);
        expectHeaderRowToMatch(secondHeadRow, ['', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar']);
    });

});

describe('countOccurrences', () => {
    it('counts the number of times a value appears in an array', () => {
        expect(countOccurrences(1, [1])).to.equal(1);
        expect(countOccurrences(1, [1,1])).to.equal(2);
        expect(countOccurrences(1, [1,1,0])).to.equal(2);
        expect(countOccurrences(1, [1,1,0,'bob', 1, 10, true, false])).to.equal(3);

    });
});
