const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    describe("getGithub()", () => {
        test("Return employee github.", () => {
            const github = "DrGitHub"
            const employee = new Engineer("John",1,"bestemployee@john.ca",github);
            expect(employee.getGithub()).toEqual(github);
        });
    });

    describe("getRole()", () => {
        test("Return employee type.", () => {
            const type = "Engineer"
            const employee = new Engineer("John",1,"bestemployee@john.ca", "DrGitHub");
            expect(employee.getRole()).toEqual(type);
        });
    });
});