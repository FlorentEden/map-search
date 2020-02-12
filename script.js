document.addEventListener('DOMContentLoaded', function() {
   var chargeSign = document.getElementById('loader');
   chargeSign.style.display = "none";
}, false);


CreateDataList();
function CreateDataList() {
  for (var i = 0; i < listadress.length; i++) {
    var adres = listadress[i];
    var input = document.getElementById("inputSearch").value;
    console.log(listadress[i].numero == input);
    var div = document.createElement("option");
    var datalist = document.getElementById('address');
    div.setAttribute("value", JSON.stringify(listadress[i].numero)+" "+listadress[i].voie_nom);
    //div.setAttribute("onclick", "createPoint("+listadress[i].lat+","+ listadress[i].long+")");
    datalist.appendChild(div);
  }
}


var mbAttr = 'Map data &copy; <a href="https://justpaste.it/redirect/3w5tg/https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://justpaste.it/redirect/3w5tg/https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="https://justpaste.it/redirect/3w5tg/https://www.mapbox.com/">Mapbox</a>',
        mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

        var light = L.tileLayer(mbUrl, {id: 'mapbox/light-v9', attribution: mbAttr}),
            streets = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11',   attribution: mbAttr}),
            sat = L.tileLayer(mbUrl, {id: 'mapbox/satellite-streets-v11', attribution: mbAttr}),
            dark = L.tileLayer(mbUrl,{id: 'mapbox/dark-v10', attribution: mbAttr});

        var map = L.map('map', {
        center: [45.767642974853516, 4.873867511749268],
        zoom: 13,
        layers : [streets]
    });



function createPoint() {
  var input = document.getElementById("inputSearch").value;
  for (var i = 0; i < listadress.length; i++) {
    if (input == listadress[i].numero+" "+listadress[i].voie_nom) {
      var marker = L.marker([listadress[i].lat, listadress[i].long]).addTo(map);
      marker.bindPopup(listadress[i].numero+" "+listadress[i].voie_nom).openPopup();
      //setLatLng(listadress[i].latn, listadress[i].long)
    }
  }
  //var marker2 = L.marker([lat , long]).addTo(map);
  //return marker2;

}
