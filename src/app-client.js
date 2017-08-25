'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import CashFlow from './components/cashflow/cashflow';

const props = {
  cashflowRows: [{
                key: 'Income',
                values: [1000, 1100, 1200]
            },{
                key: 'Expenses',
                values: [2000, 2100, 2200]
            }],
  dates: [
                "2017-01",
                "2017-02",
                "2017-03"
            ]
};

window.onload = () => {
  ReactDOM.render(CashFlow(props), document.getElementById('main'));
};
