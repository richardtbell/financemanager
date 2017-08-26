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

    it.skip('renders a tbody', () => {
        const cashflow = React.createElement(Cashflow);
        expect(shallow(cashflow).find('tbody')).to.have.length(1);
    });

    it('renders years months as the headers', () => {
        let props = {
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

    it('separates income and recurring expenses', () => {
        let props = {
            cashflowRows: [
                {
                    displayName: 'Income',
                    values: [{
                        displayName: 'Salary',
                        values: [1200, 1200, 1200]
                    },{
                        displayName: 'Other Salary',
                        values: [2000, 2000, 2000]
                    }]
                },{
                    displayName: 'Recurring Expenses',
                    values: [
                        {
                            displayName: 'Phone',
                            values: [49.99, 49.99, 49.99]
                        },{
                            displayName: 'Rent',
                            values: [500, 500, 500]
                        }
                    ]
                }
            ]
        };
        const cashflow = React.createElement(Cashflow, props);
        const sections = shallow(cashflow).find('tbody');
        expect(sections.length).to.equal(2);
        expectHeaderRowToMatch(sections.at(0).find('tr').at(0), ['Income']);
        expectRowToMatch(sections.at(0).find('tr').at(1), ['Salary', '1200', '1200', '1200']);
        expectRowToMatch(sections.at(0).find('tr').at(2), ['Other Salary', '2000', '2000', '2000']);
        expectHeaderRowToMatch(sections.at(1).find('tr').at(0), ['Recurring Expenses']);
        expectRowToMatch(sections.at(1).find('tr').at(1), ['Phone', '49.99', '49.99', '49.99']);
        expectRowToMatch(sections.at(1).find('tr').at(2), ['Rent', '500', '500', '500']);
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
