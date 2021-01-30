const { expect } = require('@jest/globals');
const functions = require('./functions');

test('Add two numbers', () => {
    expect(functions.add(2, 2)).toBe(4)
});

test('Add two numbers 2+2=4', () => {
    expect(functions.add(2, 2)).toBe(4)
});

test('Add two numbers 2+2!=0', () => {
    expect(functions.add(2, 2)).not.toBe(0)
});

test('Should be null', () => {
    expect(functions.isNull()).toBeNull()
});

test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy()
});

test('Should be falsy', () => {
    expect(functions.checkValue(undefined)).toBeFalsy()
});
test('Should be truthy', () => {
    expect(functions.checkValue(2)).toBeTruthy()
});

test('Clone Array', () => {
    expect(functions.cloneArray([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5])
});

test('User is Reham', () => {
    expect(functions.createUser()).toEqual({
        firstName: "Reham",
        secName: "Hussein"
    })
});

test('To be less', () => {
    expect(200 + 400).toBeLessThan(50000)
});


test('should not coniatn I', () => {
    expect("Rcham").not.toMatch(/I/)
});



test('Array Contain admin?', () => {
    expect(['hero', 'admin', 'test']).toContain('admin')
});


//promise
test('Is User ID Equal 1', () => {
    //call async code
    expect.assertions();
    return functions.featchUser(1).then(data => {
        expect(data.name).toEqual("Leanne Graham")
    })
});

//async await
test('Is User ID Equal 1', async() => {
    //call async code
    expect.assertions(1);
    const data = await functions.featchUser(1);
    expect(data.name).toEqual("Leanne Graham")

});