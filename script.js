document.getElementById("reloadBtn").addEventListener("click", nuevaImagen);

function nuevaImagen() {
  const img = document.getElementById("randomImage");
  // Se agrega timestamp para evitar caché y forzar nueva imagen
  img.src = "https://picsum.photos/400/250?random=" + Date.now();
}
