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
  let prueba = []
  let datos = prueba.push(site)

  //let total = pruebaSearch.push(`${site.name}`)
  // console.log(prueba);
  //let printPhoto = document.getElementById('pruebaPhoto');
  let select = document.getElementById("containerInfo");
  for (let i = 0; i < prueba.length; i++) {
    select.options[select.options.length] = new Option(prueba[i].name)
    console.log(prueba[i].name)
    //console.log(pruebaSearch);
    let selectting = document.getElementById('containerInfo');
    selectting.addEventListener('change',
      function (e) {
        e.target;
        let selectedOption = this.options[selectting.selectedIndex]
        for (let key in site) {
          if(prueba[i].name == site.name){
            let tony = site.formatted_address
           // console.log(tony)
            }
          }
        })
      }
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
