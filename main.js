 // Initialize Firebase
var config = {
    apiKey: "AIzaSyCyNK7zRu4iTYnDTUdD_c7GQl3_wHR_CqI",
    authDomain: "contact-form-b2e41.firebaseapp.com",
    databaseURL: "https://contact-form-b2e41.firebaseio.com",
    projectId: "contact-form-b2e41",
    storageBucket: "contact-form-b2e41.appspot.com",
    messagingSenderId: "496438365265"
  };
  firebase.initializeApp(config);

let info = firebase.database().ref('info');

//Listen for form Submit
document.getElementById('contact-form').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();
    
    let name = getInput('name');
    let company = getInput('company');
    let email = getInput('email');
    let phone = getInput('phone');
    let message = getInput('message');

    //save to firebase
    save(name, company, email, phone, message);
    document.querySelector('.alert').style.display = "block"
    setTimeout(function(){
        document.querySelector('.alert').className = "fade"
        document.getElementById('contact-form').reset(); 
    }, 2000);

    
}

//get form val
function getInput(id){
    return document.getElementById(id).value;
}

//save info fo firebase
function save(name, company, email, phone, message){
    let newInfo = info.push();    
    
    newInfo.set({
        name,
        company,
        email,
        phone,
        message
    })
}

