const data = document.getElementById("dhs3");
const box = document.getElementById("area");
const bit = document.getElementById("btn");
let start, end;


const arr = ["When you have a dream, you have got to grab it and never let go",
    "Nothing is impossible. The word itself says I m possible!",
    "There is nothing impossible to they who will try.",
    "The bad news is time flies. The good news is you are the pilot",
    "Life has got all those twists and turns. You have got to hold on tight and off you go",
    "You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box."]

const playhere = () => {
    const random = Math.floor(Math.random() * arr.length);
    data.innerText = arr[random];
    bit.innerText = "Done";
    const date = new Date();
    start = date.getTime();
}

const playagain = () => {
    const date = new Date();
    end = date.getTime();
    const totalTime = ((end - start) / 1000);

    let word = box.value;
    let totalWords = wordCount(word);

    let speed = Math.floor((totalWords / totalTime) * 60);

    let error = checkError(data.innerText, word);
    bit.innerText = "Start";
    let yourSpeed = "You Have Typed " + speed + " Per Minute . "+ error;
    data.innerText = yourSpeed;
}

let checkError = (data1, data2) => {

    const data11 = data1.split(" ");
    const data22 = data2.split(" ");
    let count = 0;

    data11.forEach(function (element, index) {
        if (element == data22[index]) {
            count++;
        }
    });

    const insideError = data11.length-count;

    return (count +" Out of " + data11.length+ " are Correct. Errors are "+ insideError);
}

const wordCount = (word1) => {
    let realWordCount = word1.split(" ").length;
    return realWordCount;
}
bit.addEventListener('click', () => {
    if (bit.innerText == "Start") {

        playhere();
    }

    else if (bit.innerText == "Done") {
        playagain();
    }
})