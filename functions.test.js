const {returnTwo, greeting, add, multiply, divide, subtract} = require("./functions")


test('Should return 2', () => {
    expect(returnTwo()).toBe(2)
})
    
test('Should return => Hello, ${name}', () => {
    expect(greeting('James')).toBe('Hello, James')
        
    expect(greeting('Jill')).toBe('Hello, Jill')
})
        
describe('Math Functions', () => { // This literally does nothing, what is even the point

test('Should return num1 + num2', () => {
    expect(add(1, 2)).toBe(3)

    expect(add(5, 9)).toBe(14)
})

test('Should return num1 times num2', () => {
    expect(multiply(1, 2)).toBe(2)

    expect(multiply(5, 9)).toBe(45)
})

test('Should return num1 divided by num2', () => {
    expect(divide(10, 5)).toBe(2)

    expect(divide(20, 2)).toBe(10)
})

test('Should return num1 minus num2', () => {
    expect(subtract(10, 5)).toBe(5)

    expect(subtract(20, 2)).toBe(18)
})

})