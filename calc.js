var resultElement = document.getElementById('result');
var button = document.getElementById('average-button');
button.addEventListener('click', updateAverageDisplay);


// Method that will update the display
function updateAverageDisplay () {

    // Grabe the value that a user types into the input
    var numberString = document.getElementById('input-id').value;

    // Convert the string value of the numbers into an array
    var numberArray = numberString.split(",");

    // Convert the string versions of the numbers into actuall numbers
    numberArray = numberArray.map(function(stringNumber) {
        return parseInt(stringNumber, 10);
    });

    // Use our stats module to find the average of those numbers
    var average = Stats.averageOfArray(numberArray);

    // Write the average to the element that will display the average
    resultElement.innerHTML = average;
}

var resultElement = document.getElementById('result');
var button = document.getElementById('mode-button');
button.addEventListener('click', updateModeDisplay);

// Method that will update the display
function updateModeDisplay () {

    // Grabe the value that a user types into the input
    var numberString = document.getElementById('input-id').value;

    // Convert the string value of the numbers into an array
    var numberArray = numberString.split(",");

    // Convert the string versions of the numbers into actuall numbers
    numberArray = numberArray.map(function(stringNumber) {
        return parseInt(stringNumber, 10);
    });

    // Use our stats module to find the mode of those numbers
    var modeOfArray = Stats.mode(numberArray);

    // Write the average to the element that will display the mode
    resultElement.innerHTML = modeOfArray;

}

var resultElement = document.getElementById('result');
var button = document.getElementById('median-button');
button.addEventListener('click', updateMedianDisplay);

// Method that will update the display
function updateMedianDisplay () {

    // Grabe the value that a user types into the input
    var numberString = document.getElementById('input-id').value;

    // Convert the string value of the numbers into an array
    var numberArray = numberString.split(",");

    // Convert the string versions of the numbers into actuall numbers
    numberArray = numberArray.map(function(stringNumber) {
        return parseInt(stringNumber, 10);
    });

    // Use our stats module to find the median of those numbers
    var medianOfArray = Stats.median(numberArray);

    // Write the median to the element that will display the median
    resultElement.innerHTML = medianOfArray;
}

var resultElement = document.getElementById('result');
var button = document.getElementById('max-button');
button.addEventListener('click', updateMaxDisplay);

// Method that will update the display
function updateMaxDisplay () {

    // Grabe the value that a user types into the input
    var numberString = document.getElementById('input-id').value;

    // Convert the string value of the numbers into an array
    var numberArray = numberString.split(",");

    // Convert the string versions of the numbers into actuall numbers
    numberArray = numberArray.map(function(stringNumber) {
        return parseInt(stringNumber, 10);
    });

    // Use our stats module to find the max of those numbers
    var maxOfArray = Stats.max(numberArray);

    // Write the max to the element that will display the max
    resultElement.innerHTML = maxOfArray;
}

var resultElement = document.getElementById('result');
var button = document.getElementById('min-button');
button.addEventListener('click', updateMinDisplay);

// Method that will update the display
function updateMinDisplay () {

    // Grabe the value that a user types into the input
    var numberString = document.getElementById('input-id').value;

    // Convert the string value of the numbers into an array
    var numberArray = numberString.split(",");

    // Convert the string versions of the numbers into actuall numbers
    numberArray = numberArray.map(function(stringNumber) {
        return parseInt(stringNumber, 10);
    });

    // Use our stats module to find the min of those numbers
    var minOfArray = Stats.min(numberArray);

    // Write the min to the element that will display the min
    resultElement.innerHTML = minOfArray;
}


var resultElement = document.getElementById('result');
var button = document.getElementById('sum-button');
button.addEventListener('click', updateSumDisplay);

// Method that will update the display
function updateSumDisplay () {

    // Grabe the value that a user types into the input
    var numberString = document.getElementById('input-id').value;

    // Convert the string value of the numbers into an array
    var numberArray = numberString.split(",");

    // Convert the string versions of the numbers into actuall numbers
    numberArray = numberArray.map(function(stringNumber) {
        return parseInt(stringNumber, 10);
    });

    // Use our stats module to find the sum of those numbers
    var sum = Stats.sumOfArray(numberArray);

    // Write the sum to the element that will display the sum
    resultElement.innerHTML = sum;
}

var resultElement = document.getElementById('result');
var button = document.getElementById('range-button');
button.addEventListener('click', updateRangeDisplay);

// Method that will update the display
function updateRangeDisplay () {

    // Grabe the value that a user types into the input
    var numberString = document.getElementById('input-id').value;

    // Convert the string value of the numbers into an array
    var numberArray = numberString.split(",");

    // Convert the string versions of the numbers into actuall numbers
    numberArray = numberArray.map(function(stringNumber) {
        return parseInt(stringNumber, 10);
    });

    // Use our stats module to find the range of those numbers
    var range = Stats.rangeOfArray(numberArray);

    // Write the range to the element that will display the range
    resultElement.innerHTML = range;
}

 