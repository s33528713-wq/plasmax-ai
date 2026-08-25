
constconst WORKER_URL = "https://plasmax-ai.barmansanjib133.workers.dev";
 ";
 " 

// ১. টেক্সট দিয়ে AI প্রশ্ন করার ফাংশন
async function askAI() {
    const questionInput = document.getElementById("question");
    if (!questionInput) return;
    
    const question = questionInput.value.trim().toLowerCase();

    if (!question) {
        alert("Please enter a fault code or question!");
        return;
    }

    // লোকাল ডাটাবেসে খোঁজা (Fast Search)
    if (typeof faults !== 'undefined') {
        for (let key in faults) {
            if (key.toLowerCase().includes(question) || faults[key].title.toLowerCase().includes(question)) {
                alert("🤖 Plasmax AI (Local Database)\n\nFault: " + faults[key].title + "\n\nCause: " + faults[key].cause + "\n\nSolution: " + faults[key].solution);
                return;
            }
        }
    }

    if (typeof manualDB !== 'undefined') {
        for (let item of manualDB) {
            if (item.title.toLowerCase().includes(question) || item.cause.toLowerCase().includes(question)) {
                alert("🤖 Plasmax AI (Local Database)\n\nFault: " + item.title + "\n\nCause: " + item.cause + "\n\nSolution: " + item.solution);
                return;
            }
        }
    }

    // লোকাল ডাটাবেসে না পেলে Gemini AI-কে জিজ্ঞাসা করা
    try {
        alert("⏳ Asking Gemini AI...");
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: `You are an expert Plasmax Industrial Coating Machine engineer. Answer this query directly with Cause and Solution: ${question}` }] }]
            })
        });
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        contents: [{
            parts: [{
                text: `You are an expert Plasmax Industrial Coating Machine engineer. Answer this query directly with Cause and Solution: ${question}`
            }]
        }]
    })
});

if (!response.ok) {
    const errorText = await response.text();
    alert("Gemini API Error:\n" + errorText);
    return;
}

const data = await response.json();

        const data = await response.json();
        if (data.candidates && data.candidates[0].content.parts[0].text) {
            const aiAnswer = data.candidates[0].content.parts[0].text;
            alert("🤖 Plasmax Gemini AI Response:\n\n" + aiAnswer);
        } else {
            alert("❌ AI couldn't process the query. Please try again.");
        }

    } catch (error) {
        alert("❌ Error connecting to AI. Please check your internet connection.");
    }
}

// ২. ছবি স্ক্যান করে HMI Fault বের করার ফাংশন
async function processFaultImage(event) {
    const file = event.target.files[0];
    const preview = document.getElementById('imagePreview');
    
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async function(e) {
        const base64Data = e.target.result.split(',')[1];
        if (preview) {
            preview.innerHTML = `<img src="${e.target.result}" style="max-width:100%; border-radius:8px;"><p style="color:blue; font-weight:bold;">🤖 Gemini AI Analyzing HMI Screen...</p>`;
        }

        try {
            const response = await fetch(WORKER_URL, {

                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{
                        parts: [
                            { text: "Analyze this Plasmax industrial machine HMI screen or fault photo. Identify the error code, cause, and list troubleshooting steps clearly." },
                            { inline_data: { mime_type: file.type, data: base64Data } }
                        ]
                    }]
                })
            });

            const data = await response.json();
            if (data.candidates && data.candidates[0].content.parts[0].text) {
                const aiResponse = data.candidates[0].content.parts[0].text;
                if (preview) {
                    preview.innerHTML = `<div style="background:#eef6ff; padding:12px; border-radius:8px; text-align:left; margin-top:10px;">
                                            <h4 style="color:#0056b3; margin:0;">AI Analysis Result:</h4>
                                            <p style="white-space: pre-line;">${aiResponse}</p>
                                          </div>`;
                } else {
                    alert("🤖 HMI Scan Result:\n\n" + aiResponse);
                }
            } else {
                alert("❌ Could not read fault from image.");
            }

        } catch (error) {
            alert("❌ Failed to analyze image with AI. Check API Key or Internet.");
        }
    };
    reader.readAsDataURL(file);
}

