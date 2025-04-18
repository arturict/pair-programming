import { calculatePayslip, Salary } from "./payroll"

describe("Lohnabrechnung", () => {
    test("ein 16 jähriger Lernender mit einem Monatsgehalt von 700.-", () => {
        //arange
        const minorSalary: Salary = {
            born: new Date(Date.parse("2008-05-15 00:00:00+01:00")),
            payday: new Date(Date.parse("2025-04-25 00:00:00+01:00")),
            gross: 700
        };
        const expected = 687.19;
        const actual = calculatePayslip(minorSalary);

        //Assert
        expect(actual.salary).toBe(expected);
    });
    test("ein 18 jähriger Lernender mit einem Monatsgehalt von 1200.-", () => {
        //arange
        const minorSalary: Salary = {
            born: new Date(Date.parse("2007-03-31 00:00:00+01:00")),
            payday: new Date(Date.parse("2025-04-25 00:00:00+01:00")),
            gross: 1200
        };
        const expected = 1050.84;
        const actual = calculatePayslip(minorSalary);

        //Assert
        expect(actual.salary).toBe(expected);
    });


}




)