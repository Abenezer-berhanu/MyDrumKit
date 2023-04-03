let drums = document.querySelectorAll(".drum");
for (i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", function () {
    let value = this.innerText;
    makeSound(value);
    changeTheOpacity(value);
  });
}

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
});

function makeSound(value) {
  switch (value) {
    case "w":
      var voice1 = new Audio("./music/alan.m4a");
      voice1.play();
      break;
    case "a":
      var voice2 = new Audio("./music/alok.m4a");
      voice2.play();
      break;
    case "s":
      var voice3 = new Audio("./music/bnxn.m4a");
      voice3.play();
      break;
    case "d":
      var voice4 = new Audio("./music/fireboy.m4a");
      voice4.play();
      break;
    case "j":
      var voice5 = new Audio("./music/justin.m4a");
      voice5.play();
      break;
    case "k":
      var voice6 = new Audio("./music/libiance.m4a");
      voice6.play();
      break;
    case "l":
      var voice7 = new Audio("./music/alan.m4a");
      voice7.play();
      break;
    default:
      console.log("INVALID ENTRY");
  }
}
function changeTheOpacity(clickedKey) {
  var activeKey = document.querySelector("." + clickedKey);
  activeKey.style.opacity = "0.7";
  setTimeout(function () {
    activeKey.style.opacity = "1";
  }, 100);
}
