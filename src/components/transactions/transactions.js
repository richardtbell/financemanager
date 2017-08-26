import React from 'react';

function Transactions({headings = [], transactions = []}){
    return (
      <table>
          <thead>
              <tr>
                  {headings.map( heading => <th>{heading}</th>)}
              </tr>
          </thead>
          <tbody>
          {transactions.map(transaction => {
              return (
                  <tr>
                      {transaction.map(transactionField => <td>{transactionField}</td>)}
                  </tr>
              )
          })}
          </tbody>
      </table>
    );
}

export {Transactions}
