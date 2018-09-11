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

  //console.log(site);
  // Aqui guardo toda mis opciones de restaurantes
  let prueba = []
  let datos = prueba.push(site)

  //aqui recorro todas mis opciones
  let select = document.getElementById("containerInfo");
  for (let i = 0; i < prueba.length; i++) {
    select.options[select.options.length] = new Option(prueba[i].name)
    // console.log(prueba[i].name)
    //console.log(pruebaSearch);
  }
  //aqui es la funcion de mi select
  select.addEventListener('change',function (event) {
      console.log(event)
      let selectedOption = this.options[select.selectedIndex]
      
      for (let key in site) {
        // solo tomo el valor de la direcciones
        let directionAddress = site.formatted_address
        //console.log(directionAddress);
      }
    }
  )
}

           // let tony = site.formatted_address;
            //console.log(tony);
         // }

          //console.log(key);
         // if (site.hasOwnProperty(key)) {
          //  const element = site.formatted_address;


    //console.log(selectedOption.text);




  //let pruebaArray = [];
  //let prueba = Object.entries(site);
  //let puching = pruebaArray.push(prueba);
  //console.log(pruebaArray);
  //pruebaArray.forEach(element => {
  //element.forEach(datos => {
  //et date = datos[1]
  //console.log(date);
   // })
   //})

 // }


 // var select = document.getElementById("containerInfo");
 // for (var i = 0; i < pruebaArray.length; i++) {
   //select.options[select.options.length] = //console.log(new Option(pruebaArray[i]))




  //for (let i = 0; i < pruebaArray.length; i++) {
  // const element = pruebaArray[i];
  //console.log(element);
//  containerInfo.innerHTML = pruebaArray;



  //pruebaArray.forEach(element => {
   //
   //console.log(element)
 // });
  //console.log(pruebaArray);


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
