

// Координаты цветов
const flowerPositions = [
    {top: '80%', left: '10%'},
    {top: '85%', left: '30%'},
    {top: '50%', left: '40%'},
    {top: '70%', left: '60%'},
    {top: '45%', left: '60%'},
    {top: '52%', left: '80%'},
    {top: '53%', left: '20%'}
];

let flowersCollected = 0;

// Добавляем цветы на страницу
flowerPositions.forEach((position, index) => {
    const flower = document.createElement('img');
    flower.src = './img/png/flower.png'; // Путь к картинке цветка
    flower.classList.add('flower');
    flower.style.top = position.top;
    flower.style.left = position.left;
    flower.style.width = '100px'; // Размер цветка
    flower.style.height = 'auto';
    flower.style.opacity = 1;

    const isReflected = Math.random() < 0.5;
    if (isReflected) {
        flower.style.transform = 'scaleX(-1)';
    }

    document.body.appendChild(flower);

    flower.addEventListener('click', () => {
        flower.style.opacity = 0; // Плавное исчезновение
        flowersCollected++;

        if (flowersCollected === flowerPositions.length) {
            showCharacterAndDialogue(); // Показать зверенка и диалог
        }
    });
});

function showCharacterAndDialogue() {
    const characterImage = document.getElementById('characterImage');
    const dialogueBox = document.getElementById('dialogueBox');
    const nextButton = document.getElementById('nextButton');

    characterImage.style.display = 'block';
    dialogueBox.style.display = 'block';

    // Плавное проявление зверенка и плашки
    setTimeout(() => {
        characterImage.style.opacity = 1;
        dialogueBox.style.opacity = 1;
    }, 100); // Небольшая задержка перед проявлением

    // Эффект печатания текста
    const dialogueText = "Привет, пупсик! Я тут гулял и наткнулся на необычный блокнот с милой фотографией. Потом пошел на свою любимую полянку с картофельными цветами, а ты, оказывается, их все уже сорвала. Давай так: я тебе отдаю блокнот — ты ведь похожа на девочку с обложки — а ты мне взамен подаришь картофельные цветочки. Идет?";
    let currentText = "";
    let index = 0;

    const typingInterval = setInterval(() => {
        if (index < dialogueText.length) {
            currentText += dialogueText[index];
            document.getElementById('dialogueText').textContent = currentText;
            index++;
        } else {
            clearInterval(typingInterval);
            nextButton.style.display = 'block';
            setTimeout(() => {
                nextButton.style.opacity = 1; // Плавное появление кнопки
            }, 100);
        }
    }, 50);
}

document.getElementById('nextButton').addEventListener('click', () => {
    const dialogueBox = document.getElementById('dialogueBox');
    const characterImage = document.getElementById('characterImage');
    const nextButton = document.getElementById('nextButton');

    // Плавное исчезновение всех элементов
    nextButton.style.opacity = 0;
    dialogueBox.style.opacity = 0;
    characterImage.style.opacity = 0;

    setTimeout(() => {
        nextButton.style.display = 'none';
        dialogueBox.style.display = 'none';
        characterImage.style.display = 'none';
        showNotebook(); // Показать блокнот
    }, 1000); // Ожидание завершения анимации исчезновения
});

function showNotebook() {
    const notebookImage = document.getElementById('notebookImage');
    notebookImage.style.display = 'block';

    // Плавное увеличение и проявление блокнота
    setTimeout(() => {
        notebookImage.style.opacity = 1;
        notebookImage.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 100);

    notebookImage.addEventListener('click', () => {
        notebookImage.style.opacity = 0;
        setTimeout(() => {
            notebookImage.style.display = 'none';
        }, 1000);
    });
}


function showPuzzlesWrapper() {
    const puzzlesWrapper = document.querySelector('.pzzles_wrappers');
    puzzlesWrapper.style.display = 'block';
    
    // Плавное появление в центре экрана
    setTimeout(() => {
        puzzlesWrapper.style.opacity = 1;
        puzzlesWrapper.style.transform = 'translate(-50%, -30%)'; // Центрируем блок
    }, 100);
}
function showNotebook() {
    const notebookImage = document.getElementById('notebookImage');
    notebookImage.style.display = 'block';

    setTimeout(() => {
        notebookImage.style.opacity = 1;
        notebookImage.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 100);

    notebookImage.addEventListener('click', () => {
        notebookImage.style.opacity = 0;

        // После исчезновения блокнота показываем пазлы
        setTimeout(() => {
            notebookImage.style.display = 'none';
            showPuzzlesWrapper(); // Показываем блок пазлов
        }, 1000);
    });
}




//////////////////////
const piecesContainer = document.getElementById('pieces-container');
const slots = document.querySelectorAll('.puzzle-slot');
const resetButton = document.getElementById('reset');
const checkButton = document.getElementById('check');
const successMessage = document.getElementById('success-message');
let draggedPiece = null;

// Набор картинок для каждого уровня
const puzzleSets = [
    [
        { src: '/pazzle/pazzle1/pazl1_part1.jpg', className: 'pazl1_part1' },
        { src: '/pazzle/pazzle1/pazl1_part2.jpg', className: 'pazl1_part2' },
        { src: '/pazzle/pazzle1/pazl1_part3.jpg', className: 'pazl1_part3' },
        { src: '/pazzle/pazzle1/pazl1_part4.jpg', className: 'pazl1_part4' },
        { src: '/pazzle/pazzle1/pazl1_part5.jpg', className: 'pazl1_part5' },
        { src: '/pazzle/pazzle1/pazl1_part6.jpg', className: 'pazl1_part6' },
        { src: '/pazzle/pazzle1/pazl1_part7.jpg', className: 'pazl1_part7' },
        { src: '/pazzle/pazzle1/pazl1_part8.jpg', className: 'pazl1_part8' },
        { src: '/pazzle/pazzle1/pazl1_part9.jpg', className: 'pazl1_part9' }
    ],
    [
        { src: '/pazzle/pazzle2/pazl2_part1.jpg', className: 'pazl1_part1' },
        { src: '/pazzle/pazzle2/pazl2_part2.jpg', className: 'pazl1_part2' },
        { src: '/pazzle/pazzle2/pazl2_part3.jpg', className: 'pazl1_part3' },
        { src: '/pazzle/pazzle2/pazl2_part4.jpg', className: 'pazl1_part4' },
        { src: '/pazzle/pazzle2/pazl2_part5.jpg', className: 'pazl1_part5' },
        { src: '/pazzle/pazzle2/pazl2_part6.jpg', className: 'pazl1_part6' },
        { src: '/pazzle/pazzle2/pazl2_part7.jpg', className: 'pazl1_part7' },
        { src: '/pazzle/pazzle2/pazl2_part8.jpg', className: 'pazl1_part8' },
        { src: '/pazzle/pazzle2/pazl2_part9.jpg', className: 'pazl1_part9' }
    ],
    [
        { src: '/pazzle/pazzle3/pazl3_part1.jpg', className: 'pazl1_part1' },
        { src: '/pazzle/pazzle3/pazl3_part2.jpg', className: 'pazl1_part2' },
        { src: '/pazzle/pazzle3/pazl3_part3.jpg', className: 'pazl1_part3' },
        { src: '/pazzle/pazzle3/pazl3_part4.jpg', className: 'pazl1_part4' },
        { src: '/pazzle/pazzle3/pazl3_part5.jpg', className: 'pazl1_part5' },
        { src: '/pazzle/pazzle3/pazl3_part6.jpg', className: 'pazl1_part6' },
        { src: '/pazzle/pazzle3/pazl3_part7.jpg', className: 'pazl1_part7' },
        { src: '/pazzle/pazzle3/pazl3_part8.jpg', className: 'pazl1_part8' },
        { src: '/pazzle/pazzle3/pazl3_part9.jpg', className: 'pazl1_part9' }
    ],
    [
        { src: '/pazzle/pazzle4/pazl4_part1.jpg', className: 'pazl1_part1' },
        { src: '/pazzle/pazzle4/pazl4_part2.jpg', className: 'pazl1_part2' },
        { src: '/pazzle/pazzle4/pazl4_part3.jpg', className: 'pazl1_part3' },
        { src: '/pazzle/pazzle4/pazl4_part4.jpg', className: 'pazl1_part4' },
        { src: '/pazzle/pazzle4/pazl4_part5.jpg', className: 'pazl1_part5' },
        { src: '/pazzle/pazzle4/pazl4_part6.jpg', className: 'pazl1_part6' },
        { src: '/pazzle/pazzle4/pazl4_part7.jpg', className: 'pazl1_part7' },
        { src: '/pazzle/pazzle4/pazl4_part8.jpg', className: 'pazl1_part8' },
        { src: '/pazzle/pazzle4/pazl4_part9.jpg', className: 'pazl1_part9' }
    ],
    [
        { src: '/pazzle/pazzle5/pazl5_part1.jpg', className: 'pazl1_part1' },
        { src: '/pazzle/pazzle5/pazl5_part2.jpg', className: 'pazl1_part2' },
        { src: '/pazzle/pazzle5/pazl5_part3.jpg', className: 'pazl1_part3' },
        { src: '/pazzle/pazzle5/pazl5_part4.jpg', className: 'pazl1_part4' },
        { src: '/pazzle/pazzle5/pazl5_part5.jpg', className: 'pazl1_part5' },
        { src: '/pazzle/pazzle5/pazl5_part6.jpg', className: 'pazl1_part6' },
        { src: '/pazzle/pazzle5/pazl5_part7.jpg', className: 'pazl1_part7' },
        { src: '/pazzle/pazzle5/pazl5_part8.jpg', className: 'pazl1_part8' },
        { src: '/pazzle/pazzle5/pazl5_part9.jpg', className: 'pazl1_part9' }
    ]
];

let currentPuzzleIndex = 0;

// Правильный порядок классов для проверки
const classOrder = [
    'pazl1_part1', 'pazl1_part2', 'pazl1_part3',
    'pazl1_part4', 'pazl1_part5', 'pazl1_part6',
    'pazl1_part7', 'pazl1_part8', 'pazl1_part9'
];

// Перемешивание массива
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Создание кусочков пазла
function createPuzzlePieces() {
    piecesContainer.innerHTML = '';
    const shuffledImages = [...puzzleSets[currentPuzzleIndex]];
    shuffle(shuffledImages);

    shuffledImages.forEach(image => {
        const piece = document.createElement('div');
        piece.classList.add('puzzle-piece', image.className);
        piece.style.backgroundImage = `url(${image.src})`;
        piece.draggable = true;
        piece.addEventListener('dragstart', dragStart);
        piecesContainer.appendChild(piece);
    });
}

// Обработчик начала перетаскивания
function dragStart(event) {
    draggedPiece = event.target;
}

// Добавляем события для слотов
slots.forEach(slot => {
    slot.addEventListener('dragover', event => event.preventDefault());
    slot.addEventListener('drop', drop);
});

function drop(event) {
    if (event.target.classList.contains('puzzle-slot') && !event.target.hasChildNodes()) {
        event.target.appendChild(draggedPiece);
        checkPuzzleCompletion();
    }
}

// Проверка завершения пазла
function checkPuzzleCompletion() {
    const allFilled = [...slots].every(slot => slot.hasChildNodes());
    checkButton.disabled = !allFilled;
}

// Проверка правильности сборки
checkButton.addEventListener('click', () => {
    const isCorrect = [...slots].every((slot, index) => {
        const piece = slot.firstChild;
        return piece && piece.classList.contains(classOrder[index]);
    });

    if (isCorrect) handleCorrectPuzzle();
    else showError("Подумай лучше, солнышко");
});

// Функция обработки правильного пазла
function handleCorrectPuzzle() {
    const puzzlesWrapper = document.querySelector('.pzzles_wrappers');
    currentPuzzleIndex++;
    if (currentPuzzleIndex < puzzleSets.length) {
        console.log(currentPuzzleIndex);
        checkButton.disabled = true; // Отключаем кнопку проверки
            // Возвращаем кусочки в исходный контейнер
        slots.forEach(slot => {
            if (slot.firstChild) {
                piecesContainer.appendChild(slot.firstChild);
            }
        });
        createPuzzlePieces(); // Перемешиваем картинки, классы остаются фиксированными!
    } else {
       
        puzzlesWrapper.style.opacity = '0';
        puzzlesWrapper.style.transform = "translate(-50%, 100%)";
        setTimeout(() => {
            showSuccessButton();
        }, 500);

    }
}

// Сброс пазла
resetButton.addEventListener('click', () => {

    checkButton.disabled = true; // Отключаем кнопку проверки

    // Возвращаем кусочки в исходный контейнер
    slots.forEach(slot => {
        if (slot.firstChild) {
            piecesContainer.appendChild(slot.firstChild);
        }
    });

    createPuzzlePieces(); // Перемешиваем картинки, классы остаются фиксированными!
});

// Инициализация
createPuzzlePieces();



// Показать сообщение об ошибке
function showError(message) {
    let errorMessage = document.createElement('div');
    errorMessage.id = 'error-message';
    errorMessage.innerText = message;
    document.body.appendChild(errorMessage);

    setTimeout(() => errorMessage.style.right = '20px', 100);
    setTimeout(() => {
        errorMessage.style.right = '-300px';
        setTimeout(() => errorMessage.remove(), 500);
    }, 2000);
}
const successButton = document.createElement('a');
// Показать кнопку "Вспомнить все"


function addShowSuccessButtonOpacity() {
    const success_button = document.getElementById('success-button');
    success_button.style.opacity = "1"
}

function showSuccessButton() {
    piecesContainer.innerHTML = '';
    successButton.href = '/stat.html'
    successButton.style.opacity = "0"
    successButton.innerText = "Вспомнить все";
    successButton.id = "success-button";
    successButton.style.position = "absolute";
    successButton.style.top = "50%";
    successButton.style.left = "50%";
    successButton.style.transform = "translate(-50%, -50%)";
    successButton.style.zIndex = "100";
    document.body.appendChild(successButton);

    
    setTimeout(() => {
        addShowSuccessButtonOpacity();
    }, 500);
}


// Инициализация игры
createPuzzlePieces();


document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("preloader-video");
    const preloader = document.getElementById("video-preloader");
    const mainContent = document.getElementById("filed_wrapper");

    // Когда видео заканчивается
    video.addEventListener("ended", () => {
        video.pause(); // Остановить видео на последнем кадре
        preloader.style.opacity = "0"; // Плавное исчезновение прелоадера

        // После завершения анимации скрыть прелоадер и показать контент
        setTimeout(() => {
            preloader.style.display = "none"; // Полностью скрыть прелоадер
            mainContent.style.opacity = "1";  // Плавное появление основного контента
        }, 1000); // Задержка соответствует длительности transition в CSS
    });

    // Запуск видео
    video.play();
});


///////////////


const audio = new Audio('./img/sound/garden.mp3'); // замените 'your-sound-file.mp3' на путь к вашему аудиофайлу
audio.loop = true; // Устанавливаем зацикливание

// Флаг для отслеживания состояния аудио
let isPlaying = false;

// Функция для запуска аудио при клике
document.querySelectorAll('.flower').forEach(element => {
    element.addEventListener('click', () => {
        if (!isPlaying) {
            audio.play();  // Запускаем аудио
            isPlaying = true;  // Обновляем состояние
        }
    });
});