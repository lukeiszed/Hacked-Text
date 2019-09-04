let decodedText = '';
let index = 0;
let splitText = [];
let finalText = [];
let indexes = [];
let text;
let _iterations = 5;
let _speed = 10;


function Init(id, iterations, speed) {
    _iterations = iterations;
    _speed = speed;
    text = document.getElementById(id).innerText;
    DecodeText();
}


function DecodeText() {
    splitText = text.split('');

    indexes = new Array(splitText.length);

    for (let idx = 0; idx < indexes.length; idx++) {
        indexes[idx] = idx;
    }

    Shuffle(indexes); // random order of decoding

    splitText.forEach(ch => { finalText.push(ThrowRandomChar()); });
    finalText.toString();

    // for loop _iterations
    DoLoop(_iterations);

}

function DoLoop(count) {
    index = 0;
    const interval = setInterval(() => {
        finalText[indexes[index]] = ThrowRandomChar();
        index++;
        decodedText = finalText.join('');
        document.getElementById("text").innerText = decodedText;
        if (index > splitText.length - 1) {
            clearInterval(interval);
            count -= 1;
            if (count === 0) {
                FinalLoop();
            } else {
                DoLoop(count);
            }
        }
    }, _speed);
}

function FinalLoop() {  // final decode
    index = 0;
    const interval2 = setInterval(() => {
        finalText[indexes[index]] = splitText[indexes[index]];
        index++;
        decodedText = finalText.join('');
        document.getElementById("text").innerText = decodedText;
        if (index > splitText.length - 1) {
            clearInterval(interval2);
        }
    }, _speed);
}

function ThrowRandomChar() {
    const chars = ['#', '?', '@', '+', '*', '§', '$', '£', '!', '&'];
    return chars[Math.floor(Math.random() * chars.length)];
}


function Shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}