export type Salary = {
  born: Date;
  payday: Date;
  gross: number;
};

export type Deductions = Map<string, number>;

export const DEDUCTION_RATES: Deductions = new Map([
  ["AHV", 8.7],
  ["IV", 1.4],
  ["EO", 0.5],
  ["ALV", 1.1],
  ["NBU", 0.73],
  ["PK", 8.9],
]);

export type Payslip = {
  salary: Salary;
  deductions: Deductions;
  totalDeductions: number;
  net: number;
};

export function calculatePayslip(salary: Salary): Payslip {
  let currentdate: Date = new Date()
  let ageMilliseconds = currentdate.getMilliseconds() - salary.born.getMilliseconds();
  let age = ageMilliseconds / 1000 / 3600 / 365.25
  let yearSalary = salary.gross * 12;
  let netSalary = salary.gross;
  if(yearSalary > 2500) {
    netSalary -= (salary.gross/100) * (DEDUCTION_RATES["ALV"] + DEDUCTION_RATES["NBU"])
  }
  if(yearSalary > 22680){
    netSalary -= (salary.gross/100) * (DEDUCTION_RATES["PK"])
  }
  

  const result: Payslip = {
    salary: salary,
    deductions: new Map(),
    totalDeductions: 0.0,
    net:netSalary,
  };


  return result;
}

