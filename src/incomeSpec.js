import {Income, IncomeManager} from './income'

describe('IncomeManager', () => {
    it('can add income', () => {
      const incomeManager = new IncomeManager();
      const income = incomeManager.addIncome(1000, 'fake name', 'fake description');
      expect(income.constructor.name).to.equal('Income');
      expect(income.amount).to.equal(1000);
      expect(income.name).to.equal('fake name');
      expect(income.description).to.equal('fake description');
    }
    );
});