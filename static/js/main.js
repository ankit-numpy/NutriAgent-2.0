/**
 * NutriBot 2.0 — main.js
 * Handles form UX: loading state, checkbox "None" mutual exclusion
 */

document.addEventListener("DOMContentLoaded", function () {

  /* ── Form loading spinner ── */
  const form      = document.getElementById("intakeForm");
  const submitBtn = document.getElementById("submitBtn");
  const btnText   = document.getElementById("btnText");
  const btnLoading = document.getElementById("btnLoading");

  if (form) {
    form.addEventListener("submit", function (e) {
      if (!form.checkValidity()) return;
      btnText.classList.add("hidden");
      btnLoading.classList.remove("hidden");
      submitBtn.disabled = true;
    });
  }

  /* ── "None / Healthy" deselects all other checkboxes ── */
  const cbNone = document.getElementById("cb-none");
  const cbOthers = Array.from(
    document.querySelectorAll('input[name="medical_history"]')
  ).filter(cb => cb !== cbNone);

  if (cbNone) {
    cbNone.addEventListener("change", function () {
      if (this.checked) {
        cbOthers.forEach(cb => { cb.checked = false; });
      }
    });
    cbOthers.forEach(cb => {
      cb.addEventListener("change", function () {
        if (this.checked && cbNone) cbNone.checked = false;
      });
    });
  }

  /* ── Smooth scroll to form card if error ── */
  const alertEl = document.querySelector(".alert-error");
  if (alertEl) {
    alertEl.scrollIntoView({ behavior: "smooth", block: "center" });
  }
});
