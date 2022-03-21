console.log("calculator.js linked");

// Start with this webpage, which has inputs and buttons for things to calculate: 
// ```html
// <!DOCTYPE html>
// <html>
// <head>
// <meta charset=utf-8 />
// <title>Calculator</title>
// </head>
// <body>

const $calculator = $(`<label>Square this number:<input type="number" id="square-input" size="2"></label><button id="square-button">Calculate</button>
<br><br><label>Half this number:<input type="number" id="half-input" size="2"></label><button id="half-button">Calculate</button><br><br><label>Fraction:<input type="number" id="percent1-input" size="2"></label><label>Whole:<input type="number" id="percent2-input" size="2"></label><button id="percent-button">Calculate</button><br><br><label>Calculate area of circle with radius:<input type="number" id="area-input" size="2"></label><button id="area-button">Calculate</button> <br><br><div id="solution"></div>`);
$endOfPage.before($calculator);

// - For each operation, create an event listener for the button, and when it's clicked, find the value of the appropriate input and show the result of the calculation in the solution div.
// square-button,
const $squareButton = $("#square-button");

const squareFunction = function () {
    const input = $("#square-input").val();
    const output = input ** 2;
    $("#solution").html(output);
};

$squareButton.on( "click", squareFunction );

//half-button, 
const $halfButton = $("#half-button");

const halfFunction = function () {
    const input = $("#half-input").val();
    const output = input / 2;
    $("#solution").html(output);
};

$halfButton.on( "click", halfFunction );


//percent-button, 
const $percentButton = $("#percent-button");

const percentFunction = function () {
    const percent1 = $("#percent1-input").val();
    const percent2 = $("#percent2-input").val();
    const output = (percent1 / percent2 * 100) + "%";
    $("#solution").html(output);
};

$percentButton.on( "click", percentFunction );

//area-button
const $areaButton = $("#area-button");

const areaFunction = function () {
    const radius = $("#area-input").val();
    const output = (Math.PI * (radius ** 2));
    $("#solution").html(output);
};

$areaButton.on( "click", areaFunction );

// select buttons past last horizontal rule
    const $buttons = $("hr:last-of-type~button");

// - Bonus: respond to key presses so that the user doesn't have to click the button.