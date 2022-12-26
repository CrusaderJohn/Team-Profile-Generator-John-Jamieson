const Manager = require('../lib/Manager');

describe("Manager", () => {
    describe("getRole()", () => {
        test("Return employee type.", () => {
            const type = "Manager"
            const employee = new Manager("John",1,"bestemployee@john.ca");
            expect(employee.getRole()).toEqual(type);
        });
    });
});