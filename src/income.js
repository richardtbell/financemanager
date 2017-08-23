class Income {
  constructor(amount, name, description) {
    this.amount = amount
    this.name = name
    this.description = description
  }

}

class IncomeManager {
  addIncome(amount, name, description) {
    return new Income(amount, name, description)
  }
}

export { Income, IncomeManager }