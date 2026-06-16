function switchView(view, element) {

    // Remove active class from all menu items
    document.querySelectorAll(".menu li")
        .forEach(li => {
            li.classList.remove("active");
        });

    // Add active class to clicked item
    element.classList.add("active");

    // Hide all views
    document.querySelectorAll(".view")
        .forEach(viewDiv => {
            viewDiv.style.display = "none";
        });

    // Show selected view
    const selectedView =
        document.getElementById(view);

    if(selectedView){
        selectedView.style.display = "block";
    }
}

function updateClock() {

    const now = new Date();

    const pad = n =>
        String(n).padStart(2, "0");

    const clock =
        document.getElementById("clock");

    if (clock) {

        clock.textContent =
            `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
    }

    const dateEl =
        document.getElementById("date-display");

    if (dateEl) {

        dateEl.textContent =
            now.toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "long",
                year: "numeric"
            });
    }

    const dayEl =
        document.getElementById("day-display");

    if (dayEl) {

        dayEl.textContent =
            now.toLocaleDateString("en-GB", {
                weekday: "long"
            });
    }
}

updateClock();
setInterval(updateClock, 1000);





function switchView(viewId, clickedLi) {

    document
        .querySelectorAll(".view")
        .forEach(view => {

            view.classList.remove("active");

        });

    document
        .getElementById(viewId)
        .classList.add("active");

    document
        .querySelectorAll(".menu li")
        .forEach(li => {

            li.classList.remove("active");

        });

    if (clickedLi) {

        clickedLi.classList.add("active");
    }
}





function runAnalysis() {

    const email =
        document.getElementById("emailInput").value;

    if (!email.trim()) {
        alert("Please enter an email first.");
        return;
    }

    let score = 0;

    const keywords = [
        "urgent",
        "verify",
        "password",
        "otp",
        "login",
        "bank",
        "click here",
        "account suspended"
    ];

    keywords.forEach(word => {
        if (email.toLowerCase().includes(word)) {
            score += 15;
        }
    });

    if (score > 100) score = 100;

    // Show result panel
    document.getElementById("results-placeholder").style.display = "none";
    document.getElementById("results-panel").style.display = "block";
    document.getElementById("rec-card").style.display = "block";

    // Update values
    document.getElementById("riskText").innerText =
        score >= 80 ? "High Risk" :
            score >= 40 ? "Medium Risk" :
                "Safe";

    document.getElementById("riskNumber").innerText = score;
    document.getElementById("riskScore").innerText = score + "/100";
    document.getElementById("confidence").innerText =
        Math.min(score + 10, 99) + "%";
}




function clearEmail() {

    document.getElementById(
        "emailInput"
    ).value = "";

    document.getElementById(
        "riskText"
    ).innerText = "Safe";

    document.getElementById(
        "riskScore"
    ).innerText = "0/100";

    document.getElementById(
        "confidence"
    ).innerText = "0%";
}





const threatCanvas =
    document.getElementById(
        "threatChart"
    );

if (threatCanvas) {

    new Chart(threatCanvas, {

        type: "doughnut",

        data: {

            labels: [
                "High Risk",
                "Medium Risk",
                "Low Risk"
            ],

            datasets: [{

                data: [6, 6, 3],

                backgroundColor: [
                    "#ef4444",
                    "#f97316",
                    "#eab308"
                ],

                borderWidth: 0
            }]
        },

        options: {

            cutout: "70%",

            plugins: {

                legend: {

                    display: false
                }
            }
        }
    });
}






const scoreCanvas =
    document.getElementById(
        "scoreChart"
    );

if (scoreCanvas) {

    new Chart(scoreCanvas, {

        type: "doughnut",

        data: {

            datasets: [{

                data: [78, 22],

                backgroundColor: [
                    "#22c55e",
                    "#1e293b"
                ],

                borderWidth: 0,

                circumference: 270,

                rotation: 225
            }]
        },

        options: {

            cutout: "75%",

            plugins: {

                legend: {

                    display: false
                }
            }
        }
    });
}







let riskChart = null;

function drawRiskGauge(score) {

    const riskCanvas =
        document.getElementById(
            "riskGauge"
        );

    if (!riskCanvas) return;

    if (riskChart) {

        riskChart.destroy();
    }

    riskChart = new Chart(riskCanvas, {

        type: "doughnut",

        data: {

            datasets: [{

                data: [
                    score,
                    100 - score
                ],

                backgroundColor: [
                    "#ef4444",
                    "#1e293b"
                ],

                borderWidth: 0,

                circumference: 270,

                rotation: 225
            }]
        },

        options: {

            cutout: "72%",

            plugins: {

                legend: {

                    display: false
                },

                tooltip: {

                    enabled: false
                }
            }
        }
    });
}







function analyzeURL() {

    let url =
        document
            .getElementById("urlInput")
            .value
            .toLowerCase();

    let score = 0;

    if (url.includes("login"))
        score += 30;

    if (url.includes("verify"))
        score += 30;

    if (url.includes("bank"))
        score += 20;

    if (url.includes("http://"))
        score += 20;

    let risk = "Safe";

    if (score >= 80)
        risk = "High Risk";
    else if (score >= 40)
        risk = "Medium Risk";

    document
        .getElementById("urlResult")
        .innerHTML =
        `
    <h2>${risk}</h2>
    <h3>${score}/100</h3>
    `;
}

function sendMessage() {

    let question =
        document
            .getElementById("chatInput")
            .value;

    let answer = "";

    if (question.includes("phishing")) {

        answer =
            "Phishing is a cyber attack used to steal passwords and personal data.";

    }

    else if (question.includes("ransomware")) {

        answer =
            "Ransomware encrypts your files and demands payment.";

    }

    else {

        answer =
            "Always use strong passwords and enable 2FA.";

    }

    document
        .getElementById("chatArea")
        .innerHTML +=
        `
    <div>
        <b>You:</b> ${question}
    </div>

    <div>
        <b>AI:</b> ${answer}
    </div>

    <hr>
    `;
}




const tips = [

    "Enable Two-Factor Authentication",

    "Use Strong Passwords",

    "Avoid Unknown Links",

    "Update Your Software",

    "Use Password Managers",

    "Never Share OTPs",

    "Check Email Senders Carefully"

];

let tipIndex = 0;

setInterval(() => {

    tipIndex++;

    if (tipIndex >= tips.length)
        tipIndex = 0;

    document
        .getElementById("tipText")
        .innerHTML =
        tips[tipIndex];

}, 5000);