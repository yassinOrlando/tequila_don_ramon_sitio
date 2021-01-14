(function ($) {
  $(function () {

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

//Modal trigger
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, options);

  var productsGrid = document.querySelector('#productsGrid')
  prodList.forEach((prod) => {
    console.log(prod);
    productsGrid.innerHTML += `
      <div class="col s12 m4 l3 center">
        <div class="card">
            <div class="card-image">
                <img src="background1.jpg" width="100%" alt="producto">
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
          <a href="#!" class="col s1 modal-close waves-effect waves-green btn-flat">X</a>
      </div>
      <p>${prodInfo.capacidad}</p>
      <h5 class="green-text">${prodInfo.precio}</h5>
      <p>${prodInfo.info}</p>
    </div>
  `
}

// Product list with details
const prodList = [
  {
    nombre: "alfa",
    capacidad: "1 ltr",
    precio: "200 MXN",
    info: "This is the info of the product",
  },
  {
    nombre: "gama",
    capacidad: "1 ltr",
    precio: "200 MXN",
    info: "This is the info of the product",
  },
  {
    nombre: "delta",
    capacidad: "1 ltr",
    precio: "200 MXN",
    info: "This is the info of the product",
  },
  {
    nombre: "beta",
    capacidad: "1 ltr",
    precio: "200 MXN",
    info: "This is the info of the product",
  },
  {
    nombre: "omega",
    capacidad: "1 ltr",
    precio: "200 MXN",
    info: "This is the info of the product",
  },
  {
    nombre: "tango",
    capacidad: "1 ltr",
    precio: "200 MXN",
    info: "This is the info of the product",
  },
  {
    nombre: "primer",
    capacidad: "5 ltr",
    precio: "700 MXN",
    info: "This is the info of the product primer",
  },
]
