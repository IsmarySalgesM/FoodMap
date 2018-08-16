// Vista splah 4 segundos
let second = () => {
  document.getElementById("firstSection").style.display = "none";
  document.getElementById("secondSection").style.display = "block";
};

window.onload = () => {
  setTimeout(second, 4000);
};

// zoom imagen 
//$("#zoom_01").elevateZoom();

