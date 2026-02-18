// Get the calculator display input
let input = document.getElementById("result");

// Add clicked button value to display
function addValue(value) {
    input.value = input.value + value;
}

// Clear the entire display
function clearAll() {
    input.value = "";
}

// Remove the last character from display
function deleteLast() {
    input.value = input.value.slice(0, input.value.length - 1);
}

// Calculate and show the result
function calculate() {
    try {
        input.value = eval(input.value);
    } catch (error) {
        input.value = "Error";
    }
}
