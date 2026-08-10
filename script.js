
function searchFault() {

    const code = document.getElementById("faultCode").value.trim().toUpperCase();

    const result = document.getElementById("result");
    const title = document.getElementById("faultTitle");
    const cause = document.getElementById("faultCause");
    const solution = document.getElementById("faultSolution");

    // Search in faults.js
    if (faults[code]) {

        result.style.display = "block";
        title.innerText = faults[code].title;
        cause.innerText = faults[code].cause;
        solution.innerText = faults[code].solution;

        localStorage.setItem("lastFault", code);
        return;
    }

    // Search in manual_db.js
    const search = code.toLowerCase();

    for (let item of manualDB) {

        if (
            item.title.toLowerCase().includes(search) ||
            item.keywords.some(k => k.toLowerCase().includes(search))
        ) {

            result.style.display = "block";
            title.innerText = item.title;
            cause.innerText = item.cause;
            solution.innerText = item.solution;

            localStorage.setItem("lastFault", item.title);

            return;
        }
    }

    // Not Found
    result.style.display = "block";
    title.innerText = "❌ Fault Not Found";
    cause.innerText = "No matching fault found.";
    solution.innerText = "Update the database or check the fault code.";

}
