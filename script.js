import { initializeApp } from "firebase/app";
import { 
  getFirestore, collection, onSnapshot, 
  query, where, doc, setDoc, getDocs
 } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDe5dIwBzxzQCdhzEd3fDalUAZOa2XfN98",
  authDomain: "retsepti-otsing.firebaseapp.com",
  projectId: "retsepti-otsing",
  storageBucket: "retsepti-otsing.appspot.com",
  messagingSenderId: "785004635704",
  appId: "1:785004635704:web:d07c2c4ede31355419e8cd",
  measurementId: "G-Q69DDSKV5J"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const kuvar = document.getElementById("kuvar");

// Init service
const db = getFirestore();


// Queries ---this should work!
//const q = query(col, where("õun", "==", "true"))
//const q = query(col, where("munad", "==", "true"))


// Get to Collection
const col = collection(db, 'retseptid');

// SEARCH -------------------------

const oun = document.querySelector('.oun');
const munad = document.querySelector('.munad');
const hakkliha = document.querySelector('.hakkliha');

if (oun){
  oun.addEventListener("click", function() {
    // Query filter what we search
    const q = query(col, where("õun", "==", "true"));
      
    // Get collection data
    onSnapshot(q, (snapshot) => {
      let retseptid = [];
      snapshot.docs.forEach((doc) => {
        retseptid.push({ ...doc.data(), id: doc.id });
      });
      console.log(retseptid);
    });
  });
}
if (munad){
  munad.addEventListener("click", function() {
    // Query filter what we search
    const q = query(col, where("munad", "==", "true"));
      
    // Get collection data
    onSnapshot(q, (snapshot) => {
      let retseptid = [];
      snapshot.docs.forEach((doc) => {
        retseptid.push({ ...doc.data(), id: doc.id });
      });
      console.log(retseptid);
    });
  });
}

if (hakkliha){
  hakkliha.addEventListener("click", function() {
    // Query filter what we search
    const q = query(col, where("hakkliha", "==", "true"));
    const kuvar = document.querySelector('.kuvar');
      
    // Get collection data
    onSnapshot(q, (snapshot) => {
      let retseptid = [];
      snapshot.docs.forEach((doc) => {
        retseptid.push({ ...doc.data(), id: doc.id });
        
      });
      //create element and display

      const newDiv = document.createElement("div");

      // and give it some content
      const newContent = document.createTextNode(retseptid);

      // add the text node to the newly created div
      newDiv.appendChild(newContent);

      kuvar.appendChild(newDiv);

      console.log(retseptid);
    });
  });
}


// Display data
/*
const search = document.querySelector('.search');

search.addEventListener("click", function(){
    const optionEl = document.createElement('div');
    optionEl.textContent = retseptid;
});*/
//------------------------------------

console.log("Hello. It works");
