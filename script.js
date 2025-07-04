document.addEventListener("DOMContentLoaded", () => {
    const signupPage = document.getElementById("signupPage");
    const loginPage = document.getElementById("loginPage");
    const botContainer = document.getElementById("botContainer");
  
    const user = localStorage.getItem("user");
    if (!user) {
      signupPage.style.display = "flex";
    } else {
      loginPage.style.display = "flex";
    }
  });
  
  function signup() {
    const username = document.getElementById("signupUsername").value;
    const password = document.getElementById("signupPassword").value;
  
    if (username && password) {
      localStorage.setItem("user", JSON.stringify({ username, password }));
      alert("Signup successful! Please log in.");
      document.getElementById("signupPage").style.display = "none";
      document.getElementById("loginPage").style.display = "flex";
    } else {
      alert("Please enter both fields.");
    }
  }
  
  function login() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
    const user = JSON.parse(localStorage.getItem("user"));
  
    if (user && username === user.username && password === user.password) {
      document.getElementById("loginPage").style.display = "none";
      document.getElementById("botContainer").style.display = "block";
      loadBot();
    } else {
      alert("Invalid login credentials.");
    }
  }
  
  function loadBot() {
    const script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v3.0/inject.js";
    document.body.appendChild(script1);
  
    const script2 = document.createElement("script");
    script2.src = "https://files.bpcontent.cloud/2025/06/22/16/20250622161432-7ZZEKLVG.js";
    document.body.appendChild(script2);
  }