const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    const table = {};
    const numberMap = {
        '10': '.',
        '11' : '-',
        '00': ''
    };

    let resDecoded = '';
    
    for (let i = 0; i < expr.length; i+= 10) {
        const letter = expr.substring(i, i + 10);
        if (letter === '**********') {
            resDecoded += ' ';
            continue;
        }
        let letterMorse = '';
        for (let j = 0; j < letter.length; j += 2) {
            const number = letter[j] + letter[j+1];
            letterMorse += numberMap[number];
        }

        resDecoded += MORSE_TABLE[letterMorse];
    }

    return resDecoded;
}

module.exports = {
    decode
}