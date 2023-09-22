// Function to load and apply the square state from localStorage
function loadSquareState(index) {
    const square = document.getElementById(`square${index}`);
    const storedColor = localStorage.getItem(`squareColor${index}`);
    if (storedColor) {
        square.style.backgroundColor = storedColor;
    }

    // Load and display the saved username from the cookie
    const storedUsername = getCookie(`username${index}`);
    const inputForm = document.getElementById(`inputForm${index}`);
    if (storedUsername) {
        const usernameInput = document.getElementById(`usernameInput${index}`);
        usernameInput.value = storedUsername;
        inputForm.style.display = "none"; // Hide the input form since the username is already set
    } else {
        inputForm.style.display = "block"; // Show the input form if no username is saved
    }
}

function submitUsername(index) {
    const usernameInput = document.getElementById(`usernameInput${index}`);
    const square = document.getElementById(`square${index}`);
    const username = usernameInput.value;
    if (username.trim() !== "") {
        square.style.backgroundColor = "#921bd4";
        saveSquareState(index, "#921bd4"); // Save the color to localStorage
        setCookie(`username${index}`, username, 365); // Save the username as a cookie for 1 year
        usernameInput.disabled = true;
        const submitButton = document.querySelector(`#square${index} button`);
        submitButton.style.display = "none";
        alert(`Username ${username} submitted successfully.`);
    } else {
        alert("Please enter a valid username.");
    }
}


// Load the initial square state
for (let index = 1; index <= 26; index++) {
    loadSquareState(index);
}





function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}



function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        const [cookieName, cookieValue] = cookie.trim().split('=');
        if (cookieName === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return null;
}


