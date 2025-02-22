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
    const specialChars = inputText.match(/[^\w\s]/g)?.join('') || '无特殊字符';
    document.getElementById('extractSpecialCharsOutput').textContent = specialChars;
});

// 新增功能：文本首字母大写
document.getElementById('capitalizeButton').addEventListener('click', function() {
    const inputText = document.getElementById('capitalizeInput').value;
    document.getElementById('capitalizeOutput').textContent = inputText.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
});

// 新增功能：文本倒序单词
document.getElementById('reverseWordsButton').addEventListener('click', function() {
    const inputText = document.getElementById('reverseWordsInput').value;
    document.getElementById('reverseWordsOutput').textContent = inputText.split(' ').map(word => word.split('').reverse().join('')).join(' ');
});

// 新增功能：文本比较
document.getElementById('compareButton').addEventListener('click', function() {
    const input1 = document.getElementById('compareInput1').value;
    const input2 = document.getElementById('compareInput2').value;
    document.getElementById('compareOutput').textContent = input1 === input2 ? '相同' : '不同';
});

// 图片处理功能
let currentImage = null;

// 上传图片
document.getElementById('uploadButton').addEventListener('click', function() {
    document.getElementById('imageUpload').click();
});

document.getElementById('imageUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file && file.size <= 10 * 1024 * 1024) { // 限制 10MB
        const reader = new FileReader();
        reader.onload = function(e) {
            currentImage = new Image();
            currentImage.src = e.target.result;
            document.getElementById('imagePreview').src = e.target.result;
            document.getElementById('imagePreviewContainer').style.display = 'block';
        };
        reader.readAsDataURL(file);
    } else {
        alert('图片大小不能超过 10MB！');
    }
});

// 压缩图片
document.getElementById('compressButton').addEventListener('click', function() {
    if (!currentImage) return alert('请先上传图片！');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = currentImage.width;
    canvas.height = currentImage.height;
    ctx.drawImage(currentImage, 0, 0);
    const compressedImage = canvas.toDataURL('image/jpeg', 0.7); // 压缩质量 0.7
    currentImage.src = compressedImage;
    document.getElementById('imagePreview').src = compressedImage;
});

// 裁剪图片
document.getElementById('cropButton').addEventListener('click', function() {
    if (!currentImage) return alert('请先上传图片！');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const cropWidth = 200, cropHeight = 200; // 裁剪区域
    canvas.width = cropWidth;
    canvas.height = cropHeight;
    ctx.drawImage(currentImage, 0, 0, cropWidth, cropHeight, 0, 0, cropWidth, cropHeight);
    currentImage.src = canvas.toDataURL();
    document.getElementById('imagePreview').src = canvas.toDataURL();
});

// 旋转图片
document.getElementById('rotateButton').addEventListener('click', function() {
    if (!currentImage) return alert('请先上传图片！');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = currentImage.height;
    canvas.height = currentImage.width;
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(Math.PI / 2); // 旋转 90°
    ctx.drawImage(currentImage, -currentImage.width / 2, -currentImage.height / 2);
    currentImage.src = canvas.toDataURL();
    document.getElementById('imagePreview').src = canvas.toDataURL();
});

// 灰度化
document.getElementById('grayscaleButton').addEventListener('click', function() {
    if (!currentImage) return alert('请先上传图片！');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = currentImage.width;
    canvas.height = currentImage.height;
    ctx.drawImage(currentImage, 0, 0);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
        const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
        data[i] = avg; // R
        data[i + 1] = avg; // G
        data[i + 2] = avg; // B
    }
    ctx.putImageData(imageData, 0, 0);
    currentImage.src = canvas.toDataURL();
    document.getElementById('imagePreview').src = canvas.toDataURL();
});

// 调整亮度
document.getElementById('brightnessButton').addEventListener('click', function() {
    if (!currentImage) return alert('请先上传图片！');
    const brightness = prompt('请输入亮度值（-100 到 100）：');
    if (brightness === null || isNaN(brightness)) return;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = currentImage.width;
    canvas.height = currentImage.height;
    ctx.drawImage(currentImage, 0, 0);
    ctx.filter = `brightness(${brightness}%)`;
    ctx.drawImage(currentImage, 0, 0);
    currentImage.src = canvas.toDataURL();
    document.getElementById('imagePreview').src = canvas.toDataURL();
});

// 调整对比度
document.getElementById('contrastButton').addEventListener('click', function() {
    if (!currentImage) return alert('请先上传图片！');
    const contrast = prompt('请输入对比度值（0 到 200）：');
    if (contrast === null || isNaN(contrast)) return;
    const canvas = document.createElement
