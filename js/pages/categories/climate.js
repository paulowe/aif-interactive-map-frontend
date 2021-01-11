$( document ).ready(function() {

    "use strict";
    // Store currentRegion
    var map;
    var currentRegion = [];
    
    var enabledRegions = ['in', 'ca', 'br'];
    var show;
  map = jQuery('#vmap').vectorMap({
        map: 'world_en',
        backgroundColor: '#fff',
        borderColor: '#fff',
        borderOpacity: 0.3,
        borderWidth: 1,
        color: '#778899',
        colors: {in: '#2E8B57', ca: '#2E8B57', br: '#2E8B57'},
        enableZoom: true,
        hoverColor: null,
        hoverOpacity: null,
        normalizeFunction: 'linear',
        multiSelectRegion: true,
        scaleColors: ['#b6d6ff', '#005ace'],
        selectedColor: '#00FF00',
        selectedRegions: null,
        showTooltip: true,
        onRegionClick: function(element, code, region) {
          // Check if this is an Enabled Region, and not the current selected on
          if(enabledRegions.indexOf(code) === -1 || currentRegion === code){
            // Not an Enabled Region
            element.preventDefault();
          } else {
            // Enabled Region. Update Newly Selected Region.
            if (currentRegion.includes(code) === true){
            currentRegion.push(code);
            return currentRegion
            }
          }



        },
        
       


        onRegionSelect: function(event, code, region){
          console.log(map.selectedRegions);
        },
        onLabelShow: function(event, label, code){
          if(enabledRegions.indexOf(code) === -1){
            event.preventDefault();
          }
        }

    });

    
    document.getElementById("buttonid").onclick = function () { 

      //Quick setup

      var x = document.getElementById("canada");
      var y = document.getElementById("india");
      var z = document.getElementById("brazil");
     
      //Canada

      if(map.selectedRegions.indexOf("ca") !== -1) {  x.style.display = "block";   }
    
      else {  x.style.display = "none"; };

      //India

      if(map.selectedRegions.indexOf("in") !== -1) {  y.style.display = "block";   }
    
      else {  y.style.display = "none"; };

      //Brazil

      if(map.selectedRegions.indexOf("br") !== -1) {  z.style.display = "block";   }
    
      else {  z.style.display = "none"; };


  
  }
  });

  show = jQuery('#show').vectorMap({
    show: function(){
      console.log("I got here")
      
  
    }
    

  })

 

  
