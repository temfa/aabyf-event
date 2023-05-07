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
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
const realdb = getDatabase();

let fName = document.getElementById("first-name");
let lName = document.getElementById("last-name");
let email = document.getElementById("email");
let gender = document.getElementsByName("gender");
let country = document.getElementById("country");
let contact = document.getElementById("contact");
let convention = document.getElementById("convention");
let church = document.getElementById("church");
// let visa = document.getElementsByName("visa");
let password = document.getElementById("password");
// let letter = document.getElementsByName("letter");
// let means = document.getElementById("means");
let loader = document.getElementById("loader");
let register = document.getElementById("register");
let registerForm = document.getElementById("register-form");

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
  let productRegex = /^[0-9]+$/;
  let numberRegex = /^[a-zA-Z]+$/;
  if (fName.value === "") {
    setErrorFor(fName, "First name cannot be empty");
  } else if (productRegex.test(fName.value)) {
    setErrorFor(fName, "First Name can only be alphabelt");
  }
  if (lName.value === "") {
    setErrorFor(lName, "Last name cannot be empty");
  } else if (productRegex.test(lName.value)) {
    setErrorFor(lName, "Last Name can only be alphabelt");
  }
  if (email.value === "") {
    setErrorFor(email, "Email cannot be empty");
  } else if (productRegex.test(email.value)) {
    setErrorFor(email, "Email can only be alphabelt");
  }
  if (country.value === "") {
    setErrorFor(country, "Country cannot be empty");
  } else if (productRegex.test(country.value)) {
    setErrorFor(country, "Country can only be alphabelt");
  }
  if (contact.value === "") {
    setErrorFor(contact, "Contact cannot be empty");
  } else if (numberRegex.test(contact.value)) {
    setErrorFor(contact, "Contact can only be numbers");
  }
  if (convention.value === "") {
    setErrorFor(convention, "Convention cannot be empty");
  } else if (productRegex.test(convention.value)) {
    setErrorFor(convention, "Convention can only be alphabelt");
  }
  if (church.value === "") {
    setErrorFor(church, "Church cannot be empty");
  } else if (productRegex.test(church.value)) {
    setErrorFor(church, "Church can only be alphabelt");
  }
  if (password.value === "") {
    setErrorFor(password, "Password cannot be empty");
  }

  //   if (visa.value === "") {
  //     setErrorFor(visa, "Cannot be empty");
  //   }
  //   if (letter.value === "") {
  //     setErrorFor(letter, "Cannot be empty");
  //   }
  //   if (means.value === "") {
  //     setErrorFor(means, "Cannot be empty");
  //   }
  return true;
};
const clearInputs = () => {
  fName.value = "";
  lName.value = "";
  email.value = "";
  country.value = "";
  contact.value = "";
  convention.value = "";
  church.value = "";
  //   visa.value = "";
  //   letter.value = "";
  //   means.value = "";
  password.value = "";
};

const registerProcess = (e) => {
  createUserWithEmailAndPassword(authentication, email.value, password.value)
    .then((response) => {
      // sessionStorage.setItem("Auth Token", response._tokenResponse.refreshToken);
      let genderValue;
      //   let visaValue;
      //   let letterValue;
      for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) genderValue = gender[i].value;
      }
      //   for (let i = 0; i < visa.length; i++) {
      //     if (visa[i].checked) visaValue = visa[i].value;
      //   }
      //   for (let i = 0; i < letter.length; i++) {
      //     if (letter[i].checked) letterValue = letter[i].value;
      //   }
      set(ref(realdb, "users/" + response.user.uid), {
        id: response.user.uid,
        fName: fName.value,
        lName: lName.value,
        email: email.value,
        gender: genderValue,
        country: country.value,
        password: password.value,
        contact: contact.value,
        convention: convention.value,
        church: church.value,
        // visa: visaValue,
        // letter: letterValue,
        // means: means.value,
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
    })
    .catch((error) => {
      register.style.display = "block";
      loader.style.display = "none";
      if (error.code === "auth/email-already-in-use") {
        alert("Email Already in Use");
      }
      if (error.code === "auth/weak-password") {
        alert("You have a weak password");
      }
    });
};

function setErrorFor(input, message) {
  let forms = input.parentElement.parentElement;

  forms.classList = "form-group error";
  let small = forms.querySelector("small");
  small.innerText = message;
}
