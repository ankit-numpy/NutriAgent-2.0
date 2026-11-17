@echo off
title NutriBot 2.0 — Nutrition Agentic AI Application
color 0A

echo.
echo  =========================================================
echo    NutriBot 2.0 — Nutrition Agentic AI Application
echo    Powered by IBM Granite LLM   ^|   Flask 3.x
echo  =========================================================
echo.

:: ── Check Python ──────────────────────────────────────────
python --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Python is not installed or not on PATH.
    echo         Please install Python 3.9+ from https://python.org
    echo         Make sure to tick "Add Python to PATH" during install.
    pause
    exit /b 1
)

echo [1/4] Python detected.

:: ── Create virtual environment if not present ─────────────
if not exist "venv\" (
    echo [2/4] Creating virtual environment...
    python -m venv venv
    if errorlevel 1 (
        echo [ERROR] Failed to create virtual environment.
        pause
        exit /b 1
    )
) else (
    echo [2/4] Virtual environment already exists.
)

:: ── Activate venv ─────────────────────────────────────────
echo [3/4] Activating virtual environment...
call venv\Scripts\activate.bat

:: ── Install / upgrade dependencies ────────────────────────
echo [4/4] Installing / verifying dependencies...
pip install -r requirements.txt --quiet --upgrade
if errorlevel 1 (
    echo [ERROR] Dependency installation failed.
    pause
    exit /b 1
)

:: ── Optional: set IBM Granite credentials ─────────────────
:: Uncomment and fill in your credentials to use IBM Granite:
:: set WATSONX_API_KEY=your_ibm_cloud_api_key_here
:: set WATSONX_PROJECT_ID=your_watsonx_project_id_here
:: set WATSONX_URL=https://us-south.ml.cloud.ibm.com

:: ── Launch Flask app ───────────────────────────────────────
echo.
echo  =========================================================
echo    Starting NutriBot 2.0...
echo    Open your browser at:  http://127.0.0.1:5000
echo    Press CTRL+C to stop the server
echo  =========================================================
echo.

set FLASK_APP=app.py
set FLASK_DEBUG=true
python app.py

:: ── Keep window open on crash ──────────────────────────────
if errorlevel 1 (
    echo.
    echo [ERROR] Application exited with an error.
    pause
)
