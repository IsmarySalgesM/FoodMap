// Vista splah 2 segundos
let second = () => {
  document.getElementById("firstSection").style.display = "none";
  document.getElementById("secondSection").style.display = "block";
};

window.onload = () => {
  setTimeout(second, 2000);
};

//Aqui se imprime información de busqueda
function placeD(site) {
  containerInfo.innerHTML += `  
  <div class="card">
  <div class="card-header" href="${site.place_id}">
  Nombre: ${site.name},
  Dirección: ${site.formatted_address},
  Foto: <img src='${site.photos[0].getUrl({
    maxWidth: 100,
    maxHeight: 100
  })}' ></img>
  </div>`;
}
