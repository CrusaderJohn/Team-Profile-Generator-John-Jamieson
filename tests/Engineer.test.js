const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    describe("getRole()", () => {
        test("Return employee type.", () => {
            const type = "Engineer"
            const employee = new Engineer("John",1,"bestemployee@john.ca");
            expect(employee.getRole()).toEqual(type);
        });
    });
});