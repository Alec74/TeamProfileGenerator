const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("Should create object with 3 values", () => {
            const eng = new Engineer(`Fred`, `1`, `example@email.com`, `github`);
            expect(eng.name).toEqual(`Fred`);
            expect(eng.id).toEqual(`1`);
            expect(eng.email).toEqual(`example@email.com`);
            expect(eng.github).toEqual(`github`);
        });
    });
    describe("getName", () => {
        it("Should return engineer name", () => {
            const eng = new Engineer(`Fred`, `1`, `example@email.com`, `github`);
            expect(eng.getName()).toEqual(`Fred`);
        });
    });
    describe("getId", () => {
        it("Should return engineer Id", () => {
            const eng = new Engineer(`Fred`, `1`, `example@email.com`, `github`);
            expect(eng.getId()).toEqual(`1`);
        });
    });
    describe("getEmail", () => {
        it("Should return engineer Email", () => {
            const eng = new Engineer(`Fred`, `1`, `example@email.com`, `github`);
            expect(eng.getEmail()).toEqual(`example@email.com`);
        });
    });
    describe("getRole", () => {
        it("Should return `engineer`", () => {
            const eng = new Engineer(`Fred`, `1`, `example@email.com`, `github`);
            expect(eng.getRole()).toEqual(`Engineer`);
        })
    });
});
