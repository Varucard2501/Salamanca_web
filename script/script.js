/* Script para la galería de Títulos */

function openModal(imgElement) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    modal.style.display = "block";
    modalImg.src = imgElement.src;
    document.body.style.overflow = "hidden"; // Oculta el scroll del body mientras el modal esté abierto
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
    document.body.style.overflow = ""; // Habilita el scroll del body nuevamente al cerrar el modal
}