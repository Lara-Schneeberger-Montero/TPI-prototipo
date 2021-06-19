let contenedor = document.querySelector('.contenedor');
let opcionOferta = document.querySelector('option.opt-oferta');
let opcionSoli = document.querySelector('option.opt-soli');
let opcionPorDefecto = document.querySelector('option.porDefecto');
opcionPorDefecto.addEventListener('click', function () {
    let espacioDisp = document.querySelector('.espace');
    espacioDisp.classList.add('espacio');
    let observaciones = document.querySelector('.coments');
    observaciones.classList.add('comentarios');
    let cateogia = document.querySelector('.vol');
    cateogia.classList.add('volumen');
    let franjaHoraria = document.querySelector('.hours');
    franjaHoraria.classList.add('franja-horaria');
    let texto = document.querySelector('.txtPic');
    texto.classList.add('textoFoto');
    let archivoFoto = document.querySelector('.pic');
    archivoFoto.classList.add('foto');
})
opcionOferta.addEventListener('click', function () {
    let espacioDisp = document.querySelector('.espace');
    espacioDisp.classList.toggle('espacio');
    let observaciones = document.querySelector('.coments');
    observaciones.classList.toggle('comentarios');
    let cateogia = document.querySelector('.vol');
    cateogia.classList.add('volumen');
    let franjaHoraria = document.querySelector('.hours');
    franjaHoraria.classList.add('franja-horaria');
    let texto = document.querySelector('.txtPic');
    texto.classList.add('textoFoto');
    let archivoFoto = document.querySelector('.pic');
    archivoFoto.classList.add('foto');
})
opcionSoli.addEventListener('click', function() {
    let espacioDisp = document.querySelector('.espace');
    espacioDisp.classList.add('espacio');
    let observaciones = document.querySelector('.coments');
    observaciones.classList.add('comentarios');
    let cateogia = document.querySelector('.vol');
    cateogia.classList.toggle('volumen');
    let franjaHoraria = document.querySelector('.hours');
    franjaHoraria.classList.toggle('franja-horaria');
    let texto = document.querySelector('.txtPic');
    texto.classList.toggle('textoFoto');
    let archivoFoto = document.querySelector('.pic');
    archivoFoto.classList.toggle('foto');
});