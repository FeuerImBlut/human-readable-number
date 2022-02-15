const vocabulary = {
    0 : 'zero',
    1 : 'one',
    2 : 'two',
    3 : 'three',
    4 : 'four',
    5 : 'five',
    6 : 'six',
    7 : 'seven',
    8 : 'eight',
    9 : 'nine',
    10 : 'ten',
    11 : 'eleven',
    12 : 'twelve',
    13 : 'thirteen',
    14 : 'fourteen',
    15 : 'fifteen',
    16 : 'sixteen',
    17 : 'seventeen',
    18 : 'eighteen',
    19 : 'nineteen',
    20 : 'twenty',
    30 : 'thirty',
    40 : 'forty',
    50 : 'fifty',
    60 : 'sixty',
    70 : 'seventy',
    80 : 'eighty',
    90 : 'ninety'
}

module.exports = function toReadable(number) {
    if (number == 0) return 'zero';
    let result = '';
    if (number > 999) {
        result += toReadable((number - number % 1000) / 1000) + ' thousand ';
        number = number % 1000;
    }
    if (number > 99) {
        result += toReadable((number - number % 100) / 100) + ' hundred ';
        number = number % 100;
    }
    if (number > 19) {
        result += vocabulary[(number - number % 10)] + ' ';
        number = number % 10;
        if (number == 0) return result.trim();
		result += toReadable(number);
    }
    else {
    if (number == 0) return result.trim();
	result += vocabulary[number];
    return result;
    }
	return result;
}
