let userSelected = false;

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
        usernameInput.disabled = true;
        submitButton.style.display = "none";
        alert(`Username ${username} submitted successfully.`);
    } else {
        alert("Please enter a valid username.");
    }
}



// Function to check if the current time is past 18:00 Almaty Time
function isTimeToReset() {
    const currentTime = new Date();
    const almatyTime = new Date(
      currentTime.getFullYear(),
      currentTime.getMonth(),
      currentTime.getDate(),
      18, // Hours
      0,  // Minutes
      0   // Seconds
    );
  
    // Check if the current time is past 18:00 Almaty Time
    return currentTime >= almatyTime;
  }
  
  // Function to reset the squares
  function resetSquares() {
    for (let i = 1; i <= 26; i++) {
      const square = document.getElementById(`square${i}`);
      const usernameInput = document.getElementById(`usernameInput${i}`);
      const submitButton = document.querySelector(`#square${i} button[type="submit"]`);
  
      // Reset square properties
      square.style.backgroundColor = "#f7fbdf";
      usernameInput.value = "";
      usernameInput.disabled = false;
      submitButton.style.display = "block";
    }
  }
  
  // Check if it's time to reset and reset the squares only if not already reset today
  if (isTimeToReset()) {
    const lastResetDate = localStorage.getItem('lastResetDate');
    const today = new Date().toDateString();
  
    if (lastResetDate !== today) {
      // Reset the squares
      resetSquares();
  
      // Update the last reset date in local storage
      localStorage.setItem('lastResetDate', today);
    }
  }
  




