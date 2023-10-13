function greet() {
    console.log("hello world!");
}

function shoutTen() {
    console.log("10!");
}

function initialize() {
    num1 = 3;
    num2 = 7;
}

function add() {
    console.log(num1 + num2);
}

function subtract() {
    const result = num1 - num2;
    console.log(result);
}

function initialize1() {
    outputDiv = document.getElementsById("divout");
} 

function clickResponse() {
    outputDiv.innerHTML = "Now you've clicked the button";
}

function initialize2() {
    numberOutput = document.getElementById("numberout");
    negativeNutton = document.getElementById("negativebtn");
    myNumber = 0;
    negativesAllowed = false;
    display();
}

function addOne() {
    myNumber++;
    display();
}

function subtractOne() {
    myNumber--;
    if (myNumber < 0 && !negativesAllowed) {
        myNumber = 0;
    }
    display();
}

function display() {
    numberOutput.innerHTML = myNumber;
    if (!negativesAllowed) {
        negativeButton.innerHTML = "Negatives are OFF";
    } else {
        negativeButton.innerHTML = "Negatives are ON";
    }
}

function toggleNegatives() {
    negativesAllowed = !negativesAllowed;
    display();
}