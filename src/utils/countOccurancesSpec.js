import {countOccurrences} from './countOccurances'

describe('countOccurrences', () => {
    it('counts the number of times a value appears in an array', () => {
        expect(countOccurrences(1, [1])).to.equal(1);
        expect(countOccurrences(1, [1,1])).to.equal(2);
        expect(countOccurrences(1, [1,1,0])).to.equal(2);
        expect(countOccurrences(1, [1,1,0,'bob', 1, 10, true, false])).to.equal(3);
    });
});
