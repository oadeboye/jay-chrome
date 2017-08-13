console.log("Jay Chrome is up!");

var images = document.getElementsByTagName('img');
for (var i = 0; i < images.length; i++) {
  images[i].src = "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAA1qAAAAJDU4ZDk2MGRhLTI4NjktNDliYS1iNDUxLWM3MjFlZjE5MTI4OA.jpg";
}

// var p = document.getElementsByTagName('body');
// for (var i = 0; i < p.length; i++) {
//   if (p[i].innerHTML.indexOf(' the ') !== -1){
//     p[i].innerHTML = p[i].innerHTML.split(' the ').join(' penis ');
//   }
//   if (p[i].innerHTML.indexOf('The ') !== -1){
//     p[i].innerHTML = p[i].innerHTML.split('The ').join('Penis ');
//   }
// }

// Open a new tab to search for homes in Phoenix
var input = document.getElementsByTagName('input');
function createTab(tab) {
  console.log("New tab created!", tab.id);
}
for (var i = 0; i < input.length; i++) {
  if (input[i].value.indexOf('give up') !== -1){
    console.log("DON'T GIVE UP!");
    // chrome.tabs.create({
    //   url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    // }, createTab);
    // .then(createTab, errorTab);
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  }
}
