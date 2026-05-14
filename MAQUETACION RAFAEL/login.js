const formulario = document.getElementById('formularioLogin');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const u = document.getElementById('usuario').value;
    const p = document.getElementById('contrasena').value;

    if (u === "RAFAEL" && p === "12345") {
        alert("HOLA RAFITA!");
        window.location.href = "www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1";
    } else {
        alert("CONTRASEÑA O USUARIO MAL, INTENTA OTRA VEZ");
    }
});