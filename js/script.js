

document.addEventListener("DOMContentLoaded", () => {
  const line1 = document.getElementById("line1");
  const line2 = document.getElementById("line2");
  const line3 = document.getElementById("line3");
  const button = document.getElementById("start-btn");
  const preloader = document.getElementById("preloaders");
  const mainWrapper = document.getElementById("main");
  const mainContent = document.getElementById("main-content");

  const showText = (element, text, delay) => {
      return new Promise(resolve => {
          setTimeout(() => {
              element.textContent = text;
              resolve();
          }, delay);
      });
  };

  const playPreloader = async () => {
      await showText(line1, "Каждая история имеет начало и конец", 1000);
      await showText(line2, "но эта повесть не имеет срока годности,", 1500);
      await showText(line3, "у нее было, и будет лишь начало ...", 2500);
      
      // Ждем 2 секунды после показа текста, прежде чем показать кнопку
      setTimeout(() => {
          button.style.display = 'inline-block';
          button.style.opacity = 1;
          button.style.animation = 'fadeInButton 1s ease forwards';
      }, 2000);
  };

  button.addEventListener("click", () => {

      preloader.style.opacity = 0;
      setTimeout(() => {
            mainWrapper.style.position = 'reletive'
          preloader.style.display = 'none';
          mainContent.style.display = 'inline-block';
          mainContent.style.opacity = 1;
      }, 1000);
  });

  playPreloader();
});








document.querySelector('.dairy').addEventListener('click', function() {
    document.querySelector('.hands_with_dayri').classList.toggle('show');
});

document.querySelector('.note').addEventListener('click', function() {
  document.querySelector('.hands_with_dayri_paper').classList.toggle('show');
});

document.getElementById('start-btn').addEventListener('click', function() {
    var audio = document.getElementById('nightfire');
    audio.play();
});


// звук книги

// Находим элемент с классом dairy
let dairyElement = document.querySelector('.dairy');

// Переменная для отслеживания количества нажатий
let isFirstClick = true;

// Добавляем обработчик нажатия
dairyElement.addEventListener('click', function() {
    if (isFirstClick) {
        // Воспроизводим звук openbook
        document.getElementById('openbook').play();
        isFirstClick = false;  // Переключаем флаг
    } else {
        // Воспроизводим звук putbook
        document.getElementById('putbook').play();
        isFirstClick = true;  // Переключаем флаг обратно
    }
});

////
////
const dairy = document.getElementById('dairy');
const dairyForm = document.getElementById('dairy_form');
const noteForm = document.getElementById('note');
const dairyNote = document.getElementById('hands_with_dayri_paper');
const noteButton = document.getElementById('note');
////
///
////
document.getElementById('checkForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Останавливаем отправку формы
    
    const dateInput = document.getElementById('date').value;
    const nicknameInput = document.getElementById('nickname').value;
    const pinInput = document.getElementById('pin').value;
  
    // Функция показа сообщения об ошибке
    function showError(message) {
      let errorMessage = document.createElement('div');
      errorMessage.id = 'error-message';
      errorMessage.innerText = message;
      document.body.appendChild(errorMessage);
      
      // Показываем сообщение
      setTimeout(() => {
        errorMessage.style.right = '20px'; // Появляется с правой стороны
      }, 100);
      
      // Убираем сообщение через 4 секунды
      setTimeout(() => {
        errorMessage.style.right = '-300px'; // Уходит вправо
        setTimeout(() => {
          errorMessage.remove(); // Удаляем элемент после анимации
        }, 500); 
      }, 2000);
    }
  
    // Валидация даты
    if (dateInput !== '2023-12-09') {
      showError('подумай лучше солнышко');
      return; // Прерываем выполнение, если валидация не прошла
    }
  
    // Валидация ласкового имени
    if (!['Звездочка', 'звездочка', 'littlestar'].includes(nicknameInput)) {
      showError('подумай лучше солнышко');
      return;
    }
  
    // Валидация пинкода
    if (pinInput !== '4078') {
      showError('подумай лучше солнышко');
      return;
    }
  
    // Если все условия выполнены
    const block1 = document.querySelector('.block1');
    const ex_list =  document.getElementById('ex_list');

    if (block1) {
      // block1.classList.add('fade-out'); // Добавляем класс для плавного исчезновения
      // setTimeout(() => {
      //   block1.classList.add('hidden'); // Удаляем элемент после исчезновения
      // }, 1000); // Ждем завершения анимации

      dairyForm.classList.remove('show'); // Добавляем класс для плавного исчезновения
      ex_list.classList.add('show'); // Добавляем класс для плавного исчезновения
    }
  
    // Останавливаем все звуки
    // const audios = document.querySelectorAll('audio');
    // audios.forEach(audio => audio.pause());
  });
  const ex_list =  document.getElementById('ex_list');
  const sandwich_receipt = document.getElementById('sandwich_receipt');
  document.getElementById('sendwich-receipt_link').addEventListener('click', function (event) {
    document.getElementById('putbook').play();
    ex_list.classList.remove('show');
    document.getElementById('openbook').play();
    sandwich_receipt.classList.add('show');
  });

  const sandwich_receipt_linkbutton = document.getElementById('sandwich_receipt_linkbutton');
  document.getElementById('sandwich_receipt_linkbutton').addEventListener('click', function (event) {
    document.getElementById('putbook').play();
    sandwich_receipt.classList.remove('show');
    // document.getElementById('openbook').play();
    // sandwich_receipt.classList.add('show');
  });
  
  // Получаем элементы по id


noteForm.addEventListener('click', function() {
  if (isFirstClick) {
      // Воспроизводим звук openbook
      document.getElementById('openbook').play();
      isFirstClick = false;  // Переключаем флаг
  } else {
      // Воспроизводим звук putbook
      document.getElementById('openbook').play();
      isFirstClick = true;  // Переключаем флаг обратно
  }
});


dairy.addEventListener('click', function() {
  if (dairyNote.classList.contains('show')) {
    dairyNote.classList.remove('show');
  }
  

});

noteForm.addEventListener('click', function() {
  if (dairyForm.classList.contains('show')) {
    dairyForm.classList.remove('show');
  }
  
  
});

////////////


// Текст, который будет печататься
const text = "После такого перекуса можно и цветочки пособирать ;3";
const animatedText = document.getElementById("customAnimatedText");
const overlay = document.getElementById("customOverlay");
let index = 0;

// Функция печати текста
function typeText() {
    if (index < text.length) {
        animatedText.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 100);
    }
}

// Функция показа плашки и запуска печати текста
function showOverlay() {
    overlay.classList.add("visible"); // Плавное появление
    index = 0;
    animatedText.textContent = ""; // Очищаем текст перед анимацией
    setTimeout(typeText, 500); // Задержка перед началом печати
}

// Обработчик клика по кнопке для показа плашки
document.getElementById("sandwich_receipt_linkbutton").addEventListener("click", showOverlay);

// // Обработчик клика по кнопке "Пойти на полянку" (если нужно закрыть плашку)
// document.getElementById("goToFieldButton").addEventListener("click", () => {
//     overlay.classList.remove("visible"); // Скрытие плашки
// });



