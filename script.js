// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-analytics.js";
  import { getAuth ,
    signInWithEmailAndPassword,
     createUserWithEmailAndPassword ,
      onAuthStateChanged,
      signOut
  } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDKHFrrSDMakM5BA6zA7KeTyh9iwfM_hNA",
    authDomain: "sign-up-33555.firebaseapp.com",
    projectId: "sign-up-33555",
    storageBucket: "sign-up-33555.firebasestorage.app",
    messagingSenderId: "363700495101",
    appId: "1:363700495101:web:f0e1fc9da7097a7ad51494",
    measurementId: "G-19B73STSMG"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

let main = document.querySelector(".main")

let text = document.querySelector("#main")

let logout = document.querySelector(".logOut")
logout.addEventListener("click" , logOut)


let btn2 = document.querySelector(".anotherButton")

btn2.addEventListener("click" , btn2Clicked)

function btn2Clicked(){
    Signn.style.display = "none"
    logg.style.display = "flex"
}


// Sign up

let logg = document.querySelector(".login")
let Signn = document.querySelector(".Signup")
let signInEmail = document.querySelector("#SignInEmail")
let signInPass = document.querySelector("#SignInPassword")
let signInbtn = document.querySelector("#CreateAcc")
let incorrect = document.querySelector("#incorrect")
let signbtn = document.querySelector("#Signup")

signInbtn.addEventListener("click" , Signedin)
signbtn.addEventListener("click" , Signin)

function Signin(){

    logg.style.display = "none"

    Signn.style.display = "flex"

}

function Signedin(){
    createUserWithEmailAndPassword(auth, signInEmail.value,signInPass.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("account Successfully Created")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    incorrect.textContent = errorMessage
    incorrect.style.color = "red"
  });
}

// Login
let logInEmail = document.querySelector("#LogInEmail")
let logInPassword = document.querySelector("#LogInPassword")
let logIn = document.querySelector("#login")
let para = document.querySelector("#para")

logIn.addEventListener("click" , Login)


function Login(){

    signInWithEmailAndPassword(auth, logInEmail.value, logInPassword.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    alert("User Successfully Logged in")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    para.textContent = errorMessage
    para.style.color = "red"
  });

}



onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    main.style.display = "none"
    text.innerHTML = "You are logged in as " + user.email
    text.style.display = "flex"
    logout.style.display = "flex"
    // ...
  } else {
    // User is signed out
    // ...
    main.style.display = "flex"
    text.style.display = "none"
    logout.style.display = "none"
  }
});


function logOut(){
    const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
}