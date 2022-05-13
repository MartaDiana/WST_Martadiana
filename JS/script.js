// issmap
const mymap = L.map("mapid").setView([51.505, -0.09], 13);

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: "mapbox/streets-v11",
  tileSize: 512,
  zoomOffset: -1,
  accessToken: "pk.eyJ1IjoibWFydGFkaWFuYSIsImEiOiJjbDMybGxjYnAwY2ZlM2pwNW9ocWY4dDF3In0.hppngo0DJVVEhcnCsbfsrw",
}).addTo(mymap);

// retrieval data on AJAX
/*var ourRequest = new XMLHttpRequest();
ourRequest.open("GET", "data.json");
ourRequest.onload = function () {
  var ourData = JSON.parse(ourRequest.responseText);
  console.log(ourData.latitude);
};
ourRequest.send(); */

// adding marker
const marker = L.marker([1.28692, 103.85457]).addTo(mymap);

// // adding popup message
// let template = "helo world";

// marker.bindPopup(template);

marker.bindPopup("The Merlion is the official mascot of Singapore. It is depicted as a mythical creature with the head of a lion and the body of a fish.").openPopup();

let template =
  /* <img scr="js/merlion.js"></img>; */

  marker.bindPopup();
