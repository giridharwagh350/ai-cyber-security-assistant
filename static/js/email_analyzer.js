function analyzeEmail(){

    const email =
    document.getElementById(
        "emailInput"
    ).value;

    let score = 0;

    const suspiciousWords = [

        "urgent",
        "verify",
        "account suspended",
        "click here",
        "bank account",
        "reset password"
    ];

    suspiciousWords.forEach(word => {

        if(
            email.toLowerCase()
            .includes(word)
        ){
            score += 15;
        }
    });

    document.getElementById(
        "riskScore"
    ).innerHTML = score;

    let level = "Safe";

    if(score > 70)
        level = "High Risk";

    else if(score > 30)
        level = "Medium Risk";

    document.getElementById(
        "riskLevel"
    ).innerHTML = level;
}