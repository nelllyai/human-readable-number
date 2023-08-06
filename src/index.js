module.exports = function toReadable(number) {
    const stringNumbersBelowTen = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];

    const stringNumbersAfterNineAndBelowTwenty = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    const stringDozens = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    const firstNumber = Math.floor(number / 100);
    const secondNumber = Math.floor(number / 10) % 10;
    const thirdNumber = number % 10;
    const lastTwoNumbers = number % 100;

    const words = [];

    if (firstNumber) {
        words.push(stringNumbersBelowTen[firstNumber] + " hundred");
    }

    if (lastTwoNumbers > 9 && lastTwoNumbers < 20) {
        words.push(stringNumbersAfterNineAndBelowTwenty[thirdNumber]);
    } else {
        if (secondNumber) {
            words.push(stringDozens[secondNumber - 2]);
        }

        if (thirdNumber || (!firstNumber && !secondNumber)) {
            words.push(stringNumbersBelowTen[thirdNumber]);
        }
    }

    return words.join(" ");
};
