// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUAe8BScLZ6DTiXL67BVbOqNLc40y2oig",
  authDomain: "aabyf-b0abc.firebaseapp.com",
  projectId: "aabyf-b0abc",
  storageBucket: "aabyf-b0abc.appspot.com",
  messagingSenderId: "488273157568",
  appId: "1:488273157568:web:592e262663fa1bd971bc25",
};

const app = initializeApp(firebaseConfig);
const authentication = getAuth();
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import { getDatabase, ref, child, get } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
const realdb = getDatabase();
let email = document.getElementById("email");
let password = document.getElementById("password");
let data;

let login = document.getElementById("login-form");
let loginBtn = document.getElementById("login-btn");
let loader = document.getElementById("loader");
login.addEventListener("submit", (e) => {
  e.preventDefault();
  loginBtn.style.display = "none";
  loader.style.display = "block";
  loginProcess();
});
const clearInputs = () => {
  email.value = "";
  password.value = "";
};

const loginProcess = (e) => {
  signInWithEmailAndPassword(authentication, email.value, password.value)
    .then((response) => {
      sessionStorage.setItem("Auth Token", response._tokenResponse.refreshToken);
      const dbRef = ref(realdb);
      get(child(dbRef, "users/")).then((snapshot) => {
        if (snapshot.exists()) {
          data = snapshot.val();
          Object.entries(data).filter((e) => {
            if (e[1].email === email.value) {
              window.sessionStorage.setItem("user", JSON.stringify(e[1]));
              window.location.href = "dashboard.html";
              clearInputs();
              loginBtn.style.display = "block";
              loader.style.display = "none";
            }
          });
        }
      });
    })
    .catch((error) => {
      console.log(error.code);
      loginBtn.style.display = "block";
      loader.style.display = "none";
      if (error.code === "auth/wrong-password") {
        alert("Please check the Password");
      }
      if (error.code === "auth/user-not-found") {
        alert("Please check the Email");
      }
    });
};
