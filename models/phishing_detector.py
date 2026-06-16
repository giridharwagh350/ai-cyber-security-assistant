def detect_phishing(email_text):

    suspicious_words = [
        "urgent",
        "verify",
        "click here",
        "account suspended",
        "login now",
        "bank account",
        "reset password"
    ]

    score = 0

    for word in suspicious_words:
        if word in email_text.lower():
            score += 1

    if score >= 4:
        return "HIGH RISK"

    elif score >= 2:
        return "MEDIUM RISK"

    return "SAFE"