const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("Should create object with 3 properties", () => {
            const manager = new Manager(`Fred`, `1`, `example@email.com`, `officeNumber`);
            expect(manager.name).toEqual(`Fred`);
            expect(manager.id).toEqual(`1`);
            expect(manager.email).toEqual(`example@email.com`);
            expect(manager.officeNumber).toEqual(`officeNumber`);
        });
    });
    describe("getName", () => {
        it("Should return manager name", () => {
            const manager = new Manager(`Fred`, `1`, `example@email.com`, `officeNumber`);
            expect(manager.getName()).toEqual(`Fred`);
        });
    });
    describe("getId", () => {
        it("Should return manager Id", () => {
            const manager = new Manager(`Fred`, `1`, `example@email.com`, `officeNumber`);
            expect(manager.getId()).toEqual(`1`);
        });
    });
    describe("getEmail", () => {
        it("Should return manager Email", () => {
            const manager = new Manager(`Fred`, `1`, `example@email.com`, `officeNumber`);
            expect(manager.getEmail()).toEqual(`example@email.com`);
        });
    });
    describe("getRole", () => {
        it("Should return `Manager`", () => {
            const manager = new Manager(`Fred`, `1`, `example@email.com`, `officeNumber`);
            expect(manager.getRole()).toEqual(`Manager`);
        })
    });
});

