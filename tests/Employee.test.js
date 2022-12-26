const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("getName()", () => {
        test("Return employee name.", () => {
            const name = "John"
            const employee = new Employee(name,1,"bestemployee@john.ca");
            expect(employee.getName()).toEqual(name);
        });
    });

    describe("getId()", () => {
        test("Return employee ID.", () => {
            const number = "1"
            const employee = new Employee("John",number,"bestemployee@john.ca");
            expect(employee.getId()).toEqual(number);
        });
    });

    describe("getEmail()", () => {
        test("Return employee Email.", () => {
            const email = "bestemployee@john.ca"
            const employee = new Employee("John",1,email);
            expect(employee.getEmail()).toEqual(email);
        });
    });

    describe("getRole()", () => {
        test("Return employee type.", () => {
            const type = "Employee"
            const employee = new Employee("John",1,"bestemployee@john.ca");
            expect(employee.getRole()).toEqual(type);
        });
    });
});