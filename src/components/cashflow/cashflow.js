import React from 'react';
import moment from 'moment';
import {countOccurrences} from '../../utils/countOccurances'

function getYear(d) {
    return moment(d, 'YYYY-MM').format("YYYY")
}

function getMonth(d) {
    return moment(d, 'YYYY-MM').format("MMM")
}

function displayYears(dates) {
    const years = dates.map(date => getYear(date));
    const uniqueYears = [ ...new Set(years) ];
    return uniqueYears.map(year => (<th colSpan={countOccurrences(year, years)}>{year}</th>))
}

function renderRow(props) {
    return (
        <tr>
            <td>{ props.displayName }</td>
            { props.values.map(cashFlowValue => {
                return <td>{ cashFlowValue }</td>
            }) }
        </tr>
    )
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
        cashflowRows.map( cashflowRow => {
            return (
                <tbody>
                    <tr>
                        <th colSpan={100}>{cashflowRow.displayName}</th>
                    </tr>
                    {cashflowRow.values.map(renderRow)}
                </tbody>
            )
        })
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
