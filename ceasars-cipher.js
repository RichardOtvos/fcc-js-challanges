// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.
// In a shift cipher the meanings of the letters are shifted by some set amount.
//
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places.
// Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
//
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
//
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation),
// but do pass them on.

function rot13(str) { // LBH QVQ VG!
    let letterList = str.split('');
    console.log(letterList)
    console.log(letterList.map(decodeLetter).join(''));
    return letterList.map(function(letter){
        return decodeLetter(letter);
    }).join('');
}

function decodeLetter(letter){
    const A_CHAR_CODE = 65;
    const Z_CHAR_CODE = 90;
    let isCharacterRegexp = /[A-Z]/;

    if(!isCharacterRegexp.test(letter)){
        return letter;
    }

    let charCode = letter.charCodeAt(0);
    let decodedCharCode = charCode - 13;
    if(decodedCharCode<A_CHAR_CODE){
        decodedCharCode = Z_CHAR_CODE-(A_CHAR_CODE-1-decodedCharCode);
    }

    return String.fromCharCode(decodedCharCode);
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");