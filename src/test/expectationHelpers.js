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

export {expectHeaderRowToMatch, expectRowToMatch}
