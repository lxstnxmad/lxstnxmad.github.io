document.addEventListener("DOMContentLoaded", function() {
    const codeInput = document.getElementById("code");
    const submitButton = document.getElementById("submitButton");
    const correctCode = "KTL1992"; 
    const redirectURL = "subject.html"; 

    codeInput.addEventListener("input", function() {
        if (codeInput.value === correctCode) {
            submitButton.removeAttribute("disabled");
        } else {
            submitButton.setAttribute("disabled", "true");
        }
    });

    submitButton.addEventListener("click", function() {
        if (codeInput.value === correctCode) {
            window.location.href = redirectURL;
        }
    });
});
