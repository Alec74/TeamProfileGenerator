const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("Should create object with 3 values", () => {
            const employee = new Employee(`Fred`, `1`, `example@email.com`);
            expect(employee.name).toEqual(`Fred`);
            expect(employee.id).toEqual(`1`);
            expect(employee.email).toEqual(`example@email.com`);
        });
    });
    describe("getName", () => {
        it("Should return employee name", () => {
            const employee = new Employee(`Fred`, `1`, `example@email.com`);
            expect(employee.getName()).toEqual(`Fred`);
        });
    });
    describe("getId", () => {
        it("Should return employee Id", () => {
            const employee = new Employee(`Fred`, `1`, `example@email.com`);
            expect(employee.getId()).toEqual(`1`);
        });
    });
    describe("getEmail", () => {
        it("Should return employee Email", () => {
            const employee = new Employee(`Fred`, `1`, `example@email.com`);
            expect(employee.getEmail()).toEqual(`example@email.com`);
        });
    });
    describe("getRole", () => {
        it("Should return employee Role", () => {
            const employee = new Employee(`Fred`, `1`, `example@email.com`);
            expect(employee.getRole()).toEqual(`Employee`);
        });
    });
});