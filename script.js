
function scanHMI() {
    const imageInput = document.getElementById("imageInput");

    if (imageInput) {
        imageInput.click();
    } else {
        alert("Image input not found.");
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
    const input = document.getElementById("faultCode");

    if (!input) {
        alert("Fault input not found.");
        return;
    }

    const code = input.value.trim().toUpperCase();

    if (faults[code]) {
        alert(
            "Fault: " + faults[code].title +
            "\n\nCause: " + faults[code].cause +
            "\n\nSolution: " + faults[code].solution
        );
    } else {
        alert("Fault not found.");
    }
}

function openManual() {
    window.location.href = "manual.html";
}

function askAI() {
    const question = document.getElementById("question");

    if (!question) {
        alert("Question box not found.");
        return;
    }

    const code = question.value.trim().toUpperCase();

    if (faults[code]) {
        alert(
            "AI Diagnosis\n\n" +
            "Fault: " + faults[code].title +
            "\n\nCause: " + faults[code].cause +
            "\n\nSolution: " + faults[code].solution
        );
    } else {
        alert("Sorry! This fault is not in the database yet.");
    }
}
,
"GAS_VALVE_V19XX": {
    title: "Gas Valve V19XX Fault",
    cause: "Valve does not switch or delayed",
    solution: "Check signal wire, pneumatic O-ring, grease, spring, reed switch, wiring and cable."
},

"REACTOR_NOT_CLOSED": {
    title: "Reactor Not Closed",
    cause: "Bottle fallen in station",
    solution: "Check bottle transfer, turning wheel gripper, gas lance, director guides and reactor block roller."
},

"MAIN_AIR_SUPPLY": {
    title: "Main Air Supply Fault",
    cause: "Air pressure below 5 bar",
    solution: "Check air pressure, FRL filter, regulator, air leakage and digital pressure gauge."
}
