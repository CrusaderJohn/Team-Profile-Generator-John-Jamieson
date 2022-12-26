const Intern = require('../lib/Intern');

describe("Intern", () => {
    describe("getRole()", () => {
        test("Return employee type.", () => {
            const type = "Intern"
            const employee = new Intern("John",1,"bestemployee@john.ca", "Wilfrid Laurier University");
            expect(employee.getRole()).toEqual(type);
        });
    });

    describe("getSchool()", () => {
        test("Return employee type.", () => {
            const school = "Wilfrid Laurier University"
            const employee = new Intern("John",1,"bestemployee@john.ca", school);
            expect(employee.getSchool()).toEqual(school);
        });
    });
});