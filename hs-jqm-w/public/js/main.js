$(document).ready(function(){

    var config = {
        var firebaseConfig = {
    apiKey: "AIzaSyC8QKBjqv_wv_ViIYNrxnRMPjNublFVtlg",
    authDomain: "home-secretary-6309c.firebaseapp.com",
    databaseURL: "https://home-secretary-6309c.firebaseio.com",
    projectId: "home-secretary-6309c",
    storageBucket: "    ",
    messagingSenderId: "140100657656",
    appId: "1:140100657656:web:c06fe7af584b5fd1"
  };
  // Initialize Firebase,
    };
    firebase.initializeApp(config);

    var current_user = "";

    firebase.auth().onAuthStateChanged(function(user){

        if(user){

            current_user = user.uid;

            $(".user-text").text(user.email);

            $("#logout").click(function(){

                firebase.auth().signOut()
                    .then(function(){
                        window.location.href = "#login";
                    })
            })


            $(".sendToFireBase").click(function(){

                var item = $("#item").val();
                var description = $("#description").val();
                 var datepicker = $("#datepicker").val();
                  var time_1 = $("#time-1").val();
                  var slider-flip-m = $("#slider-flip-m").val();

                console.log('Running');  

                firebase.database().ref().child("users").child(current_user).child("todos").push(
                    {
                        item : item,
                        description : description,
                        date : date,
                        time : time,
                        completed : false
                    }
                );

                $("#item").val('');
                $("#description").val('');
                $("#datepicker").val();
                $("#time-1").val();
                $("#slider-flip-m").val();
            })

            var todoRef = firebase.database().ref().child("users/" + current_user).child("todos");
            todoRef.on("value", function(snapshot){

                var $parent = $(".todoList").children("tbody");

                $parent.html('');

                snapshot.forEach(function(item){

                    var completed = item.val().completed == true ? "checked" : "";

                    var description_elem = "<td>" + item.val().description + "</td>";
                    var completed_elem = "<td class='text-center'><input data-key='" + item.key + "' type='checkbox' class='switchery-plugin' " + completed + "/></td>";
                    var removeBtn_elem = "<td class='text-center'><button data-key='" + item.key + "' class='btn btn-danger btn-block removeBtn'>Delete</button></td>";

                    $parent.append("<tr>" + description_elem + completed_elem + removeBtn_elem + "</tr>");

                })

                $(".switchery-plugin").each(function(){
                    new Switchery(this);
                })
            });


            $("body").on("click", ".removeBtn", function(){

                var $key = $(this).data("key");

                firebase.database().ref("users/" + current_user).child("todos").child($key).remove();

            });


            $("body").on("change", ".switchery-plugin", function(){

                var $completed = $(this).prop("checked");

                var $key = $(this).data("key");

                firebase.database().ref("users/" + current_user).child("todos").child($key).child("completed").set($completed);







            })


        }

    })

})