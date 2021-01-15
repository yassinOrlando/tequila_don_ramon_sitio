(function ($) {
  $(function () {

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.carousel').carousel();
    $('.carousel').carousel({
      indicators: true
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space

//-----------------------------------    Functions for Modal interaction ---------------------------------------
//Modal trigger
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, options);

  //Creation of all the cards with the products
  let productsGrid = document.querySelector('#productsGrid')
  prodList.forEach((prod) => {
    productsGrid.innerHTML += `
      <div class="col s12 m4 l3 center">
        <div class="card">
            <div class="card-image">
                <img src="${prod.foto}" width="100%" height="300" alt="producto">
                <a class="btn-floating halfway-fab waves-effect waves-light lime darken-4 modal-trigger"
                    href="#modal1" onclick="getProdInfo('${prod.nombre}')"><i class="material-icons">remove_red_eye</i></a>
            </div>
            <div class="card-content">
                <span class="card-title">${prod.nombre}</span>
                <p>${prod.precio}</p>
            </div>
        </div>
      </div>
    `
  })
});

//Function to get the selected info if the enterprise
function getEnterpriseInfo(selectedInfo){
  let enterpriseInfo
  let modal = document.querySelector('#modal1')

  enterpriseInfoList.forEach((element)=>{
    if(element.titulo == selectedInfo){
      enterpriseInfo = element
      return
    }
  })

  modal.innerHTML = `
    <div class="modal-content">
      <div class="row">
          <h4 class="col s11">${enterpriseInfo.titulo}</h4>
          <a href="#!" class="col s1 modal-close waves-effect waves-red btn-flat exit">X</a>
      </div>
      <p>${enterpriseInfo.contenido}</p>
    </div>
  `
}

//Function to get the product info and show it in the modal
function getProdInfo(selectedProd) {
  let prodInfo
  let modal = document.querySelector('#modal1')

  prodList.forEach((prod) => {
    if (prod.nombre == selectedProd) {
      prodInfo = prod
      return
    }
  });

  modal.innerHTML = `
    <div class="modal-content">
      <div class="row">
          <h4 class="col s11">${prodInfo.nombre}</h4>
          <a href="#!" class="col s1 modal-close waves-effect waves-red btn-flat exit">X</a>
      </div>
      <p>Capacidad: ${prodInfo.capacidad}</p>
      <h5 class="green-text">${prodInfo.precio}</h5>
      <p>${prodInfo.info}</p>
      <p>
        <b> Específicos </b><br>
        Clase: ${prodInfo.especificos.clase}<br>
        Graduación: ${prodInfo.especificos.graduacion}<br>
        Barrica: ${prodInfo.especificos.barrica}<br>
        Reposo: ${prodInfo.especificos.tmpReposo}
      </p>
      <p>
        <b> Ficha organoléptica </b><br>
        Color: ${prodInfo.organoleptica.color}<br>
        Aroma: ${prodInfo.organoleptica.aroma}<br>
        Barrica: ${prodInfo.organoleptica.gusto}<br>
      </p>
      <div class="modal-footer">
        <p>Botella hecha por artesanos</p>
      </div>
    </div>
  `
}

//-----------------------------------------------     Vaiables with the info of products and enterprises  ---------------------------------------
//--- Objects with the history, mision and vision of the enterprise
const enterpriseInfoList = [
  {
    titulo: "Historia",
    contenido: "Historia de la empresa",
  },
  {
    titulo: "Misión",
    contenido: "Misión de la empresa",
  },
  {
    titulo: "Visión",
    contenido: "Visión de la empresa",
  },
]

// Product list with details
const prodList = [
  {
    foto: "https://picsum.photos/200/400",
    nombre: "Tequila reposado 50ml",
    capacidad: "0.5 ltr",
    precio: "79 MXN",
    info: "100% Agave. Reposado",
    especificos: {
      clase: "Extra añejo",
      graduacion: "40% Alc. Vol",
      barrica: "Roble Americano",
      tmpReposo: "36 meses",
    },
    organoleptica: {
      color: "Color Tabaco con tonalidades caoba y destellos de ambarino.",
      aroma: "Notas aromáticas marcadas a madera, especies, frutos secos y dulce. Con un cuerpo robusto",
      gusto: "Recuerdos de frutos del bosque, cerezas, madera con persistencia media alta, resaltando la pimienta en el retrogusto elegante"
    }
  },
  {
    foto: "https://picsum.photos/200/400",
    nombre: "Tequila reposado 100ml",
    capacidad: "0.5 ltr",
    precio: "79 MXN",
    info: "100% Agave. Reposado",
    especificos: {
      clase: "Extra añejo",
      graduacion: "40% Alc. Vol",
      barrica: "Roble Americano",
      tmpReposo: "36 meses",
    },
    organoleptica: {
      color: "Color Tabaco con tonalidades caoba y destellos de ambarino.",
      aroma: "Notas aromáticas marcadas a madera, especies, frutos secos y dulce. Con un cuerpo robusto",
      gusto: "Recuerdos de frutos del bosque, cerezas, madera con persistencia media alta, resaltando la pimienta en el retrogusto elegante"
    }
  },
]
