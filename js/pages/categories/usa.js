$( document ).ready(function() {

    "use strict";

    jQuery('#vmap').vectorMap({
        map: 'usa_en',
        backgroundColor: '#F5F5F5',
        borderColor: '#fff',
        borderOpacity: 0.25,
        borderWidth: 1,
        color: '#8B6071',
        enableZoom: true,
        hoverColor: '#99f7f7',
        hoverOpacity: null,
        normalizeFunction: 'linear',
        scaleColors: ['#b6d6ff', '#005ace'],
        selectedColor: '#99c8f3',
        selectedRegion: null,
        showTooltip: true,
      
        markers: [
            {latLng: [41.90, 12.45], name: 'Vatican City'},
            {latLng: [43.73, 7.41], name: 'Monaco'},
            {latLng: [-0.52, 166.93], name: 'Nauru'},
            {latLng: [-8.51, 179.21], name: 'Tuvalu'}
        ]

    });

  });
