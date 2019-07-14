"use strict"
let X;
let Y;

function task1(X, Y) {
    if (X < 0 && Y < 0) {
        X = -1 * X;
        Y = -1 * Y;

    } else if (X < 0 ^ Y < 0) {
        X = 0.5 + X;
        Y = 0.5 + Y;
    } else if (X, Y < 0.5 && X, Y > 2) {
        X = X / 10,
            Y = Y / 10;

    }
    return X, Y

}
console.log(task1(-5, -3))
console.log(task1(5, -3))
console.log(task1(0.1, 3))