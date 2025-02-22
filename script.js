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

// 新增功能：字数统计
document.getElementById('countButton').addEventListener('click', function() {
    const inputText = document.getElementById('countInput').value;
    document.getElementById('countOutput').textContent = `字数：${inputText.length}`;
});

// 新增功能：大小写转换
document.getElementById('toUpperButton').addEventListener('click', function() {
    const inputText = document.getElementById('caseInput').value;
    document.getElementById('caseOutput').textContent = inputText.toUpperCase();
});

document.getElementById('toLowerButton').addEventListener('click', function() {
    const inputText = document.getElementById('caseInput').value;
    document.getElementById('caseOutput').textContent = inputText.toLowerCase();
});

// 新增功能：文本反转
document.getElementById('reverseButton').addEventListener('click', function() {
    const inputText = document.getElementById('reverseInput').value;
    document.getElementById('reverseOutput').textContent = inputText.split('').reverse().join('');
});

// 新增功能：随机密码生成器
document.getElementById('generatePasswordButton').addEventListener('click', function() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    let password = '';
    for (let i = 0; i < 12; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }
    document.getElementById('passwordOutput').textContent = password;
});

// 新增功能：Base64 编码/解码
document.getElementById('encodeBase64Button').addEventListener('click', function() {
    const inputText = document.getElementById('base64Input').value;
    document.getElementById('base64Output').textContent = btoa(inputText);
});

document.getElementById('decodeBase64Button').addEventListener('click', function() {
    const inputText = document.getElementById('base64Input').value;
    document.getElementById('base64Output').textContent = atob(inputText);
});

// 新增功能：URL 编码/解码
document.getElementById('encodeUrlButton').addEventListener('click', function() {
    const inputText = document.getElementById('urlInput').value;
    document.getElementById('urlOutput').textContent = encodeURIComponent(inputText);
});

document.getElementById('decodeUrlButton').addEventListener('click', function() {
    const inputText = document.getElementById('urlInput').value;
    document.getElementById('urlOutput').textContent = decodeURIComponent(inputText);
});

// 新增功能：文本去空格
document.getElementById('trimButton').addEventListener('click', function() {
    const inputText = document.getElementById('trimInput').value;
    document.getElementById('trimOutput').textContent = inputText.replace(/\s+/g, '');
});

// 新增功能：文本替换
document.getElementById('replaceButton').addEventListener('click', function() {
    const inputText = document.getElementById('replaceInput').value;
    const from = document.getElementById('replaceFrom').value;
    const to = document.getElementById('replaceTo').value;
    document.getElementById('replaceOutput').textContent = inputText.replace(new RegExp(from, 'g'), to);
});

// 新增功能：文本加密/解密（Caesar Cipher）
document.getElementById('encryptButton').addEventListener('click', function() {
    const inputText = document.getElementById('encryptInput').value;
    document.getElementById('encryptOutput').textContent = caesarCipher(inputText, 3);
});

document.getElementById('decryptButton').addEventListener('click', function() {
    const inputText = document.getElementById('encryptInput').value;
    document.getElementById('encryptOutput').textContent = caesarCipher(inputText, -3);
});

function caesarCipher(str, shift) {
    return str.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt(0);
            let base = code >= 65 && code <= 90 ? 65 : 97;
            return String.fromCharCode(((code - base + shift + 26) % 26) + base);
        }
        return char;
    }).join('');
}

// 新增功能：文本朗读
document.getElementById('speakButton').addEventListener('click', function() {
    const inputText = document.getElementById('speakInput').value;
    const utterance = new SpeechSynthesisUtterance(inputText);
    speechSynthesis.speak(utterance);
});

// 新增功能：文本分行显示
document.getElementById('splitButton').addEventListener('click', function() {
    const inputText = document.getElementById('splitInput').value;
    const delimiter = document.getElementById('splitDelimiter').value || ',';
    document.getElementById('splitOutput').textContent = inputText.split(delimiter).join('\n');
});

// 新增功能：文本排序
document.getElementById('sortButton').addEventListener('click', function() {
    const inputText = document.getElementById('sortInput').value;
    document.getElementById('sortOutput').textContent = inputText.split('').sort().join('');
});

// 新增功能：文本去重
document.getElementById('deduplicateButton').addEventListener('click', function() {
    const inputText = document.getElementById('deduplicateInput').value;
    const uniqueChars = [...new Set(inputText.split(''))].join('');
    document.getElementById('deduplicateOutput').textContent = uniqueChars;
});

// 新增功能：文本统计
document.getElementById('statButton').addEventListener('click', function() {
    const inputText = document.getElementById('statInput').value;
    const charCount = {};
    for (const char of inputText) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    document.getElementById('statOutput').textContent = JSON.stringify(charCount, null, 2);
});

// 新增功能：文本提取数字
document.getElementById('extractNumbersButton').addEventListener('click', function() {
    const inputText = document.getElementById('extractNumbersInput').value;
    const numbers = inputText.match(/\d+/g)?.join('') || '无数字';
    document.getElementById('extractNumbersOutput').textContent = numbers;
});

// 新增功能：文本提取字母
document.getElementById('extractLettersButton').addEventListener('click', function() {
    const inputText = document.getElementById('extractLettersInput').value;
    const letters = inputText.match(/[a-zA-Z]+/g)?.join('') || '无字母';
    document.getElementById('extractLettersOutput').textContent = letters;
});

// 新增功能：文本提取特殊字符
document.getElementById('extractSpecialCharsButton').addEventListener('click', function() {
    const inputText = document.getElementById('extractSpecialCharsInput').value;
    const specialChars = input
