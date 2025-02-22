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

// 摩斯密码映射表（仅支持ASCII字符）
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
    const inputText = document.getElementById('morseInput').value;
    const morseText = textToMorse(inputText);
    document.getElementById('morseOutput').textContent = morseText;
});

function textToMorse(text) {
    return text.split('').map(char => {
        // 如果是中文字符，转换为Unicode编码
        if (/[\u4e00-\u9fa5]/.test(char)) {
            const unicode = char.charCodeAt(0).toString(10); // 获取Unicode编码（十进制）
            return unicode.split('').map(digit => morseCode[digit] || '').join(' ');
        }
        // 如果是ASCII字符，直接转换为摩斯密码
        return morseCode[char.toUpperCase()] || '';
    }).join(' ');
}

// 摩斯密码转文字功能
document.getElementById('morseToTextButton').addEventListener('click', function() {
    const morseInput = document.getElementById('morseToTextInput').value.trim();
    const text = morseToText(morseInput);
    document.getElementById('morseToTextOutput').textContent = text;
});

function morseToText(morse) {
    const morseWords = morse.split(' ');
    let result = '';
    let unicodeBuffer = '';

    for (const code of morseWords) {
        const char = reverseMorseCode[code];
        if (char) {
            // 如果是数字，可能是Unicode编码的一部分
            if (/^\d$/.test(char)) {
                unicodeBuffer += char;
            } else {
                result += char;
            }
        } else if (code === '') {
            // 处理空格
            result += ' ';
        }

        // 如果unicodeBuffer长度达到5（假设Unicode编码为5位数字），则转换为中文字符
        if (unicodeBuffer.length === 5) {
            const unicode = parseInt(unicodeBuffer, 10);
            result += String.fromCharCode(unicode);
            unicodeBuffer = '';
        }
    }

    // 处理剩余的unicodeBuffer
    if (unicodeBuffer.length > 0) {
        const unicode = parseInt(unicodeBuffer, 10);
        result += String.fromCharCode(unicode);
    }

    return result;
}
