def get_recommendations(issue):

    issue = issue.lower()

    if "hacked" in issue:
        return [
            "Change Password",
            "Enable 2FA",
            "Logout All Devices"
        ]

    if "phishing" in issue:
        return [
            "Avoid clicking links",
            "Report sender",
            "Delete email"
        ]

    return [
        "Keep software updated",
        "Use strong passwords"
    ]