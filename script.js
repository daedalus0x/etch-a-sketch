// create 16x16 divs (for grid)
let dimensions = 0;
while (dimensions < 256) {
  addDivs();
  dimensions++;
};

// draw the div grid
function addDivs() {
  // select where in the html the object will be
  let position = document.getElementById("container");
  // create a new div element
  let newDiv = document.createElement("div");
  // add id to newDiv
  newDiv.id = "draw-div";
  // add the newly created element and its content into the DOM
  position.appendChild(newDiv);
  // add a listener to color the div after mouseover
  newDiv.addEventListener("mouseover", colorDiv);
};

function colorDiv() {
  this.setAttribute("style", "background-color: red");
};

document.getElementById("clear-button").addEventListener("click", redrawDivs);

function redrawDivs() {
  location.reload();
}
