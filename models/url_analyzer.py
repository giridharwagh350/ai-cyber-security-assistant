def analyze_url(url):

    risk_score = 0

    suspicious_keywords = [
        "login",
        "verify",
        "free",
        "gift",
        "bank"
    ]

    suspicious_domains = [
        ".xyz",
        ".tk",
        ".top"
    ]

    for word in suspicious_keywords:
        if word in url.lower():
            risk_score += 20

    for domain in suspicious_domains:
        if domain in url.lower():
            risk_score += 30

    return min(risk_score, 100)