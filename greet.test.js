const greet = require('./greet');

test('Write a method greet(name)',() => {
    expect(greet("Bob"))
});

test('when name is "Bob", the method should return a string "Hello, Bob."',() => {
    expect(greet("Bob")).toBe("Hello, Bob.")
});

test('when name is "Dome", the method should return a string "Hello, Dome."',() => {
    expect(greet("Dome")).toBe("Hello, Dome.")
});

test('when name is null, then the method should return the string "Hello, my friend."',() => {
    expect(greet(null)).toBe("Hello, my friend.")
});

test('When name is all uppercase, then the method should shout back to the user.',() => {
    expect(greet("JERRY")).toBe("HELLO JERRY!")
});

test('When name is an array of two names (or, in languages that support it, varargs or a splat), then both names should be printed.',() => {
    expect(greet(["Jill","Jane"])).toBe("Hello, Jill and Jane.")
});

test('When name represents more than two names, separate them with commas and close with an Oxford comma and "and".',() => {
    expect(greet(["Amy","Brian","Charlotte"])).toBe("Hello, Amy, Brian, and Charlotte.")
});
