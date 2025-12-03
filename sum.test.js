import Sum from "./sum"
 

describe("tests for sum function",()=>{

    test("adds 2 + 2 equals to 4",()=>{
    expect(Sum(2,2)).toBe(4);
});

test("adds -5 + -5 equals to -10",()=>{
    expect(Sum(-5,-5)).toBe(-10);
});
})
