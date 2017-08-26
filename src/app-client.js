'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Cashflow } from './components/cashflow/cashflow';
import sampleData from './sampleData';

window.onload = () => {
  ReactDOM.render(Cashflow(sampleData), document.getElementById('main'));
};
