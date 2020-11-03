// test("runs out first test", ()=> {
//     expect(1+1).toBe(2)
// })

// test("runs out first test", ()=> {
//         expect(1+1).toBe(3)
//     })

const calculator = require("./calculator")

test("adds numbers together", ()=> {
    expect(calculator.sum(2,2)).toBe(4)
    expect(calculator.sum(3,2)).toBe(5)
    expect(calculator.sum(1,0)).toBe(1)
    expect(calculator.sum(-1,1)).toBe(0)
    expect(calculator.sum(3,3)).toBe(6)
    
})