from flask import Flask, request, render_template, jsonify
import joblib
import numpy as np
import os

# Create Flask app first
app = Flask(__name__)

# Paths
BASE_DIR = os.path.abspath(os.path.dirname(__file__))
MODEL_PATH = os.path.join(BASE_DIR, "models", "fertilizer_model.pkl")

# Load model
model = joblib.load(MODEL_PATH)

# ---------------- Home Route ----------------
@app.route("/")
def home():
    return render_template("index.html")

# ---------------- Prediction Route ----------------
@app.route("/predict", methods=["POST"])
def predict():
    N = float(request.form["N"])
    P = float(request.form["P"])
    K = float(request.form["K"])
    pH = float(request.form["pH"])
    Moisture = float(request.form["Moisture"])

    input_features = np.array([[N, P, K, pH, Moisture]])
    prediction = model.predict(input_features)

    return render_template(
        "index.html",
        prediction_text=f"Recommended Fertilizer: {prediction[0]}"
    )

# ---------------- Chatbot Page ----------------
@app.route("/chatbot")
def chatbot_page():
    return render_template("chatbot.html")

# ---------------- Chatbot API ----------------
@app.route("/chatbot", methods=["POST"])
def chatbot_reply():
    data = request.get_json()
    msg = data["message"].lower()

    if "rice" in msg:
        reply = "Rice crop ki acre ki 100 kg Urea vadandi."
    elif "wheat" in msg:
        reply = "Wheat crop ki acre ki 90 kg Urea saripothundi."
    elif "dap" in msg:
        reply = "DAP sowing time lo vadali, acre ki 50 kg."
    else:
        reply = "Please fertilizer related questions matrame adugandi."

    return jsonify({"reply": reply})

# ---------------- Run ----------------
if __name__ == "__main__":
    app.run(debug=True)
