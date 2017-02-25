from app.income import MonthlyIncome, MONTHLY_TAX_FREE_ALLOWANCE, NI_PRIMARY_THRESHOLD
import unittest
from hypothesis import given, assume, note
from hypothesis.strategies import integers

class IncomeTest(unittest.TestCase):

  def calculate_income_tax(self, int):
    income = MonthlyIncome(gross_pay=int)
    return income.calculate_income_tax()

  def calculate_national_insurance_contributions(self, int):
    income = MonthlyIncome(gross_pay=int)
    return income.calculate_national_insurance_contributions()

  @given(integers())
  def test_calculates_income_tax_less_than_gross_pay(self, int):
    assume(int > 0)
    assert self.calculate_income_tax(int) < int

  @given(integers())
  def test_calculates_income_tax_not_less_than_zero(self, int):
    assert self.calculate_income_tax(int) >= 0

  @given(integers())
  def test_calculates_income_tax_as_zero_for_tax_free_allowance(self, int):
    assume(int <= MONTHLY_TAX_FREE_ALLOWANCE )
    assert self.calculate_income_tax(int) == 0

  @given(integers())
  def test_calculates_income_tax_greater_than_zero_outside_tax_free_allowance(self, int):
    assume(int > MONTHLY_TAX_FREE_ALLOWANCE )
    assert self.calculate_income_tax(int) > 0

  @given(integers())
  def test_calculates_ni_as_zero_for_below_primary_threshold(self, int):
    assume(int < NI_PRIMARY_THRESHOLD )
    assert self.calculate_national_insurance_contributions(int) == 0

  @given(integers())
  def test_calculates_ni_greater_than_zero_for_above_primary_threshold(self, int):
    assume(int > NI_PRIMARY_THRESHOLD )
    assert self.calculate_national_insurance_contributions(int) > 0

  @given(integers())
  def test_calculates_ni_less_than_gross_pay(self, int):
    assume(int > 0 )
    assert self.calculate_national_insurance_contributions(int) < int

