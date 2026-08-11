
function askAI() {

    const question = document.getElementById("question").value.trim().toLowerCase();

    // Exact search in faults.js
    for (let key in faults) {
        if (
            key.toLowerCase().includes(question) ||
            faults[key].title.toLowerCase().includes(question) ||
            faults[key].cause.toLowerCase().includes(question) ||
            faults[key].solution.toLowerCase().includes(question)
        ) {
            alert(
                "🤖 Plasmax AI\n\n" +
                "Fault: " + faults[key].title +
                "\n\nCause: " + faults[key].cause +
                "\n\nSolution: " + faults[key].solution
            );
            return;
        }
    }

    // Smart search in manual_db.js
    for (let item of manualDB) {
        if (
            item.title.toLowerCase().includes(question) ||
            item.cause.toLowerCase().includes(question) ||
            item.solution.toLowerCase().includes(question) ||
            item.keywords.some(k => k.toLowerCase().includes(question))
        ) {
            alert(
                "🤖 Plasmax AI\n\n" +
                "Fault: " + item.title +
                "\n\nCause: " + item.cause +
                "\n\nSolution: " + item.solution
            );
            return;
        }
    }

    alert("❌ No matching fault found.");
}
