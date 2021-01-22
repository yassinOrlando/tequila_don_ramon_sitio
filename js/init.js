(function ($) {
  $(function () {

    $('.sidenav').sidenav();
    $('.parallax').parallax();

    if ($(window).width() < 767) {
      $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
      });
    } else {
      $('.carousel').removeClass('carousel-slider center');
      $('.carousel').carousel({
        indicators: true
      });
    }

    $(document).load($(window).bind("resize", checkPosition));
    function checkPosition() {
      if ($(window).width() < 767) {
        $('.carousel').addClass('carousel-slider center');
        $('.carousel.carousel-slider').carousel({
          fullWidth: true,
          indicators: true
        });
      } else {
        $('.carousel').removeClass('carousel-slider center');
        $('.carousel').carousel({
          indicators: true
        });
      }
    }

  }); // end of document ready
})(jQuery); // end of jQuery name space

//-----------------------------------    Functions for Modal interaction ---------------------------------------
//Modal trigger and product creator
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, options);

  //Creation of all the cards with the products
  let productsGrid = document.querySelector('#productsGrid')
  prodList.forEach((prod, index) => {
    if (index === 0) {  //The first card is not a product, is a card with a list of all the presentations available for the products
      productsGrid.innerHTML += `
        <div class="col s12 m4 l3 center">
          <div class="card grey darken-3 white-text">
              <div class="card-image">
                  <img src="${prod.foto}" width="100%" alt="regalo">
                  <a class="btn-floating halfway-fab waves-effect waves-light lime darken-4 modal-trigger"
                      href="#modal1" onclick="getprod('${prod.titulo}')"><i class="material-icons">add</i></a>
              </div>
              <div class="card-content">
                  <span class="card-title">${prod.titulo}</span>
              </div>
          </div>
        </div>
      `
    } else {
      productsGrid.innerHTML += `
        <div class="col s12 m4 l3 center">
          <div class="card">
              <div class="card-image">
                  <img src="${prod.foto}" width="100%" alt="producto">
                  <a class="btn-floating halfway-fab waves-effect waves-light lime darken-4 modal-trigger"
                      href="#modal1" onclick="getprod('${prod.nombre}')"><i class="material-icons">add</i></a>
              </div>
              <div class="card-content">
                  <span class="card-title">${prod.nombre}</span>
                  <p>${prod.precio}</p>
                  <p>Presentación: ${prod.cantidad}</p>
              </div>
          </div>
        </div>
      `
    }
  })
});

//Function to get the selected info of the enterprise
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
    <div class="modal-content" id="enterprise-info-modal">
      <div id="modal-img"></div>
      <div id="modal-img-txt">
        <div class="row">
            <h4 class="col s10 m11">${enterpriseInfo.titulo}</h4>
            <a href="#!" class="col s2 m1 white-text modal-close waves-effect waves-red btn-flat exit"><b><i class="large material-icons">fullscreen_exit</i></b></a>
        </div>
        <p>${enterpriseInfo.contenido}</p>
      </div>
    </div>
  `
}

//Function to get the product info and show it in the modal
function getprod(selectedProd) {
  let modal = document.querySelector('#modal1')

  prodList.forEach((prod) => {
    if (prod.nombre == selectedProd) {
      modal.innerHTML = `
        <div class="modal-content">
          <div class="row">
              <h4 class="col s10 m11">${prod.nombre}</h4>
              <a href="#!" class="col s2 m1 modal-close waves-effect waves-red btn-flat exit"><b><i class="large material-icons">fullscreen_exit</i></b></a>
          </div>
          <div class="row">
            <div class="col m4" id="img-prod-modal">
              <img src="${prod.foto}" width="100%">
            </div>
            <div class="col s12 m8">
              <p><b>Capacidad:</b> ${prod.capacidad}</p>
              <h5 class="green-text">${prod.precio}</h5>
              <p>${prod.info}</p>
              <p>Presentación: ${prod.cantidad}</p>
              <p>
                <b> Específicos </b><br>
                <b>Clase:</b> ${prod.especificos.clase}<br>
                <b>Graduación:</b> ${prod.especificos.graduacion}<br>
                <b>Barrica:</b> ${prod.especificos.barrica}<br>
                <b>Reposo:</b> ${prod.especificos.tmpReposo}
              </p>
              <p>
                <b> Ficha organoléptica </b><br>
                <b>Color:</b> ${prod.organoleptica.color}<br>
                <b>Aroma:</b> ${prod.organoleptica.aroma}<br>
                <b>Barrica:</b> ${prod.organoleptica.gusto}<br>
              </p>
            </div>
          </div>
        </div>
      `
      return
    } else if (prod.titulo == selectedProd) {
      modal.innerHTML = `
        <div class="modal-content">
          <div class="row">
              <h4 class="col s10 m11">${prod.titulo}</h4>
              <a href="#!" class="col s2 m1 modal-close waves-effect waves-red btn-flat exit"><b><i class="large material-icons">fullscreen_exit</i></b></a>
          </div>
          <div class="row">
            <div class="col s12">
              ${prod.info}
            </div>
          </div>
        </div>
      `
    }
  });
}

//-----------------------------------------------     Variables with the info of products and enterprises  ---------------------------------------
//------ Objects with the history, mision and vision of the enterprise
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

//------ Product list with details
const prodList = [
  {
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8u07n90fxuWJl8lf_5o_wlRboyM0UKMcnHQ&usqp=CAU",
    titulo: "Botellas personalizadas a tu gusto",
    info: `
      <ul class="collection with-header">
        <li class="collection-header"> <h5> Eventos sociales </h5> </li>
        <li class="collection-item"> Bodas </li>
        <li class="collection-item"> XV años </li>
        <li class="collection-item"> Bautizos </li>
        <li class="collection-item"> Aniversarios </li>
        <li class="collection-item"> Conciertos </li>
        <li class="collection-item"> Cumpleaños </li>
        <li class="collection-item"> Reuniones especiales </li>        
      </ul>
      <ul class="collection with-header">
        <li class="collection-header"> <h5> Temporada </h5> </li>
        <li class="collection-item"> San Valentín </li>
        <li class="collection-item"> Día de las madres </li>
        <li class="collection-item"> Día del padre </li>
        <li class="collection-item"> Fiestas patrias </li>
        <li class="collection-item"> Día de muertos </li>
        <li class="collection-item"> Navidad </li>
        <li class="collection-item"> Año nuevo </li>        
      </ul>
      <ul class="collection with-header">
        <li class="collection-header"> <h5> Eventos institucionales </h5> </li>
        <li class="collection-item"> Reconocimientos </li>
        <li class="collection-item"> Eventos anuales </li>
        <li class="collection-item"> Seminarios </li>
        <li class="collection-item"> Congresos </li>   
      </ul>
    `,
  },
  {
    foto: "https://www.chedraui.com.mx/medias/638478000064-00-CH1200Wx1200H?context=bWFzdGVyfHJvb3R8ODE4ODd8aW1hZ2UvanBlZ3xoZWIvaDdiLzEwMjQwNDk2ODYxMjE0LmpwZ3xlMTM1NGUxMGVjOGZjMmZhYmI3ODAxZGUyMzA1NzAwZTZiYTc0NTRiZTM5OWQ2NmRjMjY0ZWNiMDJkNTExY2Qy",
    nombre: "Tequila reposado 1 50ml",
    capacidad: "0.5 ltr",
    precio: "79.75 MXN (c/u)",
    cantidad: "48 Pack",
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
    foto: "https://www.chedraui.com.mx/medias/638478000064-00-CH1200Wx1200H?context=bWFzdGVyfHJvb3R8ODE4ODd8aW1hZ2UvanBlZ3xoZWIvaDdiLzEwMjQwNDk2ODYxMjE0LmpwZ3xlMTM1NGUxMGVjOGZjMmZhYmI3ODAxZGUyMzA1NzAwZTZiYTc0NTRiZTM5OWQ2NmRjMjY0ZWNiMDJkNTExY2Qy",
    nombre: "Tequila reposado 2 50ml",
    capacidad: "0.5 ltr",
    precio: "79.75 MXN (c/u)",
    cantidad: "48 Pack",
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
    precio: "79 MXN (c/u)",
    cantidad: "48 Pack",
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
    foto: "https://cdn.shopify.com/s/files/1/0385/3280/8843/products/TEQUILADONRAMONPUNTADIAMANTE750ML_580x.jpg?v=1594167815",
    nombre: "Tequila reposado 200ml",
    capacidad: "0.5 ltr",
    precio: "79 MXN (c/u)",
    cantidad: "48 Pack",
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
    foto: "https://vinosamerica.com/wp-content/uploads/2020/05/OVEJANEGRA_TDR_Imagen-BA-Swarovski-Plata-750-ml.jpg",
    nombre: "Tequila reposado 300ml",
    capacidad: "0.5 ltr",
    precio: "79 MXN (c/u)",
    cantidad: "48 Pack",
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
    foto: "https://dontequila.com.mx/cdrpersonalizado/wp-content/uploads/2020/06/tequila-don-ramon-edicion-limitada-extra-anejo-750ml.jpg",
    nombre: "Tequila reposado 400ml",
    capacidad: "0.5 ltr",
    precio: "79 MXN (c/u)",
    cantidad: "48 Pack",
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
    foto: "https://www.chedraui.com.mx/medias/63847800003-02-CH1200Wx1200H?context=bWFzdGVyfHJvb3R8ODU1NTl8aW1hZ2UvanBlZ3xoZDQvaDRmLzg4MDY5NjE2MTA3ODIuanBnfDc4OTJlMGU4NWQwNTRmNTA2NDQ3NDAwZjA1MzU2YjJiYWI0ZWYzOWM1M2FkOWE5MWRiMTFkMDhjZDQwNjc2ZDk",
    nombre: "Tequila reposado 500ml",
    capacidad: "0.5 ltr",
    precio: "79 MXN (c/u)",
    cantidad: "48 Pack",
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
