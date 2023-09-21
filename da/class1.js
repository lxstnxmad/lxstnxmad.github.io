let userSelected = false;

        // Function to load the initial square state from localStorage
        function loadSquareState(index) {
            const square = document.getElementById(`square${index}`);
            const storedColor = localStorage.getItem(`squareColor${index}`);
            if (storedColor) {
                square.style.backgroundColor = storedColor;
            }
        }

        // Function to save the square state to localStorage
        function saveSquareState(index, color) {
            localStorage.setItem(`squareColor${index}`, color);
        }

        // Function to refresh squares at 18:00 Almaty Time
        function refreshSquares() {
            const currentTime = new Date();
            const almatyTime = new Date(currentTime.toLocaleString("en-US", { timeZone: "Asia/Almaty" }));
            
            if (almatyTime.getHours() === 18 && almatyTime.getMinutes() === 0) {
                // Reset the userSelected flag to allow users to select again
                userSelected = false;

                // Clear the localStorage for square colors
                for (let index = 1; index <= 3; index++) {
                    localStorage.removeItem(`squareColor${index}`);
                }

                // Reset square styles to their initial state
                for (let index = 1; index <= 3; index++) {
                    const square = document.getElementById(`square${index}`);
                    square.style.backgroundColor = ""; // Set to the initial state (empty color)
                }

                alert("Squares have been refreshed.");
            }
        }

        // Check for a refresh every minute
        setInterval(refreshSquares, 60000);

        // Function to show the form and handle user input
        function showForm(index) {
            if (!userSelected) {
                userSelected = true;
                const inputForm = document.getElementById(`inputForm${index}`);
                inputForm.style.display = "block";
            }
        }

        // Function to submit the username
        function submitUsername(index) {
            const usernameInput = document.getElementById(`usernameInput${index}`);
            const square = document.getElementById(`square${index}`);
            const submitButton = document.querySelector(`#square${index} button[type="submit"]`);
            const username = usernameInput.value;
            if (username.trim() !== "") {
                square.style.backgroundColor = "#921bd4";
                saveSquareState(index, "#921bd4"); // Save the color to localStorage
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




