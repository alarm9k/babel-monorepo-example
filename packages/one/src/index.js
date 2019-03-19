import two from 'two';

const initialState = {
    x: 1,
    y: 2
};

const objectOne = {a: 5, b: 10};
const objectTwo = {c: 100, d: 200};

console.log({
    ...initialState,
    ...two(objectOne, objectTwo)
});
