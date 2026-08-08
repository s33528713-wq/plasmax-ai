
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
