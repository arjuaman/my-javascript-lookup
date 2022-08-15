// // BigInt
// const x = BigInt(Number.MAX_SAFE_INTEGER); // 9007199254740991n
// x + 1n === x + 2n; // false because 9007199254740992n and 9007199254740993n are unequal

// // Number
// Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2; // true because both are 9007199254740992

// const lotsOfDecimal = 1.766584958675746364;
// lotsOfDecimal;
// const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
// twoDecimalPlaces;

// Math.pow(7, 3) is equivalent to 7**3.

// const FLT_SIGNBIT  = 0b10000000000000000000000000000000; // 2147483648
// const FLT_EXPONENT = 0b01111111100000000000000000000000; // 2139095040
// const FLT_MANTISSA = 0B00000000011111111111111111111111; // 8388607

// const a = 0o10; // 8

// 1E3   // 1000
// 2e6   // 2000000
// 0.1e2 // 10

// const biggestNum = Number.MAX_VALUE;
// const smallestNum = Number.MIN_VALUE;
// const infiniteNum = Number.POSITIVE_INFINITY;
// const negInfiniteNum = Number.NEGATIVE_INFINITY;
// const notANum = Number.NaN;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates

const btn = document.querySelector('button');
const txt = document.querySelector('p');

btn.addEventListener('click', updateBtn);

function updateBtn() {
    if (btn.textContent === 'Start machine') {
        btn.textContent = 'Stop machine';
        txt.textContent = 'The machine has started!';
    } else {
        btn.textContent = 'Start machine';
        txt.textContent = 'The machine is stopped.';
    }
}