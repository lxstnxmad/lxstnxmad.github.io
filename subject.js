document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("changeTextButton");

    const texts = ["Biology", "Synyp Sagaty", "Algebra", "English", "English"];
    let currentIndex = 0;
    let showText = true;

    function updateButtonTextAtAlmatyTime() {
        const almatyTime = new Date(new Date().getTime() + (6 * 60 * 60 * 1000)); 
        
        if (almatyTime.getUTCHours() >= 12 && almatyTime.getUTCHours() < 18) {
            showText = true;
            updateButtonText();
        } else {
            showText = false;
            button.innerHTML = "";
        }
    }

    function updateButtonText() {
        button.innerHTML = texts[currentIndex];
        currentIndex = (currentIndex + 1) % texts.length;
    }

    function cycleText() {
        if (showText) {
            updateButtonText();
        } else {
            button.innerHTML = ""; 
        }

        setTimeout(() => {
            showText = !showText;
        }, 2 * 24 * 60 * 60 * 1000); 
    }

    updateButtonTextAtAlmatyTime();

    setInterval(updateButtonTextAtAlmatyTime, 60000); 

    setInterval(cycleText, 60000); 
});









document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("changeTextButton1");

    const texts = ["K. Tarih", "Physics", "Algebra", "Physical Education", "AAD"];
    let currentIndex = 0;
    let showText = true;

    function updateButtonTextAtAlmatyTime() {
        const almatyTime = new Date(new Date().getTime() + (6 * 60 * 60 * 1000)); 
        
        if (almatyTime.getUTCHours() >= 12 && almatyTime.getUTCHours() < 18) {
            showText = true;
            updateButtonText();
        } else {
            showText = false;
            button.innerHTML = "";
        }
    }

    function updateButtonText() {
        button.innerHTML = texts[currentIndex];
        currentIndex = (currentIndex + 1) % texts.length;
    }

    function cycleText() {
        if (showText) {
            updateButtonText();
        } else {
            button.innerHTML = ""; 
        }

        setTimeout(() => {
            showText = !showText;
        }, 2 * 24 * 60 * 60 * 1000); 
    }

    updateButtonTextAtAlmatyTime();

    setInterval(updateButtonTextAtAlmatyTime, 60000); 

    setInterval(cycleText, 60000); 
});








document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("changeTextButton2");

    const texts = ["Algebra", "Physics", "Geografia", "Physical Education", "Chemistry"];
    let currentIndex = 0;
    let showText = true;

    function updateButtonTextAtAlmatyTime() {
        const almatyTime = new Date(new Date().getTime() + (6 * 60 * 60 * 1000)); 
        
        if (almatyTime.getUTCHours() >= 12 && almatyTime.getUTCHours() < 18) {
            showText = true;
            updateButtonText();
        } else {
            showText = false;
            button.innerHTML = "";
        }
    }

    function updateButtonText() {
        button.innerHTML = texts[currentIndex];
        currentIndex = (currentIndex + 1) % texts.length;
    }

    function cycleText() {
        if (showText) {
            updateButtonText();
        } else {
            button.innerHTML = ""; 
        }

        setTimeout(() => {
            showText = !showText;
        }, 2 * 24 * 60 * 60 * 1000); 
    }

    updateButtonTextAtAlmatyTime();

    setInterval(updateButtonTextAtAlmatyTime, 60000); 

    setInterval(cycleText, 60000); 
});









document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("changeTextButton3");

    const texts = ["Algebra", "English pract", "Geografia", "Kazak Tili", "Geometry"];
    let currentIndex = 0;
    let showText = true;

    function updateButtonTextAtAlmatyTime() {
        const almatyTime = new Date(new Date().getTime() + (6 * 60 * 60 * 1000)); 
        
        if (almatyTime.getUTCHours() >= 12 && almatyTime.getUTCHours() < 18) {
            showText = true;
            updateButtonText();
        } else {
            showText = false;
            button.innerHTML = "";
        }
    }

    function updateButtonText() {
        button.innerHTML = texts[currentIndex];
        currentIndex = (currentIndex + 1) % texts.length;
    }

    function cycleText() {
        if (showText) {
            updateButtonText();
        } else {
            button.innerHTML = ""; 
        }

        setTimeout(() => {
            showText = !showText;
        }, 2 * 24 * 60 * 60 * 1000); 
    }

    updateButtonTextAtAlmatyTime();

    setInterval(updateButtonTextAtAlmatyTime, 60000); 

    setInterval(cycleText, 60000); 
});









document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("changeTextButton4");

    const texts = ["Jahandyk quzirettilik", "Orys Tili", "Informatics", "Turik Tili", "K.Tarih"];
    let currentIndex = 0;
    let showText = true;

    function updateButtonTextAtAlmatyTime() {
        const almatyTime = new Date(new Date().getTime() + (6 * 60 * 60 * 1000)); 
        
        if (almatyTime.getUTCHours() >= 12 && almatyTime.getUTCHours() < 18) {
            showText = true;
            updateButtonText();
        } else {
            showText = false;
            button.innerHTML = "";
        }
    }

    function updateButtonText() {
        button.innerHTML = texts[currentIndex];
        currentIndex = (currentIndex + 1) % texts.length;
    }

    function cycleText() {
        if (showText) {
            updateButtonText();
        } else {
            button.innerHTML = ""; 
        }

        setTimeout(() => {
            showText = !showText;
        }, 2 * 24 * 60 * 60 * 1000); 
    }

    updateButtonTextAtAlmatyTime();

    setInterval(updateButtonTextAtAlmatyTime, 60000); 

    setInterval(cycleText, 60000); 
});









document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("changeTextButton5");

    const texts = ["Geografia", "Kazak Adebiet", "Informatics", "D.tarih", "Geometry"];
    let currentIndex = 0;
    let showText = true;

    function updateButtonTextAtAlmatyTime() {
        const almatyTime = new Date(new Date().getTime() + (6 * 60 * 60 * 1000)); 
        
        if (almatyTime.getUTCHours() >= 12 && almatyTime.getUTCHours() < 18) {
            showText = true;
            updateButtonText();
        } else {
            showText = false;
            button.innerHTML = "";
        }
    }

    function updateButtonText() {
        button.innerHTML = texts[currentIndex];
        currentIndex = (currentIndex + 1) % texts.length;
    }

    function cycleText() {
        if (showText) {
            updateButtonText();
        } else {
            button.innerHTML = ""; 
        }

        setTimeout(() => {
            showText = !showText;
        }, 2 * 24 * 60 * 60 * 1000); 
    }

    updateButtonTextAtAlmatyTime();

    setInterval(updateButtonTextAtAlmatyTime, 60000); 

    setInterval(cycleText, 60000); 
});








document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("changeTextButton6");

    const texts = ["Math Sauat", "Geografia/Chemistry", "Physical Education", "Physics", "D.Tarih"];
    let currentIndex = 0;
    let showText = true;

    function updateButtonTextAtAlmatyTime() {
        const almatyTime = new Date(new Date().getTime() + (6 * 60 * 60 * 1000)); 
        
        if (almatyTime.getUTCHours() >= 12 && almatyTime.getUTCHours() < 18) {
            showText = true;
            updateButtonText();
        } else {
            showText = false;
            button.innerHTML = "";
        }
    }

    function updateButtonText() {
        button.innerHTML = texts[currentIndex];
        currentIndex = (currentIndex + 1) % texts.length;
    }

    function cycleText() {
        if (showText) {
            updateButtonText();
        } else {
            button.innerHTML = ""; 
        }

        setTimeout(() => {
            showText = !showText;
        }, 2 * 24 * 60 * 60 * 1000); 
    }

    updateButtonTextAtAlmatyTime();

    setInterval(updateButtonTextAtAlmatyTime, 60000); 

    setInterval(cycleText, 60000); 
});