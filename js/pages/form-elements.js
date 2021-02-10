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



    document.getElementById("firebase-button").onclick = function () { 

        //Quick setup
        var name = $("#name").val();
        var username = $("#username").val();
        var category = $("#category").find(":selected").text();
        var selectedCountry = $("#region").find(":selected").text();
        var tag = $("#tag").val();
        var input = $("#input").code();

       //Test data retrieval
        // console.log(name)
        // console.log(username)
        // console.log(category)
        // console.log(selectedCountry)
        // console.log(tag)
        // console.log(input)

        //Add data to firebase

        var database = firebase.database();
        var resourcetable = database.ref('resources');
        resourcetable.push({
                name: name,
                username: username,
                category: category,
                selectedCountry: selectedCountry,
                tag: tag,
                input: input
            });
        


        
       


    
  
    
    }


});