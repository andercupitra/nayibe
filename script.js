window.onload = function() {
    const moon = document.querySelector('.moon');
    const message1 = document.getElementById('message1');
    const message2 = document.getElementById('message2');
    const message3 = document.getElementById('message3');

    moon.style.transform = 'translate(150vw, -50%)';  // Mueve la luna de izquierda a derecha

    setTimeout(() => {
        moon.style.opacity = 0;  // Desvanece la luna después de cruzar la pantalla
    }, 5000);

    setTimeout(() => {
        message1.style.opacity = 1;
    }, 5500);

    setTimeout(() => {
        message1.style.opacity = 0;
        message2.style.opacity = 1;
    }, 10000);

    setTimeout(() => {
        message2.style.opacity = 0;
        message3.style.opacity = 1;
    }, 14500);
}

