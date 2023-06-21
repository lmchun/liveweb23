const navLink = document.querySelector("#navLink");
const ulNav = document.createElement("ul");
navLink.appendChild(ulNav);
ulNav.classList.add("topnav");
ulNav.id = "top";
const liNav = document.createElement("li");
const liNav3 = document.createElement("li");
// const liNav4 = document.createElement("li");
const liNav5 = document.createElement("li");
const aNav = document.createElement("a");
const aNav2 = document.createElement("a");
const aNav3 = document.createElement("a");
// const aNav4 = document.createElement("a");
const aNav5 = document.createElement("a");
ulNav.appendChild(liNav);
ulNav.appendChild(liNav3);
// ulNav.appendChild(liNav4);
ulNav.appendChild(liNav5);
liNav.appendChild(aNav);
liNav3.appendChild(aNav3);
// liNav4.appendChild(aNav4);
liNav5.appendChild(aNav5);
liNav3.classList.add("right");
// liNav4.classList.add("right");
liNav5.classList.add("right");
liNav3.classList.add("headertext");
// liNav4.classList.add("headertext");
// liNav5.classList.add("headertext");
// const navhrefs = ['index.html','scanner.html','database.html','qr.html']
aNav.innerHTML = `<img src="assets/arexplorerIcon.png" alt="a pin on a map in AR on a phone."> <span class="icontext">AR Explorer</span>`
aNav.classList.add("iconVert");
aNav.href="index.html";
aNav5.classList.add("headertext2");
aNav5.innerText = "Explore"
aNav5.href="database.html"
aNav3.innerText = "Add your AR"
aNav3.href="qr.html"

// aNav4.innerText = "Discover Near You"
// aNav4.href="scanner.html"

//////////
const screen = {
    small: 0,
    medium: 400,
    large: 800
  };
// observe window resize
window.addEventListener('resize', resizeHandler);
// initial call
resizeHandler();
// calculate size
function resizeHandler() {
  // get window width
  const iw = window.innerWidth;
  // determine named size
  let size = null;
  for (let s in screen) {
    if (iw >= screen[s]) size = s;

    // if(size == "small"){
      // const liNav2 = document.createElement("li");
      // ulNav.appendChild(liNav2);
      // liNav2.appendChild(aNav2);
      // aNav2.innerHTML = `<button id="menuBtn" onclick=""><img id="menuIcon" src="assets/menu.png"></button>`

    //   aNav5.style.visibility = "hidden";
    //   aNav4.style.visibility = "hidden";
    //   aNav3.style.visibility = "hidden";
    //   aNav2.style.visibility = "show";
    //   menuBtn.style.backgroundColor = "white";
    //   menuBtn.style.border = "white";
    //   menuIcon.style.width = "50px";
    // }else{
    //   aNav5.style.visibility = "show";
    //   aNav4.style.visibility = "show";
    //   aNav3.style.visibility = "show";
    //   aNav2.style.visibility = "hidden";
    // }
  }
  console.log(size);

 
}


// menuBtn = document.createElement("input");
// menuBtn.setAttribute("class","side-menu")
// menuBtn.setAttribute("type",checkbox)
// menuBtn.id = "side-menu";
// navLink.appendChild(menuBtn);
// innerHTML = `<label class="hamb" for="side-menu"><span class="hamb-line"></span></label>`
/////////////////////////////////////
function readMore() {
  var dots = document.getElementById("dots");
  var fullText = document.getElementById("fullText");
  var toggleMore= document.getElementById("more");
  // var detailBtn = document.getElementById("details");
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    toggleMore.innerHTML = "More"; 
    fullText.style.display = "none";
  } else {
    dots.style.display = "none";
    // dots.remove();
    // toggleMore.innerHTML = "Less"; 
    toggleMore.innerHTML = ""; 
    fullText.style.display = "inline";
  }
}










/////////////////customization////////////////////////////////
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color
//  let colorWell;
//  const defaultColor = "#0000ff";
 
//  window.addEventListener("load", startup, false);

//  function startup() {
//   colorWell = document.querySelector("#colorWell");
//   colorWell.value = defaultColor;
//   colorWell.addEventListener("input", updateFirst, false);
//   // colorWell.addEventListener("change", updateAll, false);
//   colorWell.select();
// }

// function updateFirst(event) {
//   const p = document.querySelector("p");
//   if (p) {
//     p.style.color = event.target.value;
//   }
// }





//border radius to image 
// function (){

// }

// function changeColor(color) {
//   qrDiv.style.color = color;
// }

/////upload image code////// 
//read this https://medium.com/@mignunez/how-to-upload-and-preview-an-image-with-javascript-749b92711b91
// const input = document.querySelector("input")
// const output = document.querySelector("output")
// let imagesArray = []


/////////////////////collapse////////////////////////////////

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

///////////////////////////////////////////////////////////

