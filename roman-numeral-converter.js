function convertToRoman(num) {
    let romanNum = '';
    let remainder = num;
    let numDictIdx = 0;

    while (remainder > 0) {
        if (remainder - numeralDict[numDictIdx].num >= 0) {
            romanNum += numeralDict[numDictIdx].roman;
            remainder -= numeralDict[numDictIdx].num
        }else{
            numDictIdx++;
        }
    }
    return romanNum;
}

const numeralDict = [
    { num: 1000, roman: 'M' },
    { num: 900, roman: 'CM' },
    { num: 500, roman: 'D' },
    { num: 400, roman: 'CD' },
    { num: 100, roman: 'C' },
    { num: 90, roman: 'XC' },
    { num: 50, roman: 'L' },
    { num: 40, roman: 'XL' },
    { num: 10, roman: 'X' },
    { num: 9, roman: 'IX' },
    { num: 5, roman: 'V' },
    { num: 4, roman: 'IV' },
    { num: 1, roman: 'I' }
];

convertToRoman(36);