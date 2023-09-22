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


const contentDiv = document.getElementById('content');

        function loadPage(page) {
            fetch(page + '.html')
                .then(response => response.text())
                .then(html => {
                    contentDiv.innerHTML = html;
                });
        }

        // Handle navigation
        document.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const href = link.getAttribute('href');
                history.pushState({}, '', href);
                loadPage(href);
            });
        });

        // Initial page load
        loadPage(location.pathname);
