# NutriBot 2.0 — Nutrition Agentic AI Application

> **Powered by IBM Granite LLM via watsonx.ai** — A full-stack Agentic AI nutrition planner with Flask, ethical guardrails, and a live chat assistant.

---

## 🌟 Overview

NutriBot 2.0 is a web-based Nutrition Agentic AI Application that:

- Collects user details (name, age, diet preference, medical history, location)
- Generates a **personalised 7-day nutrition plan** using IBM Granite LLM
- Applies **AI ethics, guardrails, and HAM principles** (Helpful, Accurate, Mindful)
- Includes an **agentic Q&A chat assistant** for follow-up questions
- Saves each nutrition plan as a downloadable **Markdown (.md) file**
- Displays a clear **medical disclaimer** on all generated plans

---

## 🏗️ Agentic AI SDLC Phases

| Phase | Description |
|---|---|
| **1. Perception** | User profile ingestion — name, age, diet, medical history, location |
| **2. Reasoning** | IBM Granite LLM analyses the profile with an ethically guided prompt |
| **3. Action** | Generates a 7-day meal plan + grocery list + lifestyle tips |
| **4. Reflection** | Guardrail post-processing — blocks harmful content, sanitises advice |
| **5. Response** | Structured HTML output + downloadable Markdown + Q&A chat |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Backend | Python 3.9+, Flask 3.x |
| AI Engine | IBM Granite (`ibm/granite-13b-instruct-v2`) via watsonx.ai |
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| Plan Export | Markdown (.md) file generation |
| Deployment | GitHub, Gunicorn (production) |

---

## 🚀 Quick Start (Windows)

### Option A — Double-click the `.bat` file (easiest)

```
run.bat
```

This will:
1. Check for Python
2. Create a virtual environment
3. Install all dependencies
4. Launch the Flask server at `http://127.0.0.1:5000`

### Option B — Manual setup

```bash
# 1. Clone the repository
git clone https://github.com/ankit-numpy/NutriAgent-2.0.git
cd NutriAgent-2.0

# 2. Create and activate virtual environment
python -m venv venv
venv\Scripts\activate          # Windows
# source venv/bin/activate     # macOS/Linux

# 3. Install dependencies
pip install -r requirements.txt

# 4. (Optional) Set IBM Granite credentials
set WATSONX_API_KEY=your_api_key_here
set WATSONX_PROJECT_ID=your_project_id_here
set WATSONX_URL=https://us-south.ml.cloud.ibm.com

# 5. Run the application
python app.py
```

Open your browser at **http://127.0.0.1:5000**

---

## 🔑 IBM Granite / watsonx.ai Configuration

The app works **out-of-the-box without credentials** using a built-in rule-based fallback plan generator. To enable the full IBM Granite LLM:

1. Create a free IBM Cloud account at [cloud.ibm.com](https://cloud.ibm.com)
2. Provision a **watsonx.ai** service instance
3. Create an **API key** from IAM → API keys
4. Note your **Project ID** from watsonx.ai

Set these as environment variables **before** running the app:

```bash
set WATSONX_API_KEY=<your_ibm_cloud_api_key>
set WATSONX_PROJECT_ID=<your_watsonx_project_id>
set WATSONX_URL=https://us-south.ml.cloud.ibm.com
```

Or create a `.env` file (never commit this to git):

```
WATSONX_API_KEY=your_key_here
WATSONX_PROJECT_ID=your_project_id_here
WATSONX_URL=https://us-south.ml.cloud.ibm.com
FLASK_SECRET_KEY=your_flask_secret
```

---

## 📁 Project Structure

```
NutriAgent-2.0/
├── app.py                  # Flask application entry point
├── agent.py                # NutritionAgent — IBM Granite + guardrails
├── requirements.txt        # Python dependencies
├── run.bat                 # Windows one-click launcher
├── README.md               # This file
├── .gitignore
├── templates/
│   ├── index.html          # User intake form
│   └── result.html         # Nutrition plan + chat widget
├── static/
│   ├── css/
│   │   └── style.css       # Full responsive stylesheet
│   └── js/
│       ├── main.js         # Form UX logic
│       └── chat.js         # Agentic chat assistant
└── plans/                  # Auto-generated .md nutrition plans
```

---

## 🛡️ AI Ethics & Guardrails

NutriBot 2.0 follows responsible AI principles:

- **HAM Principles** — Helpful, Accurate, Mindful tone in all responses
- **Harmful content filtering** — keyword-based pre/post-processing blocks dangerous advice
- **No medication prescriptions** — the agent explicitly avoids prescribing drugs
- **Medical disclaimer** — prominently displayed on every plan
- **Redirection** — off-topic or harmful queries are declined politely
- **Data privacy** — no user data is stored beyond the current session

---

## 🌐 API Endpoints

| Method | Route | Description |
|---|---|---|
| GET | `/` | Landing page & intake form |
| POST | `/generate` | Generate nutrition plan from form data |
| POST | `/chat` | Agentic Q&A — returns JSON `{reply: "..."}` |
| GET | `/download/<filename>` | Download generated `.md` plan |

---

## 📋 Requirements

- Python **3.9** or higher
- pip
- Internet access (for IBM Granite API calls; not required for fallback mode)

---

## ⚠️ Medical Disclaimer

This application is for **informational purposes only**. It does not constitute medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional or registered dietitian before making significant dietary changes, especially if you have existing medical conditions.

---

## 📄 License

MIT License — feel free to fork, modify, and build upon NutriBot 2.0.

---

*Built with ❤️ using IBM Granite LLM · Flask · Agentic AI SDLC*
