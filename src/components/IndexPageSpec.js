import React from 'react';
import { IndexPage } from './IndexPage';
import { shallow } from 'enzyme';

describe('IndexPage', () => {
    it('says hi there', () => {
        const indexPage = React.createElement(IndexPage);
        expect(shallow(indexPage).find('span')).to.have.length(1);
        expect(shallow(indexPage).find('span').text()).to.equal('Hi there');
    }
    );
});