const Manager = require('../lib/Manager');

describe("Manager", () => {
    describe("getRole()", () => {
        test("Return employee type.", () => {
            const type = "Manager"
            const employee = new Manager("John",1,"bestemployee@john.ca", 5);
            expect(employee.getRole()).toEqual(type);
        });
    });

    describe("getOfficeNumber()", () => {
        test("Return employee Office Number.", () => {
            const office = 5
            const employee = new Manager("John",1,"bestemployee@john.ca", office);
            expect(employee.getOfficeNumber()).toEqual(office);
        });
    });
});