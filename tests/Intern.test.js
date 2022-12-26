const Intern = require('../lib/Intern');

describe("Intern", () => {
    describe("getRole()", () => {
        test("Return employee type.", () => {
            const type = "Intern"
            const employee = new Intern("John",1,"bestemployee@john.ca");
            expect(employee.getRole()).toEqual(type);
        });
    });
});