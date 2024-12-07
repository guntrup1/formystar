// Функция для анимации счёта
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const duration = 8000; // 8 секунд
        const increment = target / (duration / 20);

        let count = 0;
        const updateCounter = () => {
            count += increment;
            if (count < target) {
                counter.innerText = Math.floor(count);
                setTimeout(updateCounter, 20);
            } else {
                counter.innerText = target;
            }
        };
        updateCounter();
    });
}

// Плавное появление текста
window.addEventListener('load', () => {
    document.querySelector('.content').classList.add('loaded');
    setTimeout(() => {
        animateCounters();
    }, 500); // Небольшая задержка перед началом счёта

    // Плавное появление кнопки после завершения счёта
    setTimeout(() => {
        document.querySelector('.next-button-container').classList.add('visible');
    }, 12000); // 8 секунд для счёта + 0.5 секунд
});

document.getElementById('next-button').addEventListener('click', () => {
    const overlay = document.getElementById('overlay-screen');
    const message = document.getElementById('continuation-message');
  
    // Плавное побеление экрана
    overlay.style.opacity = '1';
  
    // Задержка для появления текста
    setTimeout(() => {
        message.style.display = 'block';
        message.style.display = 'flex !important';
    }, 1000); // Задержка в 1 секунду
  });
  