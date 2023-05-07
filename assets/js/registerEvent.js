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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authentication = getAuth();
import { getAuth } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
const realdb = getDatabase();

let visa = document.getElementsByName("visa");
let letter = document.getElementsByName("letter");
let means = document.getElementById("means");
let loader = document.getElementById("loader");
let register = document.getElementById("register");
let registerForm = document.getElementById("register-form");
let data = window.sessionStorage.getItem("user");
let userData = JSON.parse(data);

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  register.style.display = "none";
  loader.style.display = "block";
  if (!validation()) {
    register.style.display = "block";
    loader.style.display = "none";
  } else {
    registerProcess();
  }
});

const validation = () => {
  if (visa.value === "") {
    setErrorFor(visa, "Cannot be empty");
  }
  if (letter.value === "") {
    setErrorFor(letter, "Cannot be empty");
  }
  if (means.value === "") {
    setErrorFor(means, "Cannot be empty");
  }
  return true;
};
const clearInputs = () => {
  visa.value = "";
  letter.value = "";
  means.value = "";
};

const registerProcess = (e) => {
  const dbRef = ref(realdb);
  // sessionStorage.setItem("Auth Token", response._tokenResponse.refreshToken);
  get(child(dbRef, "events/" + userData.id)).then((snapshot) => {
    if (snapshot.exists()) {
      alert("You already applied for this Event");
    } else {
      let visaValue;
      let letterValue;
      for (let i = 0; i < visa.length; i++) {
        if (visa[i].checked) visaValue = visa[i].value;
      }
      for (let i = 0; i < letter.length; i++) {
        if (letter[i].checked) letterValue = letter[i].value;
      }
      set(ref(realdb, "events/" + userData.id), {
        id: userData.id,
        fName: userData.fName,
        lName: userData.lName,
        email: userData.email,
        gender: userData.gender,
        country: userData.country,
        contact: userData.contact,
        convention: userData.convention,
        church: userData.church,
        visa: visaValue,
        letter: letterValue,
        means: means.value,
      })
        .then(() => {
          clearInputs();
          alert("Registered Successfully");
          window.scrollTo(0, 1);
          register.style.display = "block";
          loader.style.display = "none";
        })
        .catch((error) => {
          alert("Something went wrong!!! Try again");
        });
      //   window.location.href = "login.html";
    }
  });
};

function setErrorFor(input, message) {
  let forms = input.parentElement.parentElement;

  forms.classList = "form-group error";
  let small = forms.querySelector("small");
  small.innerText = message;
}
