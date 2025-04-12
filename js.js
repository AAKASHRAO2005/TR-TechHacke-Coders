js
// script.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#career-form');
    const resultDiv = document.querySelector('#prediction-result');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const name = document.querySelector('#name').value.trim();
      const interests = document.querySelector('#interests').value.trim();
      const marks = parseInt(document.querySelector('#marks').value.trim());
  
      if (!name || !interests || isNaN(marks)) {
        resultDiv.innerHTML = "<span style='color: red;'>Please fill in all the fields correctly.</span>";
        return;
      }
  
      // Simple logic for frontend demo
      let suggestion = "";
  
      if (marks >= 85 && interests.includes("coding")) {
        suggestion = "Software Engineer, AI/ML Specialist, or Data Scientist";
      } else if (marks >= 70 && interests.includes("design")) {
        suggestion = "UI/UX Designer, Graphic Designer, or Product Designer";
      } else if (marks >= 60 && interests.includes("management")) {
        suggestion = "Project Manager, HR Specialist, or Business Analyst";
      } else {
        suggestion = "Explore skill-based certifications to find your fit. Try web development, digital marketing, or IT support.";
      }
  
      resultDiv.innerHTML = `
        <p>Hi <strong>${name}</strong>, based on your interests in <strong>${interests}</strong> and your academic score of <strong>${marks}%</strong>, we suggest:</p>
        <p style="font-size: 1.2rem; font-weight: bold; color: #2e8b57;">${suggestion}</p>
      `;
  
      form.reset();
    });
  });