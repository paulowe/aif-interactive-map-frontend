$( document ).ready(function() {

    "use strict";
    // Store currentRegion
    var map;
    var currentRegion = [];
    var enabledRegions = [];
    var codeMap = {
      "Bangladesh": "bd",
      "Belgium": "be",
      "Burkina Faso": "bf",
      "Bulgaria": "bg",
      "Bosnia and Herzegovina": "ba",
      "Brunei": "bn",
      "Bolivia": "bo",
      "Japan": "jp",
      "Burundi": "bi",
      "Benin": "bj",
      "Bhutan": "bt",
      "Jamaica": "jm",
      "Botswana": "bw",
      "Brazil": "br",
      "Bahamas": "bs",
      "Belarus": "by",
      "Belize": "bz",
      "Russia": "ru",
      "Rwanda": "rw",
      "Serbia": "rs",
      "Timor-Leste": "tl",
      "Turkmenistan": "tm",
      "Tajikistan": "tj",
      "Romania": "ro",
      "Guinea-Bissau": "gw",
      "Guatemala": "gt",
      "Greece": "gr",
      "Equitorial Guinea": "gq",
      "Guyana": "gy",
      "Georgia": "ge",
      "United Kingdom": "gb",
      "Gabon": "ga",
      "Guinea": "gn",
      "Gambia": "gm",
      "Greenland": "gl",
      "Ghana": "gh",
      "Oman": "om",
      "Tunisia": "tn",
      "Jordan": "jo",
      "Croatia": "hr",
      "Haiti": "ht",
      "Hungary": "hu",
      "Honduras": "hn",
      "Puerto Rico": "pr",
      "Palestine": "ps",
      "Portugal": "pt",
      "Paraguay": "py",
      "Panama": "pa",
      "Papua New Guinea": "pg",
      "Peru": "pe",
      "Pakistan": "pk",
      "Philippines": "ph",
      "Poland": "pl",
      "Zambia": "zm",
      "W. Sahara": "eh",
      "Estonia": "ee",
      "Egypt": "eg",
      "South Africa": "za",
      "Ecuador": "ec",
      "Italy": "it",
      "Vietnam": "vn",
      "Solomon Is": "sb",
      "Ethiopia": "et",
      "Somalia": "so",
      "Zimbabwe": "zw",
      "Spain": "es",
      "Eritrea": "er",
      "Montenegro": "me",
      "Moldova": "md",
      "Madagascar": "mg",
      "Morocco": "ma",
      "Uzbekistan": "uz",
      "Myanmar": "mm",
      "Mali": "ml",
      "Mongolia": "mn",
      "Macedonia": "mk",
      "Malawi": "mw",
      "Mauritania": "mr",
      "Uganda": "ug",
      "Malaysia": "my",
      "Mexico": "mx",
      "Israel": "il",
      "France": "fr",
      "Somaliland": "xs",
      "Finland": "fi",
      "Fiji": "fj",
      "Falkland": "fk",
      "Nicaragua": "ni",
      "Netherlands": "nl",
      "Norway": "no",
      "Namibia": "na",
      "Vanuatu": "vu",
      "New Caledonia": "nc",
      "Niger": "ne",
      "Nigeria": "ng",
      "New Zealand": "nz",
      "Nepal": "np",
      "Kosovo": "xk",
      "Ivory Coast": "ci",
      "Switzerland": "ch",
      "Colombia": "co",
      "China": "cn",
      "Cameroon": "cm",
      "Chile": "cl",
      "N. Cyprus": "xc",
      "Canada": "ca",
      "Congo": "cg",
      "Central African Republic": "cf",
      "Democratic Republic of Congo": "cd",
      "Czech Republic": "cz",
      "Cyprus": "cy",
      "Costa Rica": "cr",
      "Cuba": "cu",
      "Swaziland": "sz",
      "Syria": "sy",
      "Kyrgyzstan": "kg",
      "Kenya": "ke",
      "South Sudan": "ss",
      "Suriname": "sr",
      "Cambodia": "kh",
      "El": "sv",
      "Slovakia": "sk",
      "Korea": "kr",
      "Slovenia": "si",
      "Kuwait": "kw",
      "Senegal": "sn",
      "Sierra": "sl",
      "Kazakhstan": "kz",
      "Saudi Arabia": "sa",
      "Sweden": "se",
      "Sudan": "sd",
      "Dominican Republic": "do",
      "Djibouti": "dj",
      "Denmark": "dk",
      "Germany": "de",
      "Yemen": "ye",
      "Algeria": "dz",
      "United States": "us",
      "Uruguay": "uy",
      "Lebanon": "lb",
      "Lao PDR": "la",
      "Taiwan": "tw",
      "Trinidad and Tobago": "tt",
      "Turkey": "tr",
      "Sri Lanka": "lk",
      "Latvia": "lv",
      "Lithuania": "lt",
      "Luxembourg": "lu",
      "Liberia": "lr",
      "Lesotho": "ls",
      "Thailand": "th",
      "Fr. S. Antarctic Lands": "tf",
      "Togo": "tg",
      "Chad": "td",
      "Libya": "ly",
      "United Arab Emirates": "ae",
      "Venezuela": "ve",
      "Afghanistan": "af",
      "Iraq": "iq",
      "Iceland": "is",
      "Iran": "ir",
      "Armenia": "am",
      "Albania": "al",
      "Angola": "ao",
      "Argentina": "ar",
      "Australia": "au",
      "Austria": "at",
      "India": "in",
      "Tanzania": "tz",
      "Azerbaijan": "az",
      "Ireland": "ie",
      "Indonesia": "id",
      "Ukraine": "ua",
      "Qatar": "qa",
      "Mozambique": "mz"
  }

  map = jQuery('#vmap').vectorMap({
        map: 'world_en',
        backgroundColor: '#fff',
        borderColor: '#fff',
        borderOpacity: 0.3,
        borderWidth: 1,
        color: '#778899',
        colors: colors,
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
            // It runs the code below if code is not an Enabled Region
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

      //shortcut for accessing each country's DOM object

      var x = document.getElementById("canada");
      var y = document.getElementById("india");
      var z = document.getElementById("brazil");
      var t = document.getElementById("Tanzania")
     
      //hide data for all unselected countries

      //Canada

      if(map.selectedRegions.indexOf("ca") !== -1) {  x.style.display = "block";   }
    
      else {  x.style.display = "none"; };

      //India

      if(map.selectedRegions.indexOf("in") !== -1) {  y.style.display = "block";   }
    
      else {  y.style.display = "none"; };

      //Brazil

      if(map.selectedRegions.indexOf("br") !== -1) {  z.style.display = "block";   }
    
      else {  z.style.display = "none"; };

      //Tanzania
      if(map.selectedRegions.indexOf("tz") !== -1) {  t.style.display = "block";   }
    
      else {  t.style.display = "none"; };


  
  }
  
//Load Climate data
var data = [{'resource1': {'country': 'Tanzania',
'input':'This is sample input Tanzania'}
}, {'resource2': {'country': 'Kenya',
'input':'This is sample input Kenya'}
}]


//dynamically update enabled regions and create a list of div objects based on data from the database 
var colors = {}
$.each(data, function(index, resourceObject){
  $.each(resourceObject, function(objectId, objectcontents){

      let div = document.createElement('div');
      div.className = "modal-body"
      div.id = objectcontents.country
      //update enabled regions on data-fetch
      enabledRegions.push(codeMap[objectcontents.country])
      //end update

      //update active colors
      colors[codeMap[objectcontents.country]] = '#2E8B57'
      
      div.innerHTML = objectcontents.input
      var element = document.getElementById('data-list');
      element.appendChild(div)
      //console.log(objectcontents.input);
      console.log("key: "+objectcontents.country+" ; Value : "+objectcontents.input);
      console.log(enabledRegions)
      


});
});

jQuery('#vmap').vectorMap('set', 'colors', colors);
console.log(colors)





//Populate data on map
//document.getElementById("canada-info").innerHTML = input;


});

 
 

  
