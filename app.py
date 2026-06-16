from flask import Flask, render_template

# Create Flask app
app = Flask(__name__)

# Dashboard Route
@app.route("/")
def dashboard():
    return render_template("dashboard.html")

# Email Analyzer Route
@app.route("/email")
def email():
    return render_template("email_analyzer.html")

# URL Analyzer Route
@app.route("/url")
def url():
    return render_template("url_analyzer.html")

# Chatbot Route
@app.route("/chatbot")
def chatbot():
    return render_template("chatbot.html")

# Reports Route
@app.route("/reports")
def reports():
    return render_template("reports.html")

# Settings Route
@app.route("/settings")
def settings():
    return render_template("settings.html")

# Run Application
if __name__ == "__main__":
    app.run(debug=True)