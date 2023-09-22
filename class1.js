let userSelected = false;

function loadSquareState(index) {
    const square = document.getElementById(`square${index}`);
    const storedColor = localStorage.getItem(`squareColor${index}`);
    const storedUsername = localStorage.getItem(`username${index}`);
    if (storedColor) {
        square.style.backgroundColor = storedColor;
    }
    if (storedUsername) {
        const usernameInput = document.getElementById(`usernameInput${index}`);
        usernameInput.value = storedUsername;
    }
}


// Function to save the square state to localStorage
function saveSquareState(index, color) {
    localStorage.setItem(`squareColor${index}`, color);
}

// Function to show the form and handle user input
function showForm(index) {
    if (!userSelected) {
        userSelected = true;
        const inputForm = document.getElementById(`inputForm${index}`);
        inputForm.style.display = "block";
    }
}

function submitUsername(index) {
    const usernameInput = document.getElementById(`usernameInput${index}`);
    const square = document.getElementById(`square${index}`);
    const submitButton = document.querySelector(`#square${index} button[type="submit"]`);
    const username = usernameInput.value;
    if (username.trim() !== "") {
        square.style.backgroundColor = "#921bd4";
        saveSquareState(index, "#921bd4"); // Save the color to localStorage
        localStorage.setItem(`username${index}`, username); // Save the username
        usernameInput.disabled = true;
        submitButton.style.display = "none";
        alert(`Username ${username} submitted successfully.`);
    } else {
        alert("Please enter a valid username.");
    }
}


// Load the initial square state
for (let index = 1; index <= 3; index++) {
    loadSquareState(index);
}




