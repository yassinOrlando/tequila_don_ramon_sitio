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
      <div id="modal-img" style="background-image: url('${enterpriseInfo.img}');"></div>
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
      let barrica = prod.especificos.barrica != null ? `<b>Barrica:</b> ${prod.especificos.barrica}<br> ` : ``
      modal.innerHTML = `
      <div class="modal-content" id="enterprise-info-modal">
        <div id="modal-img2" style="background-image: url('${prod.foto}');"></div>
        <div id="modal-img-txt">
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
                <h5 class="light-green-text">${prod.precio}</h5>
                <p>${prod.info}</p>
                <p>Presentación: ${prod.cantidad}</p>
                <p>
                  <b> Específicos </b><br>
                  <b>Clase:</b> ${prod.especificos.clase}<br>
                  <b>Graduación:</b> ${prod.especificos.graduacion}<br>
                  `
                  +
                  barrica
                  +
                  `
                  <b>Reposo:</b> ${prod.especificos.tmpReposo}
                </p>
                <p>
                  <b> Ficha organoléptica </b><br>
                  <b>Color:</b> ${prod.organoleptica.color}<br>
                  <b>Aroma:</b> ${prod.organoleptica.aroma}<br>
                  <b>Gusto:</b> ${prod.organoleptica.gusto}<br>
                </p>
              </div>
            </div>
        </div>
      </div>
      `
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
    img: "img/HISTORIA.jpg",
    contenido: `Tequila Don Ramón es una empresa
    productora y comercializadora de tequila,
    fundada en 1996 que ha logrado posicionarse
    dentro de la industria como un producto de
    calidad hecho para satisfacer los paladares
    más exigentes. Además, es pionero en la
    técnica 'corte diamante' con la que se
    ofrecen productos personalizados para
    cualquier tipo de eventos, siendo así una
    gran oportunidad de negocio. <br>
    Se fundó en 1996 con el propósito de ofrecer un Tequila con
    carácter, pero suave al paladar. Sus botellas están hechas
    por manos artesanas, de ahí deriva su originalidad.
    Contamos con un diverso portafolio de bebidas hechas
    100% con Agave Supremo de los Altos de Jalisco, cada una
    de ellas cuenta con una característica que las hace únicas y
    originales.
    `,
  },
  {
    titulo: "Misión",
    img: "img/MISION.jpg",
    contenido: `Inmortalizamos tus más grandes momentos a
    través de una botella especial personalizada
    con licores de alta calidad.
    `,
  },
  {
    titulo: "Visión",
    img: "img/VISION.jpeg",
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
    foto: "img/productos/tequila_reposado_50ml.jpg",
    nombre: "Tequila reposado 50ml",
    capacidad: "50 ml",
    precio: "$79.00 (c/u)",
    cantidad: "48 piezas",
    info: "100% Agave. Reposado (Pedido mínimo de una caja con 48 piezas)",
    especificos: {
      clase: "Reposado",
      graduacion: "38% Alc. Vol",
      barrica: "Roble Americano",
      tmpReposo: "6 meses",
    },
    organoleptica: {
      color: "Brillante con intensos tonos dorados",
      aroma: "Sutil sensación alcohólica, suave al olfato, fresco con notas aromáticas de madera, agave cocido, manzana y ciruela.",
      gusto: "Balance perfecto, además consistente promesa entre cuerpo, aroma y sabor, notas claras adquiridas durante su maduración como son madera, caramelo, especias y frutas."
    }
  },
  {
    foto: "img/productos/tequila_reposado_200ml.jpg",
    nombre: "Tequila reposado 200ml",
    capacidad: "200 ml",
    precio: "$137.00 (c/u)",
    cantidad: "24 piezas",
    info: "100% Agave. Reposado (Pedido mínimo de una caja con 24 piezas)",
    especificos: {
      clase: "Reposado",
      graduacion: "38% Alc. Vol",
      barrica: "Roble Americano",
      tmpReposo: "6 meses",
    },
    organoleptica: {
      color: "Brillante con intensos tonos dorados.",
      aroma: "Sutil sensación alcohólica, suave al olfato, fresco con notas aromáticas de madera, agave cocido, manzana y ciruela.",
      gusto: "Balance perfecto, además consistente promesa entre cuerpo, aroma y sabor, notas claras adquiridas durante su maduración como son madera, caramelo, especias y frutas."
    }
  },
  {
    foto: "img/productos/tequila_reposado_750ml.jpg",
    nombre: "Tequila reposado 750ml",
    capacidad: "750 ml",
    precio: "$296.00 (c/u)",
    cantidad: "12 piezas",
    info: "100% Agave. Reposado (Pedido mínimo de una caja con 12 piezas)",
    especificos: {
      clase: "Reposado",
      graduacion: "38% Alc. Vol",
      barrica: "Roble Americano",
      tmpReposo: "6 meses",
    },
    organoleptica: {
      color: "Brillante con intensos tonos dorados.",
      aroma: "Sutil sensación alcohólica, suave al olfato, fresco con notas aromáticas de madera, agave cocido, manzana y ciruela.",
      gusto: "Balance perfecto, además consistente promesa entre cuerpo, aroma y sabor, notas claras adquiridas durante su maduración como son madera, caramelo, especias y frutas."
    }
  },
  {
    foto: "img/productos/tequila_reposado_1ltr.jpg",
    nombre: "Tequila reposado 1 litro",
    capacidad: "1 litro",
    precio: "$360.00 (c/u)",
    cantidad: "12 piezas",
    info: "100% Agave. Reposado (Pedido mínimo de una caja con 12 piezas)",
    especificos: {
      clase: "Reposado",
      graduacion: "38% Alc. Vol",
      barrica: "Roble Americano",
      tmpReposo: "6 meses",
    },
    organoleptica: {
      color: "Brillante con intensos tonos dorados.",
      aroma: "Sutil sensación alcohólica, suave al olfato, fresco con notas aromáticas de madera, agave cocido, manzana y ciruela.",
      gusto: "Balance perfecto, además consistente promesa entre cuerpo, aroma y sabor, notas claras adquiridas durante su maduración como son madera, caramelo, especias y frutas."
    }
  },
  {
    foto: "img/productos/tequila_reposado_1750ltr.jpg",
    nombre: "Tequila reposado 1.750 litros",
    capacidad: "1.750 litros",
    precio: "$649.00 (c/u)",
    cantidad: "6 piezas",
    info: "100% Agave. Reposado (Pedido mínimo de una caja con 6 piezas)",
    especificos: {
      clase: "Reposado",
      graduacion: "38% Alc. Vol",
      barrica: "Roble Americano",
      tmpReposo: "6 meses",
    },
    organoleptica: {
      color: "Brillante con intensos tonos dorados.",
      aroma: "Sutil sensación alcohólica, suave al olfato, fresco con notas aromáticas de madera, agave cocido, manzana y ciruela.",
      gusto: "Balance perfecto, además consistente promesa entre cuerpo, aroma y sabor, notas claras adquiridas durante su maduración como son madera, caramelo, especias y frutas."
    }
  },
  {
    foto: "img/productos/tequila_reposado_3ltr.jpg",
    nombre: "Tequila reposado 3 litros",
    capacidad: "3 litros",
    precio: "$1,128.00 (c/u)",
    cantidad: "4 piezas",
    info: "100% Agave. Reposado (Pedido mínimo de una caja con 4 piezas)",
    especificos: {
      clase: "Reposado",
      graduacion: "38% Alc. Vol",
      barrica: "Roble Americano",
      tmpReposo: "6 meses",
    },
    organoleptica: {
      color: "Brillante con intensos tonos dorados.",
      aroma: "Sutil sensación alcohólica, suave al olfato, fresco con notas aromáticas de madera, agave cocido, manzana y ciruela.",
      gusto: "Balance perfecto, además consistente promesa entre cuerpo, aroma y sabor, notas claras adquiridas durante su maduración como son madera, caramelo, especias y frutas."
    }
  },
  {
    foto: "img/productos/tequila_plata_platinum_700ml.jpg",
    nombre: "Tequila plata platinum 700ml",
    capacidad: "700 ml",
    precio: "$494.00 (c/u)",
    cantidad: "6 piezas",
    info: "100% Agave. (Pedido mínimo de una caja con 6 piezas)",
    especificos: {
      clase: "Blanco",
      graduacion: "35% Alc. Vol",
      barrica: null,
      tmpReposo: "6 meses",
    },
    organoleptica: {
      color: "Blanco cristalino, brilloso intenso.",
      aroma: "Cítricos y agave de gran calidad",
      gusto: "Excelente tequila blanco, al degustar por el paladar tiene un sabor fino y duradero a agave selecto"
    }
  },
  {
    foto: "img/productos/tequila_plata_punta_diamante_750ml.jpg",
    nombre: "Tequila plata punta diamante 750ml",
    capacidad: "750 ml",
    precio: "$494.00 (c/u)",
    cantidad: "12 piezas",
    info: "100% Agave. (Pedido mínimo de una caja con 12 piezas)",
    especificos: {
      clase: "Blanco",
      graduacion: "35% Alc. Vol",
      barrica: "Roble Americano",
      tmpReposo: "6 meses",
    },
    organoleptica: {
      color: "Blanco cristalino, brillante, natural.",
      aroma: "Sutil sensación alcohólica, fresco con delicadas notas de agave, y larga permanencia en la boca.",
      gusto: "Balance perfecto entre sabor y aroma."
    }
  },
  {
    foto: "img/productos/tequila_plata_platinum_colores_700ml.jpg",
    nombre: "Colores para plata platinum",
    capacidad: "700 ml",
    precio: "",
    cantidad: "6 piezas",
    info: `Si requieres varios diseños, se incrementa $22 pesos por cada uno, permitiendo que puedas combinar cajas con varios diseños. La presentación
      Tequila Don Ramón Plata Platinium puede grabarse a color con monto de $25 pesos por botella, con los siguientes colores-Azul, Plata, Violeta,
      Negro y Rojo.
      La entrega del pedido se realiza en 10 días hábiles a partir de la autorización del diseño.`,
    especificos: {
      clase: "Blanco",
      graduacion: "35% Alc. Vol",
      barrica: null,
      tmpReposo: "6 meses",
    },
    organoleptica: {
      color: "Blanco cristalino, brilloso intenso.",
      aroma: "Cítricos y agave de gran calidad",
      gusto: "Excelente tequila blanco, al degustar por el paladar tiene un sabor fino y duradero a agave selecto"
    }
  },
  {
    foto: "img/productos/tequila_edicion_especial_plata_750ml.jpg",
    nombre: "Tequila edición limitada plata 750ml",
    capacidad: "750 ml",
    precio: "$2,265.00 (c/u)",
    cantidad: "4 piezas",
    info: "100% Agave. (Pedido mínimo de una caja con 4 piezas)",
    especificos: {
      clase: "Blanco",
      graduacion: "40% Alc. Vol",
      barrica: null,
      tmpReposo: "6 meses",
    },
    organoleptica: {
      color: "Blanco cristalino, brillante, natural con destellos de hojuelas de plata.",
      aroma: "Sutil sensación alcohólica, fresco con delicadas notas de agave, y larga permanencia en la boca. Balance perfecto entre sabor y aroma.",
      gusto: "Amable y suave con notas cítricas, la persistencia que tiene es media alta y su retrogusto es noble."
    }
  },
  {
    foto: "img/productos/tequila_edicion_especial_anejo_750ml.jpg",
    nombre: "Tequila edición limitada añejo 750ml",
    capacidad: "750 ml",
    precio: "$3,025.00 (c/u)",
    cantidad: "4 piezas",
    info: "100% Agave. (Pedido mínimo de una caja con 4 piezas)",
    especificos: {
      clase: "Añejo",
      graduacion: "40% Alc. Vol",
      barrica: "Roble Americano",
      tmpReposo: "12 meses",
    },
    organoleptica: {
      color: "Ámbar de alta densidad, muy brillante y con destellos de hojuelas de oro, es untuoso.",
      aroma: "Con notas a cítricos como naranja y maracuyá a su vez toques herbáceos a eucalipto, así como membrillo, frutos secos, dátiles y aromas a canela y cacao con una intensidad aromática media alta y un carácter elegante.",
      gusto: "El primer ataque intenso y muy potente, rearmando en boca los aromas de guayaba y eucalipto, con persistencia alta y buena intensidad. Su retrogusto es largo y cremoso con notas minerales y especias a canela, clavo y comino."
    }
  },
  {
    foto: "img/productos/tequila_edicion_especial_extra_anejo_750ml.jpg",
    nombre: "Tequila edición limitada extra añejo 750ml",
    capacidad: "750 ml",
    precio: "$3,517.00 (c/u)",
    cantidad: "4 piezas",
    info: "100% Agave. (Pedido mínimo de una caja con 4 piezas)",
    especificos: {
      clase: "Extra Añejo",
      graduacion: "40% Alc. Vol",
      barrica: "Roble Americano",
      tmpReposo: "36 meses",
    },
    organoleptica: {
      color: "Color tabaco con tonalidades caoba y destellos de ambarino. Brillante y untuoso con una densidad media alta.",
      aroma: "Expresivo y potente, con intensidad aromática a guayaba, caramelos, piloncillo, vainilla, café, cacao y notas especiadas de clavo.",
      gusto: "Buen ataque con recuerdos de frutos del bosque, cerezas, madera con persistencia media alta, resaltando la pimienta en retrogusto elegante, resaltando especias y un rico toque a clavo."
    }
  },
  {
    foto: "img/productos/tequila_edicion_limitada_plata_swarovski_750ml.jpg",
    nombre: "Tequila edición limitada plata Swarovski 750ml",
    capacidad: "750 ml",
    precio: "$5,827.00 (c/u)",
    cantidad: "4 piezas",
    info: "100% Agave. (Pedido mínimo de una caja con 4 piezas)",
    especificos: {
      clase: "Blanco",
      graduacion: "40% Alc. Vol",
      barrica: null,
      tmpReposo: "6 meses a 3 años",
    },
    organoleptica: {
      color: "Tonalidades cristalinas con hojuelas de plata Cristalino, brillante y natural.",
      aroma: "Fresco con delicadas notas de agave. Intensidad aromática media y carácter herbal.",
      gusto: "Amable y suave con notas cítricas evolucionando a notas tostadas y minerales. Larga permanencia en la boca."
    }
  },
  {
    foto: "img/productos/tequila_edicion_limitada_anejo_swarovski_750ml.jpg",
    nombre: "Tequila edición limitada añejo Swarovski 750ml",
    capacidad: "750 ml",
    precio: "$6,877.00 (c/u)",
    cantidad: "4 piezas",
    info: "100% Agave. (Pedido mínimo de una caja con 4 piezas)",
    especificos: {
      clase: "Añejo",
      graduacion: "40% Alc. Vol",
      barrica: "Roble Americano",
      tmpReposo: "6 meses a 3 años",
    },
    organoleptica: {
      color: "Ambar de alta intensidad, muy brillantes y con destellos de hojuelas de oro, es untuoso.",
      aroma: "Notas aromáticas marcadas a madera, agave cocido y frutos secos.",
      gusto: "Intenso y potente, con persistencia alta y buena intensidad. Con notas minerales y especias a canela, clavo y comino."
    }
  },
  {
    foto: "img/productos/tequila_edicion_limitada_extra_anejo_swarovski_750ml.jpg",
    nombre: "Tequila edición limitada extra añejo Swarovski 750ml",
    capacidad: "750 ml",
    precio: "$7,927.00 (c/u)",
    cantidad: "4 piezas",
    info: "100% Agave. (Pedido mínimo de una caja con 4 piezas)",
    especificos: {
      clase: "Extra Añejo",
      graduacion: "40% Alc. Vol",
      barrica: "Roble Americano",
      tmpReposo: "6 meses a 3 años",
    },
    organoleptica: {
      color: "Color Tabaco con tonalidades caoba y destellos de ambarino.",
      aroma: "Notas aromáticas marcadas a madera, especias, frutos secos y dulce. Con un cuerpo robusto.",
      gusto: "Recuerdos de frutos del bosque, cerezas, madera con persistencia media alta, resaltando la pimienta en el retrogusto elegante."
    }
  },
  {
    foto: "img/productos/mezcal_don_ramon.jpg",
    nombre: "Mezcal Don Ramón Jóven 750ml",
    capacidad: "750 ml",
    precio: "$860.00 (c/u)",
    cantidad: "6 piezas",
    info: "100% Agave. (Pedido mínimo de una caja con 6 piezas)",
    especificos: {
      clase: "Mezcal de Salmiana Premium",
      graduacion: "40% Alc. Vol",
      barrica: "tapón de corcho",
      tmpReposo: "6 meses",
    },
    organoleptica: {
      color: "Transparente brillante.",
      aroma: "Con notas ahumadas, frescas, herbales y sutilmente frutales, además de delicadas notas dulces.",
      gusto: "Sensación de suavidad al paladar que demuestra una agradable experiencia con una majestuosa permanencia en nuestra boca que deleita nuestros sentidos."
    }
  },
]
