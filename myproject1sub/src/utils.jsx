export const greet = (name, message = "Hello") => {
    return `${message}, ${name}!`;
};

export const calculateArea = (width, height = width) => {
    return width * height;
};

export const doubleNumbers = (numbers) => {
    return numbers.map(num => num * 2);
};

export const filterEvenNumbers = (numbers) => {
    return numbers.filter(num => num % 2 === 0);
};

export const sumArray = (numbers) => {
    return numbers.reduce((sum, num) => sum + num, 0);
};
