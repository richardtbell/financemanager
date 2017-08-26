import React from 'react';
import {Transactions} from './transactions';
import { shallow } from 'enzyme';
import { expectHeaderRowToMatch, expectRowToMatch } from '../../test/expectationHelpers'


describe('Transactions', function () {
    it('renders a table', () => {
        const cashflow = React.createElement(Transactions);
        expect(shallow(cashflow).find('table')).to.have.length(1);
    });

    it('renders the headers', function () {
        let props = {
            headings: [
                'Account', 'Type', 'Date', 'Description', 'Category', 'Amount'
            ]
        };
        const cashflow = React.createElement(Transactions, props);
        const header = shallow(cashflow).find('thead');
        expect(header).to.have.length(1);
        expectHeaderRowToMatch(header, ['Account', 'Type', 'Date', 'Description', 'Category', 'Amount'])
    });

    it('renders transactions', function () {
        let props = {
            transactions: [
                ['Bobs Debit Account', 'Debit', '2017-01-01', 'Lunch meal deal', 'Lunch', 3.99],
                ['Bobs Debit Account', 'Debit', '2017-01-02', 'Book', 'Entertainment', 4.99]
            ]
        };
        const cashflow = React.createElement(Transactions, props);
        const body = shallow(cashflow).find('tbody');
        expect(body).to.have.length(1);
        expectRowToMatch(body.find('tr').at(0), ['Bobs Debit Account', 'Debit', '2017-01-01', 'Lunch meal deal', 'Lunch', '3.99'])
        expectRowToMatch(body.find('tr').at(1), ['Bobs Debit Account', 'Debit', '2017-01-02', 'Book', 'Entertainment', '4.99'])
    })
});
