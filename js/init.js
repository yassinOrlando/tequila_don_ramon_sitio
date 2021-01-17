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
                <img src="${prod.foto}" width="100%" alt="producto">
                <a class="btn-floating halfway-fab waves-effect waves-light lime darken-4 modal-trigger"
                    href="#modal1" onclick="getProdInfo('${prod.nombre}')"><i class="material-icons">add</i></a>
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
function getEnterpriseInfo(selectedInfo) {
  let enterpriseInfo
  let modal = document.querySelector('#modal1')

  enterpriseInfoList.forEach((element) => {
    if (element.titulo == selectedInfo) {
      enterpriseInfo = element
      return
    }
  })

  modal.innerHTML = `
    <div class="modal-content">
      <div class="row">
          <h4 class="col s11">${enterpriseInfo.titulo}</h4>
          <a href="#!" class="col s1 modal-close waves-effect waves-red btn-flat exit"><b>X</b></a>
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
          <a href="#!" class="col s1 modal-close waves-effect waves-red btn-flat exit"><b>X</b></a>
      </div>
      <p><b>Capacidad:</b> ${prodInfo.capacidad}</p>
      <h5 class="green-text">${prodInfo.precio}</h5>
      <p>${prodInfo.info}</p>
      <p>
        <b> Específicos </b><br>
        <b>Clase:</b> ${prodInfo.especificos.clase}<br>
        <b>Graduación:</b> ${prodInfo.especificos.graduacion}<br>
        <b>Barrica:</b> ${prodInfo.especificos.barrica}<br>
        <b>Reposo:</b> ${prodInfo.especificos.tmpReposo}
      </p>
      <p>
        <b> Ficha organoléptica </b><br>
        <b>Color:</b> ${prodInfo.organoleptica.color}<br>
        <b>Aroma:</b> ${prodInfo.organoleptica.aroma}<br>
        <b>Barrica:</b> ${prodInfo.organoleptica.gusto}<br>
      </p>
    </div>
    <div class="modal-footer">
      <a class="btn-flat">Botella hecha por artesanos</a>
    </div>
  `
}

//-----------------------------------------------     Vaiables with the info of products and enterprises  ---------------------------------------
//--- Objects with the history, mision and vision of the enterprise
const enterpriseInfoList = [
  {
    titulo: "Historia",
    contenido: `Tequila Don Ramón es una empresa
    productora y comercializadora de tequila,
    fundada en 1996 que ha logrado posicionarse
    dentro de la industrial como un producto de
    calidad hecho para satisfacer los paladares
    más exigentes. Además, es pionero en la
    técnica 'corte diamante' con la que se
    ofrecen productos personalizados para
    cualquier tipo de eventos, siendo así una
    gran oportunidad de negocio.
    `,
  },
  {
    titulo: "Misión",
    contenido: `Inmortalizamos tus más grandes momentos a
    través de una botella especial personalizada
    con licores de alta calidad.
    `,
  },
  {
    titulo: "Visión",
    contenido: `Ser franquicia líder que se caracterice por
    grabar las mejores experiencias de nuestros
    clientes por medio de botellas
    personalizadas.
    `,
  },
]

// Product list with details
const prodList = [
  {
    foto: "https://www.chedraui.com.mx/medias/638478000064-00-CH1200Wx1200H?context=bWFzdGVyfHJvb3R8ODE4ODd8aW1hZ2UvanBlZ3xoZWIvaDdiLzEwMjQwNDk2ODYxMjE0LmpwZ3xlMTM1NGUxMGVjOGZjMmZhYmI3ODAxZGUyMzA1NzAwZTZiYTc0NTRiZTM5OWQ2NmRjMjY0ZWNiMDJkNTExY2Qy",
    nombre: "Tequila reposado 50ml",
    capacidad: "0.5 ltr",
    precio: "79.75 MXN",
    info: "100% Agave. Reposado (Pedido mínimo de una caja con 48 piezas)",
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
    foto: "https://www.chedraui.com.mx/medias/638478000163-00-CH1200Wx1200H?context=bWFzdGVyfHJvb3R8OTk4Njh8aW1hZ2UvanBlZ3xoMTAvaDljLzEwMjQwNTE1MjQ0MDYyLmpwZ3wxNzg2MDdmZjY0NDE1NmY1ZjU2MzVkMjBkNTc5ODc5MGZiYjIyNWE5N2I3NDAxM2JlYzE5NzA1YWMwOTcyYzhj",
    nombre: "Tequila reposado 100ml",
    capacidad: "0.5 ltr",
    precio: "79 MXN",
    info: "100% Agave. Reposado (Pedido mínimo de una caja con 48 piezas)",
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
