// 打乱顺序功能
document.getElementById('shuffleButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const shuffledText = shuffleString(inputText);
    document.getElementById('outputText').textContent = shuffledText;
});

function shuffleString(str) {
    let arr = str.split('');
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join('');
}

// 摩斯密码映射表
const morseCode = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
    'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
    'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
    'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..',
    '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....',
    '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----',
    ' ': '/'
};

// 反转摩斯密码映射表
const reverseMorseCode = {};
for (const key in morseCode) {
    reverseMorseCode[morseCode[key]] = key;
}

// 文字转摩斯密码功能
document.getElementById('translateButton').addEventListener('click', function() {
    const inputText = document.getElementById('morseInput').value.toUpperCase();
    const morseText = textToMorse(inputText);
    document.getElementById('morseOutput').textContent = morseText;
});

function textToMorse(text) {
    return text.split('').map(char => morseCode[char] || '').join(' ');
}

// 摩斯密码转文字功能
document.getElementById('morseToTextButton').addEventListener('click', function() {
    const morseInput = document.getElementById('morseToTextInput').value.trim();
    const text = morseToText(morseInput);
    document.getElementById('morseToTextOutput').textContent = text;
});

function morseToText(morse) {
    return morse.split(' ').map(code => reverseMorseCode[code] || '').join('');
}
