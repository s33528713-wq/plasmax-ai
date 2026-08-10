
function askAI() {

    const question = document.getElementById("question").value.trim().toUpperCase();

    // Search in faults.js
    if (faults[question]) {

        alert(
            "🤖 Plasmax AI\n\n" +
            "Fault: " + faults[question].title +
            "\n\nCause: " + faults[question].cause +
            "\n\nSolution: " + faults[question].solution
        );

        return;
    }

    // Search in manual_db.js
    for (let item of manualDB) {

        if (
            item.title.toUpperCase().includes(question) ||
            item.keywords.some(keyword =>
                keyword.toUpperCase().includes(question)
            )
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

    alert(
        "❌ No matching information found.\n\n" +
        "Please check the fault code or update the Manual Database."
    );
}
