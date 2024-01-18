//alert("js fonctionne")
function color() {
  document.querySelector("#para").style.color="red";
};


function maths() {
  var cells = document.getElementsByClassName("maths");
  console.log(cells);
  for (var i = 0; i < cells.length; i++) {
    cells[i].className = "maths surligne";
  };
  console.log(cells);
};

function surlin(mat) {
  suppr();
  if (mat != "vide") {
    var cells = document.getElementsByClassName(mat);
    for (var i = 0; i < cells.length; i++) {
      cells[i].className = mat.concat(" surligne");
    };
  };
};

function suppr() {
  var cells = document.getElementsByClassName("surligne");
  var len = cells.length;
  for (var i=0; i < len; i++) {
    cells[0].className = cells[0].className.slice(0, -9);
  };
};

let table = document.getElementById("edt");

table.addEventListener(
  "mouseover",
  function (event) {
    surlin(event.target.className);
  },
  false
);



// ce qui suit ne fonctionne pas

var requestURL = "table.json";
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "text";
request.send()

request.onload = function() {
  var edtText = request.response;
  var edt = JSON.parse(edtText);
  showFich(edt);
};

function showFich(jsonObj) {
  var jours = jsonObj
  for (var i = 0; i < jours.length; i++) {
    var jour = jours[i];
    for (var j = 0; j < jour.length; j++) {
      var stunde = jour[j];
      var cell = document.getElementById("cell" + i + j);
      cell.textContent = stunde.name;
      console.log(stunde.name);
    };
  };
};
