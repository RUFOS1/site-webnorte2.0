document.addEventListener("DOMContentLoaded", function() {
    var mymap = L.map('mapid', {
        center: [-10.67, -62.34],
        zoom: 9,
        maxZoom: 19,
        minZoom: 6,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        tap: false,
        touchZoom: false
    }).setView([-10.67, -62.34], 9);

    // Adicionar camada de mapa base (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        minZoom: 6
    }).addTo(mymap);

    // Coordenadas dos marcadores
    var markers = [
        { 
            coords: [-10.915647958142603, -62.55632250186501], 
            popupText: "<div style='font-size: 16px;'><b>Nova União - RO</b><br><a href='https://www.google.com/maps/place/WEB+NORTE+TELECOM/@-10.9156979,-62.5564065,15z/data=!4m2!3m1!1s0x0:0xaad43629adfdc36' target='_blank'>Ver no Google Maps</a></div>"
        },
        { 
            coords: [-10.4287243, -62.1300659], 
            
            popupText: "<div style='font-size: 16px;'><b>Vale do Paraíso - RO</b><br><a href='https://www.google.com/maps/search/Avenida%20Paran%C3%A1%2C%204362/@-10.4287242889404,-62.1300659179688,17z' target='_blank'>Ver no Google Maps</a></div>"
        },
        { 
            coords: [-10.51229821894904, -62.000048249304605],
            popupText: "<div style='font-size: 16px;'><b>Rondominas - RO</b><br></div>"
        },
        { 
            coords: [-10.315499841056575, -62.24017480820165],
            popupText: "<div style='font-size: 16px;'><b>Bom Jesus - RO</b><br></div>"
        },
        { 
            coords: [-10.197433174669198, -62.019792411976816],
            popupText: "<div style='font-size: 16px;'><b>Santa Rosa - RO</b><br></div>"
        }
    ];

    // Adicionar marcadores e configurar popups
    markers.forEach(function(marker, index) {
        var popup = L.popup({ closeOnClick: false, autoClose: false }).setContent(marker.popupText);
        var mapMarker = L.marker(marker.coords).addTo(mymap).bindPopup(popup);
        if (index < 2) { 
            mapMarker.openPopup();
        }
    });
});
