const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("Should create object with 3 values", () => {
            const intern = new Intern(`Fred`, `1`, `example@email.com`, `school`);
            expect(intern.name).toEqual(`Fred`);
            expect(intern.id).toEqual(`1`);
            expect(intern.email).toEqual(`example@email.com`);
            expect(intern.school).toEqual(`school`);
        });
    });
    describe("getName", () => {
        it("Should return intern name", () => {
            const intern = new Intern(`Fred`, `1`, `example@email.com`, `school`);
            expect(intern.getName()).toEqual(`Fred`);
        });
    });
    describe("getId", () => {
        it("Should return intern Id", () => {
            const intern = new Intern(`Fred`, `1`, `example@email.com`, `school`);
            expect(intern.getId()).toEqual(`1`);
        });
    });
    describe("getEmail", () => {
        it("Should return intern Email", () => {
            const intern = new Intern(`Fred`, `1`, `example@email.com`, `school`);
            expect(intern.getEmail()).toEqual(`example@email.com`);
        });
    });
    describe("getRole", () => {
        it("Should return `intern`", () => {
            const intern = new Intern(`Fred`, `1`, `example@email.com`, `school`);
            expect(intern.getRole()).toEqual(`Intern`);
        })
    });
});