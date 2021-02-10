$(document).ready(function() {
    
    "use strict";
    
    $('.summernote').summernote({
	  height: 350
	});
    
    $('.date-picker').datepicker({
        orientation: "top auto",
        autoclose: true
    });
    
    $('#cp1').colorpicker({
        format: 'hex'
    });
    $('#cp2').colorpicker();
    
    var input = $('#timepicker1').clockpicker({
        placement: 'bottom',
        align: 'left',
        autoclose: true,
        'default': 'now'
    });



    document.getElementById("firebase-submit-button").onclick = function () { //Entering new Data

        // Quick setup
        var name = $("#name").val();
        var username = $("#username").val();
        var category = $("#category").find(":selected").text();
        var selectedCountry = $("#region").find(":selected").text();
        var tag = $("#tag").val();
        var input = $("#input").code();

        //Add data to firebase
        var database = firebase.database();
        var usersRef = database.ref("users"); //Users Tree

        if (name == "") {
            alert("Please enter your name!");
        }
        else {
            //Check if user exists first
            var userExists = database.ref("users/" + name);

            userExists.once("value")
                .then(function(userinDB){
                    if (userinDB.exists()){ //if username exists only create new category, update
                        var categoryExists = database.ref("users/" + name + "/Category/" + category);
                        
                        categoryExists.once("value")
                        .then(function(categoryinDB){
                            if (categoryinDB.exists()){ //if username exists only create new category, update
                                usersRef.child(name).child("Category").child(category).push({
                                    Country: selectedCountry,
                                    Tag: tag,
                                    UserComment: input,
                                });
                            }
                            else{
                                firebase.database().ref('users/' + name + '/Category/' + category).push({
                                    Country: selectedCountry,
                                    Tag: tag,
                                    UserComment: input,
                                }) 
                            }
                        });
                    }
                    else{//if not, create new
                        usersRef.child(name).child("Category").child(category).push({
                            Country: selectedCountry,
                            Tag: tag,
                            UserComment: input,
                        });  
                    }
                });
                // //Test data retrieval
                // console.log("name: ", name)
                // console.log("username: ", username)
                // console.log("category: ", category)
                // console.log("country: ", selectedCountry)
                // console.log("tag: ", tag)
                // console.log("input: ", input)
        }
    }

});