// Adicionando efeito de hover mais interativo nas imagens
const images = document.querySelectorAll('.gallery-item img');

images.forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.transform = "scale(1.1)";
    });

    img.addEventListener('mouseout', () => {
        img.style.transform = "scale(1)";
    });
});

const balloonContainer = document.querySelector('.balloon-container');
const maxBalloons = 10;
let currentBalloons = 0;
let balloonInterval = setInterval(createBalloon, 500);

function createBalloon() {
    if (currentBalloons < maxBalloons) {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');

        balloon.style.left = Math.random() * balloonContainer.offsetWidth - balloon.offsetWidth / 2 + 'px';
        balloon.style.opacity = 0;

        balloonContainer.appendChild(balloon);

        setTimeout(() => {
            balloon.style.opacity = 1;
        }, Math.random() * 1000);

        setTimeout(() => {
            balloon.remove();
        }, 10000);

        currentBalloons++;

        if (currentBalloons >= maxBalloons) {
            clearInterval(balloonInterval);
        }
    }
}

window.onload = () => {
    // Se você quiser que os balões comecem a aparecer após um tempo,
    // você pode usar setTimeout() aqui:
    // setTimeout(startBalloons, 5000); // Começa após 5 segundos
    startBalloons();
};
