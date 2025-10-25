/* Función para abrir el menú */
function openNav() {
    // Establece El Ancho Del Menu a 280px Para Postrarlo
    document.getElementById("mySidebar").style.width = "280px";
    // Empuja El Contenido Principal a La Derecha 
    document.getElementById("main-content").style.marginLeft = "280px";
}

/* Función Para Cerrar El Menú */
function closeNav() {
    // Restablece el ancho a 0 para ocultarlo
    document.getElementById("mySidebar").style.width = "0";
    // Devuelve el contenido principal a su posición original
    document.getElementById("main-content").style.marginLeft = "0";
}
document.addEventListener('DOMContentLoaded', () => {

// Opciones Para El Observador(Puedes Ajustar El Treshold)
    const options = {
    root: null, // Observa La Interaccion Con El Viewport
    rootMargin: '0px',
    threshold: 0.1 // Se Activa Cuando El 10% Del Elemento Sea Visible
    };
// La Funcion Que Se Ejecuta Cuando El Elemento Entra o Sale
    const callback = (entries, observer) => {
    entries.forEach(entry => {
    // Si El Elemento Esta En La Pantalla (Intersecting)
    if (entry.isIntersecting) {
        
    entry.target.classList.add('is-visible');// Actua Con La Clase 'is-visible" En CSS
        
    observer.unobserve(entry.target);//Deja De Observar El Elemento Una Vez Mostrado
    }
    });
};
    const observer = new IntersectionObserver(callback, options);// Crea El Observador

    const targets = document.querySelectorAll('.fade-in-section');// Selecciona Todos Los Elementos Que Quieres Animar

    targets.forEach(target => {
    observer.observe(target);// Le Dice Al Observador Que Vigile Cada Uno De Esos Elementos
});

});
