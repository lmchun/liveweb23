/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// var Marzipano = window.Marzipano;
// var bowser = window.bowser;
// var screenfull = window.screenfull;
// var data = window.APP_DATA;

// // Grab elements from DOM.
// var panoElement = document.querySelector('#pano');
// var sceneNameElement = document.querySelector('#titleBar .sceneName');
// var sceneListElement = document.querySelector('#sceneList');
// var sceneElements = document.querySelectorAll('#sceneList .scene');
// var sceneListToggleElement = document.querySelector('#sceneListToggle');
// var autorotateToggleElement = document.querySelector('#autorotateToggle');
// var fullscreenToggleElement = document.querySelector('#fullscreenToggle');

// Create viewer.
var viewer = new Marzipano.Viewer(document.getElementById('pano'));

// Create source.
var source = Marzipano.ImageUrlSource.fromString(
  "https://lh3.googleusercontent.com/JxSUyogyQo8PKVzjVA88Tr0cRqfY4wK0zzyO0aXLSLT1qJ7ItgdLIBOsrs4Dx86d3OU=w2400"
// https://lh4.googleusercontent.com/9rLW3E-uQL8H8B_NyesuMMpeHMM9Zk_ai62fjO07LZD1iAETkK02facSvoWfTcgGPz0=w2400
  );

// Create geometry.
var geometry = new Marzipano.EquirectGeometry([{ width: 4000 }]);

// Create view.
var limiter = Marzipano.RectilinearView.limit.traditional(1024, 100*Math.PI/180);
var view = new Marzipano.RectilinearView({ yaw: Math.PI }, limiter);

// Create scene.
var scene = viewer.createScene({
  source: source,
  geometry: geometry,
  view: view,
  pinFirstLevel: true
});

// Display scene.
scene.switchTo();

//////////////////////////////////////////////////
// Get the hotspot container for scene.
var container = scene.hotspotContainer();

// Create hotspot with different sources.
container.createHotspot(document.getElementById('iframespot'), { yaw: 0.0335, pitch: -0.102 },
  { perspective: { radius: 1640, extraTransforms: "rotateX(5deg)" }});
container.createHotspot(document.getElementById('iframeselect'), { yaw: -0.35, pitch: -0.239 });

// HTML sources.
var hotspotHtml = {
  TSamuelu: '<iframe width="1280" height="720" src="https://www.youtube.com/embed/gaA7RAy5rYg" title="YouTube video player" frameborder="0"s allowfullscreen></iframe>',
  KLatif: '<iframe width="1280" height="720" src="https://www.youtube.com/embed/gaA7RAy5rYg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  CDang: '<iframe width="1280" height="720" src="https://www.youtube.com/embed/gaA7RAy5rYg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  CSvetvilas: '<iframe width="1280" height="720" src="https://www.youtube.com/embed/gaA7RAy5rYg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  AWong: '<iframe width="1280" height="720" src="https://www.youtube.com/embed/gaA7RAy5rYg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  MAhmed: '<iframe width="1280" height="720" src="https://www.youtube.com/embed/gaA7RAy5rYg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  CSu: '<iframe width="1280" height="720" src="https://www.youtube.com/embed/gaA7RAy5rYg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  JVaj: '<iframe width="1280" height="720" src="https://www.youtube.com/embed/gaA7RAy5rYg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  LFu: '<iframe width="1280" height="720" src="https://www.youtube.com/embed/gaA7RAy5rYg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  googleMaps: '<iframe id="googlemaps" width="1280" height="480" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9487.563699358636!2d-9.211273541013671!3d38.69789785451112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ecf578f4d20e9%3A0x530952e38d140ae6!2sDigisfera+-+Fotografia+e+Inform%C3%A1tica%2C+Lda!5e1!3m2!1spt-PT!2spt!4v1429956174252" width="600" height="450" frameborder="0" style="border:0"></iframe>',
  
};

//UI included OLD <iframe id="youtubeWithControls" width="1280" height="720" src="https://www.youtube.com/embed/gaA7RAy5rYg" frameborder="0" allowfullscreen></iframe>

// Switch sources when clicked.
function switchHotspot(id) {
  var wrapper = document.getElementById('iframespot');
  wrapper.innerHTML = hotspotHtml[id];
}

var switchElements = document.querySelectorAll('[data-source]');
for (var i = 0; i < switchElements.length; i++) {
  var element = switchElements[i];
  addClickEvent(element);
}

function addClickEvent(element) {
  element.addEventListener('click', function() {
    switchHotspot(element.getAttribute('data-source'));
  });
}
//////////////////////////////////////////////////////////////////



container.createHotspot(document.querySelector("#tooltip"), { yaw: 4.55, pitch: 0.102});





// /////////////////////////////////
function hide() {
  document.getElementById('viewinterview').hidden = true
}
function show() {
  document.getElementById('viewinterview').hidden = false
}