/*
  QR Code generator

  Draws a QR code using a text string.  Uses 
  https://github.com/kazuhikoarase/qrcode-generator
  as the QR Code generator library. It's hosted at this CDN:
  https://unpkg.com/qrcode-generator@1.4.4/qrcode.js"

  created 19 July 2020
  by Tom Igoe
*/

//https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Safely_inserting_external_content_into_a_page to add external content to page

// a string to display in the QR code
// let inputString = parent.location.href;
let inputString = "google.com";
let addContent = false;



let newUrl = document.getElementById('newUrl');
let previewUrl = "google.com";

function replaceurl() {
//////
fetch("https://lc4726.itp.io/all")
.then(res => res.json())
.then(data => {
  return data.find( xr=> {
      inputString =  document.getElementById("urlinput").value;
      console.log(inputString);
      if (inputString === xr.url){
        console.log("Success:", xr.url);
        newUrl.innerHTML = `Project Output: Your new link!</p><a href="https://lc4726.itp.io/qr/database.html?id=${xr.id}">https://lc4726.itp.io/qr/database.html?id=${xr.id}</a>`
        previewUrl = "https://lc4726.itp.io/qr/database.html?id=" + xr.id;
        // make the QR code:
        //changing the letter in the Qrcode allows for it to be a higher or lower quality
        let qr = qrcode(0, 'M');
        qr.addData(previewUrl);
        qr.make();
        // create an image from it:
        // paramtetrs are cell size, margin size, and alt tag
        // cell size default: 2
        // margin zize default: 4 * cell size
        let qrImg = qr.createImgTag(7, 14, "qr code of " + previewUrl);
        // display the QR code
        if (addContent === false){
          qrDiv = document.createElement("div");
          // qrName = document.createElement("p");
          // qrName.innerHTML= "URL: " + previewUrl;
          qrDiv.innerHTML = qrImg;
        
          qrDiv.id = "qrimage"
          // qrName.id = "qrstring"
          // document.getElementById("content").appendChild(qrName);
          document.getElementById("content").appendChild(qrDiv);
          addContent = true;
        }else{
          // qrName.innerHTML= "URL: " + previewUrl;
          qrDiv.innerHTML = qrImg;
        }
        return true;
      }else{
        console.log("failed:", xr.url);
        newUrl.innerHTML = `Project Output: <a href="addyourproject.html">Add your project to the data base</a>`
       // make the QR code:
        //changing the letter in the Qrcode allows for it to be a higher or lower quality
        let qr = qrcode(0, 'M');
        qr.addData(inputString);
        qr.make();
        // create an image from it:
        // paramtetrs are cell size, margin size, and alt tag
        // cell size default: 2
        // margin zize defaault: 4 * cell size
        let qrImg = qr.createImgTag(10, 20, "qr code of " + inputString);
        // display the QR code
        if (addContent === false){
          qrDiv = document.createElement("div");
          qrName = document.createElement("p");
          qrName.innerHTML= "URL: " + inputString;
          qrDiv.innerHTML = qrImg;
          qrDiv.id = "qrimage"
          qrName.id = "qrstring"
          document.getElementById("content").appendChild(qrName);
          document.getElementById("content").appendChild(qrDiv);
          addContent = true;
        }else{
          qrName.innerHTML= "URL: " + inputString;
          qrDiv.innerHTML = qrImg;
        }
      }
    })
  })
}
var input = document.getElementById("urlinput");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("QRtextbox").click();
  }
});
// console.log(displayurl);
// console.log(qrimg);
// function replaceurl() {
//   inputString =  document.getElementById("urlinput").value;
//   console.log(inputString);
//   // make the QR code:
//   //changing the letter in the Qrcode allows for it to be a higher or lower quality
//   let qr = qrcode(0, 'M');
//   qr.addData(inputString);
//   qr.make();
//   // create an image from it:
//   // paramtetrs are cell size, margin size, and alt tag
//   // cell size default: 2
//   // margin zize defaault: 4 * cell size
//   let qrImg = qr.createImgTag(10, 20, "qr code of " + inputString);

//   // display the QR code
//   if (addContent === false){
//   qrDiv = document.createElement("div");
//   qrName = document.createElement("p");
//   qrName.innerHTML= "URL: " + inputString;
//   qrDiv.innerHTML = qrImg;
 
//   qrDiv.id = "qrimage"
//   qrName.id = "qrstring"
//   document.getElementById("content").appendChild(qrName);
//   document.getElementById("content").appendChild(qrDiv);
//   addContent = true;
//   }else{
//     qrName.innerHTML= "URL: " + inputString;
//     qrDiv.innerHTML = qrImg;
//   }
//  }
