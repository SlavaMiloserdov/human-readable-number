var arrayOfNumbers = [
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
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen"
];

module.exports = function toReadable(number) {
    if (!number) return "zero";
    if (number > 99) {
        return getTenthNumber(Math.trunc((number % 100) / 10), number % 10)
            ? arrayOfNumbers[Math.trunc(number / 100)] +
                  " hundred" +
                  " " +
                  getTenthNumber(Math.trunc((number % 100) / 10), number % 10)
            : arrayOfNumbers[Math.trunc(number / 100)] + " hundred";
    }
    return getTenthNumber(Math.trunc((number % 100) / 10), number % 10);
};

function getTenthNumber(tenths, numbers) {
    if (tenths === 0) return getNumber(numbers);
    let result = "";
    let arrayOfTents = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "six",
        "seven",
        "eigh",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen"
    ];
    if (tenths < 2) return getNumber(tenths * 10 + numbers);
    tenths > 5
        ? (result += arrayOfTents[tenths - 2] + "ty")
        : (result += arrayOfTents[tenths - 2]);
    return getNumber(numbers) ? result + " " + getNumber(numbers) : result;
}

function getNumber(number) {
    if (!number) return "";
    return arrayOfNumbers[number];
}
