let contenedor = document.querySelector('.contenedor-ofertas');
for (const oferta of listadoOfertas) {
    contenedor.innerHTML += `<div class="busqueda">
    <span>Zona: ${oferta.zona}<br>Categoria: ${oferta.categoria}<br>Observaciones: ${oferta.observaciones}<br></span>
    <img src="${oferta.imgUrl}" alt="img-mapa" class="img-mapa">
    <button type="submit" class="btn">Postular</button>
</div>`
}

let botones = document.querySelectorAll('.btn');

botones.forEach(boton => {
    boton.addEventListener('click', function () {
        let divs = document.querySelector('.postular-form');
        divs.classList.toggle('postular-form')
        divs.classList.toggle('postular-form-dos');
    })
})

let botonCross = document.querySelector('#cross');
botonCross.addEventListener('click', function () {
    let divs = document.querySelector('.postular-form-dos');
    divs.classList.toggle('postular-form');
    divs.classList.toggle('postular-form-dos');
})
let botonEnviar = document.querySelector('.enviar');
botonEnviar.addEventListener('click', function () {
    let divs = document.querySelector('.postular-form-dos');
    divs.classList.toggle('postular-form');
    divs.classList.toggle('postular-form-dos');
})