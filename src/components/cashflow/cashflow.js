import React from 'react';
import moment from 'moment';

function renderRow(props) {
    return (
        <tr>
            <td>{ props.key }</td>
            { props.values.map(cashFlowValue => <td>{ cashFlowValue }</td>) }
        </tr>
    )
}

function displayDate(d){
    return moment(d, 'YYYY-MM').format("MMM")
}

function renderHead(dates) {
    return (
        <thead>
            <tr>
                <th></th>
                { dates.map(date => (<th>{displayDate(date)}</th>)) }
            </tr>
        </thead>
    )
}

function renderBody(cashflowRows) {
    return (
        <tbody>
            { cashflowRows.map( renderRow ) }
        </tbody>
    )
}

function Cashflow({ cashflowRows = [], dates = [] }){
    return (
      <table>
          {renderHead(dates)}
          {renderBody(cashflowRows)}
      </table>
    );
}

export default Cashflow
