
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
