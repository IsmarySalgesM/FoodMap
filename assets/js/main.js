// Vista splah 2 segundos
let second = () => {
  document.getElementById("firstSection").style.display = "none";
  document.getElementById("secondSection").style.display = "block";
};
let prueba = [];

window.onload = () => {
  setTimeout(second, 2000);

  let select = document.getElementById("containerInfo");
  //aqui es la funcion de mi select
  select.addEventListener('change', function () {

    let selectedOption = select.options[select.selectedIndex].value;
    console.log(JSON.stringify(selectedOption));
  });

    let placeFound = prueba.find(element =>{
      console.log(element)
      return element.name == site.name
    });


};


function placeD(site) {
  let datos = prueba.push(site);

  let select = document.getElementById("containerInfo");
  select.options[select.options.length] = new Option(site.name, site.formatted_address);
}
     
  // 
  //<div class="card">
  //<div class="card-header" href="${site.place_id}">
  //Nombre: ${site.name},
  //Dirección: ${site.formatted_address},
  //Foto: <img src='${site.photos[0].getUrl({
   // maxWidth: 100,
   // maxHeight: 100
  //})}' ></img>
  //</div>`;
//}
