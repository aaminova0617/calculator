function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculateResult() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

// Listen for keyboard input
document.addEventListener("keydown", function(event) {
    const key = event.key;

    if (/[0-9+\-*/=]/.test(key)) {
        event.preventDefault(); // Prevent the default behavior of keys
        if (key === "=") {
            calculateResult();
        } else {
            appendToDisplay(key);
        }
    } else if (key === "Enter") {
        event.preventDefault(); // Prevent Enter key from submitting forms
        calculateResult();
    } else if (key === "Escape") {
        clearDisplay();
    }
});
