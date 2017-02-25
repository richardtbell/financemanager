YEARLY_TAX_FREE_ALLOWANCE = 11000
MONTHLY_TAX_FREE_ALLOWANCE = YEARLY_TAX_FREE_ALLOWANCE / 12
LOWER_TAX_RATE = 0.2
NI_PRIMARY_THRESHOLD = 672
LOWER_NI_RATE = 0.12

class MonthlyIncome(object):

  def __init__(self, gross_pay):
    self.gross_pay = gross_pay

  def calculate_income_tax(self):
    taxable_pay = self.gross_pay - MONTHLY_TAX_FREE_ALLOWANCE
    income_tax_amount = taxable_pay * LOWER_TAX_RATE
    return income_tax_amount if income_tax_amount > 0 else 0

  def calculate_national_insurance_contributions(self):
    liable_pay = self.gross_pay - NI_PRIMARY_THRESHOLD
    ni_contributions = liable_pay * 0.12
    return ni_contributions if ni_contributions > 0 else 0