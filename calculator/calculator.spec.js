// test("runs out first test", ()=> {
//     expect(1+1).toBe(2)
// })

// test("runs out first test", ()=> {
//         expect(1+1).toBe(3)
//     })
describe("calculator unit tests", ()=> {
    const calculator = require("./calculator")

        test("adds numbers together", ()=> {
            expect(calculator.sum(2,2)).toBe(4)
            expect(calculator.sum(3,2)).toBe(5)
            expect(calculator.sum(1,0)).toBe(1)
            expect(calculator.sum(-1,1)).toBe(0)
            expect(calculator.sum(3,3)).toBe(6)
            ///refactor to support more parameters
            expect(calculator.sum(2,2,2)).toBe(6)
            expect(calculator.sum(1,2,3,4,5,6,7,8,9)).toBe(45)
            
        })

        //////TDD = TEST DRIVEN DEVELOPMENT ///////////
        //"write the test, then the functions"//
        // it is same as test just reads better

        it("subtracts", ()=> {
            expect(calculator.difference(3,2)).toBe(1)
            expect(calculator.difference(2,2)).toBe(0)
            expect(calculator.difference(5,3)).toBe(2)
            expect(calculator.difference(1,2)).toBe(-1)
            expect(calculator.difference(-1,-2)).toBe(1)
        })

        it("multiplies", ()=> {
            expect(calculator.product(2,2)).toBe(4)
            expect(calculator.product(3,2)).toBe(6)
            expect(calculator.product(1,0)).toBe(0)
            expect(calculator.product(-1, 1)).toBe(-1)
            expect(calculator.product(1)).toBe(1)
        })

        it("divides", ()=> {
            expect(calculator.quotient(2,2)).toBe(1)
            expect(calculator.quotient(3,2)).toBe(1.5)
            expect(calculator.quotient(-1,1)).toBe(-1)
            expect(calculator.quotient(1)).toBe(1)
            expect(()=> calculator.quotient(1,0)).toThrow()
        })



})

