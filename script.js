
function scanHMI() {
    alert("Plasmax AI\n\nScan Feature Coming Soon");
    document.getElementById("imageInput").addEventListener("change", function () {
    alert("Image Selected Successfully");
});
}
const imageInput = document.getElementById("imageInput");

imageInput.addEventListener("change", function () {
    const file = imageInput.files[0];

    if (file) {
        alert("Image Selected: " + file.name);
    }
});
function searchFault() {
    let code = document.getElementById("faultCode").value;

    if (code == "W0503") {
        alert("Cooling Coating Module Fault\n\nCause: Cooling system problem\n\nSolution: Check water flow, pump and temperature.");
    } else {
        alert("Fault not found");
    }
}

const faults = {
  "W0503": {
    name: "Cooling Coating Module Fault",
    solution: "Check cooling water flow, pump and temperature."
  }
};

function searchFault() {
  const code = document.getElementById("faultCode").value.toUpperCase();

  if (faults[code]) {
    alert(
      "Fault: " + faults[code].name +
      "\n\nSolution: " + faults[code].solution
    );
  } else {
    alert("Fault not found!");
  }
}
function openManual() {
    alert("Plasmax Manual will be available here.");
}
