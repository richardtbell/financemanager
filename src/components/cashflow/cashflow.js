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

function getYear(d) {
    return moment(d, 'YYYY-MM').format("YYYY")
}

function getMonth(d) {
    return moment(d, 'YYYY-MM').format("MMM")
}

function countOccurrences(value, array) {
    return array.reduce( (count, element) => count + (element === value), 0)
}

function displayYears(dates) {
    const years = dates.map(date => getYear(date));
    const uniqueYears = [ ...new Set(years) ];
    return uniqueYears.map(year => (<th colSpan={countOccurrences(year, years)}>{year}</th>))
}

function renderHead(dates) {
    return (
        <thead>
            <tr>
                <th></th>
                { displayYears(dates) }
            </tr>
            <tr>
                <th></th>
                { dates.map(date => (<th>{getMonth(date)}</th>)) }
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

export {Cashflow, countOccurrences}
