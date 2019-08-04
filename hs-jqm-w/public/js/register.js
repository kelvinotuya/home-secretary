$(document).ready(function(){

    var config = {
         apiKey: "AIzaSyAHvlG-I05sZZ76xifOtastrQgLQmbpki0",
        authDomain: "home-secretary.firebaseapp.com",
        databaseURL: "https://home-secretary.firebaseio.com",
        projectId: "home-secretary",
        storageBucket: "home-secretary.appspot.com",
        messagingSenderId: "537494119939",
    };

    firebase.initializeApp(config);


    $("#registerBtn").click(function(){

        var email = $("#email").val();
        var password = $("#password").val();

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function(){

                firebase.auth().signInWithEmailAndPassword(email, password)
                    .then(function(){
                        window.location.href = "index.html";
                    })

            }).catch(function(error){
                alert(error.message);
        })

    })


})