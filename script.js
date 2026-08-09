
function scanHMI() {
    const imageInput = document.getElementById("imageInput");
    if (imageInput) {
        imageInput.click();
    }
}

const imageInput = document.getElementById("imageInput");

if (imageInput) {
    imageInput.addEventListener("change", function () {
        const file = imageInput.files[0];
        if (file) {
            alert("Image Selected: " + file.name);
        }
    });
}

function searchFault() {
    const code = document.getElementById("faultCode").value.trim().toUpperCase();

    const result = document.getElementById("result");
    const title = document.getElementById("faultTitle");
    const cause = document.getElementById("faultCause");
    const solution = document.getElementById("faultSolution");

    if (faults[code]) {
        result.style.display = "block";
        title.innerText = faults[code].title;
        cause.innerText = faults[code].cause;
        solution.innerText = faults[code].solution;
        localStorage.setItem("lastFault", code);
        localStorage.setItem("lastFault", code);
    } else {
        result.style.display = "block";
        title.innerText = "❌ Fault Not Found";
        cause.innerText = "No information available.";
        solution.innerText = "Check the fault code or update the database.";
        
    }
}

function askAI() {
    const question = document.getElementById("question").value.trim().toUpperCase();

    if (faults[question]) {
        alert(
            "🤖 Plasmax AI\n\n" +
            "Fault: " + faults[question].title +
            "\n\nCause: " + faults[question].cause +
            "\n\nSolution: " + faults[question].solution
        );
    } else {
        alert("Sorry! This fault is not available in the database.");
    }
}
