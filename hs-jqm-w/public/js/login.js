$(document).ready(function(){
// Home Secretary web app's Firebase configuration settings initialized to config variable
    var config = {
    apiKey: "AIzaSyC8QKBjqv_wv_ViIYNrxnRMPjNublFVtlg",
    authDomain: "home-secretary-6309c.firebaseapp.com",
    databaseURL: "https://home-secretary-6309c.firebaseio.com",
    projectId: "home-secretary-6309c",
    storageBucket: "",
    messagingSenderId: "140100657656",
    appId: "1:140100657656:web:c06fe7af584b5fd1"
  };
  // Initialize Firebase,
  

    };

    firebase.initializeApp(config);


    $("#loginBtn").click(function(){

        var email = $("#email").val();
        var password = $("#password").val();

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(function(){
                window.location.href = "index.html";
            }).catch(function(error){
                alert(error.message);
        })


    })

})