var myMap;
var canvas;
var mappa = new Mappa("Leaflet");

var veneziaLat = 45.4380551;
var veneziaLon= 12.3354965;


options = {
  lat: veneziaLat,
  lng: veneziaLon,
  zoom: 5,
  style: "https://{s}.tile.osm.org/{z}/{x}/{y}.png"
}

var venezia = {
  lat: veneziaLat,
  lng: veneziaLon,
  name: "venice"
}

function preload() {
  myLoc = getCurrentPosition();
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  options.lat = myLoc.latitude;
  options.lng = myLoc.longitude;

  myMap = mappa.tileMap(options);
  myMap.overlay(canvas)
}

function draw() {
  clear();
  var pointVenezia = myMap.latLngToPixel(veneziaLat, veneziaLon);
  fill(255, 0, 0);

  fill(255);
  stroke(4);
  textSize(40);
  var pointHere = myMap.latLngToPixel(myLoc.latitude, myLoc.longitude);

  push();
  stroke(1);
  strokeWeight(2);
  line(pointHere.x, pointHere.y, pointVenezia.x, pointVenezia.y);
  pop();
  fill(color("black"));
  ellipse(pointHere.x, pointHere.y, 20);
  fill(color("black"));
  ellipse(pointVenezia.x, pointVenezia.y, 20);

  push();
  fill(color("black"));
  textSize(10);
  text("la città più bella del mondo", pointVenezia.x-10, pointVenezia.y+20);
  pop();
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
