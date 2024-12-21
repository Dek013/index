document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.register-btn');

    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = '#54C0FE';
        });

        button.addEventListener('mouseout', () => {
            button.style.backgroundColor = '#002A4C';
        });
    });

    const headings = document.querySelectorAll('h2, h3');
    const paws = document.querySelectorAll('.paw');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 1s ease-out forwards';
            } else {
                entry.target.style.animation = 'none';
            }
        });
    }, {
        threshold: 0.5 // Анимация запускается, когда 50% заголовка становятся видимыми
    });

    headings.forEach(heading => {
        observer.observe(heading);
    });

    const pawObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 1s forwards';
                entry.target.style.animationDelay = entry.target.dataset.delay + 's';
            } else {
                entry.target.style.animation = 'none';
            }
        });
    }, {
        threshold: 0.5 // Анимация запускается, когда 50% лапки становятся видимыми
    });

    paws.forEach(paw => {
        pawObserver.observe(paw);
    });


    ymaps.ready(init);

    function init() {
        // Создаем карту
        const map = new ymaps.Map("map", {
            center: [55.751574, 37.573856], // Центр карты (Москва)
            zoom: 10, // Масштаб карты
            controls: ['zoomControl', 'fullscreenControl'], // Элементы управления
        });
    
        // Массив точек с координатами, описаниями и иконками
        const points = [
            { 
                coords: [55.751574, 37.573856], 
                description: "Первая точка: Москва",
                icon: "img/иконка_карта.png" // Путь к вашему изображению иконки
            },
            { 
                coords: [55.761574, 37.583856], 
                description: "Вторая точка",
                icon: "img/иконка_карта.png" 
            },
            { 
                coords: [55.741574, 37.553856], 
                description: "Третья точка",
                icon: "img/иконка_карта.png" 
            },
            { 
                coords: [55.731574, 37.593856], 
                description: "Четвертая точка",
                icon: "img/иконка_карта.png" 
            },
            { 
                coords: [55.721574, 37.573856], 
                description: "Пятая точка",
                icon: "img/иконка_карта.png" 
            },
        ];
    
        // Добавляем метки на карту
        points.forEach(point => {
            const placemark = new ymaps.Placemark(point.coords, {
                hintContent: point.description,
                balloonContent: point.description,
            }, {
                iconLayout: 'default#image', // Указываем, что будет использоваться изображение
                iconImageHref: point.icon, // Путь к изображению
                iconImageSize: [30, 25], // Размер иконки (ширина и высота)
                iconImageOffset: [-15, -42] // Смещение иконки относительно точки (чтобы "остриё" метки было на месте)
            });
    
            map.geoObjects.add(placemark); // Добавляем метку на карту
        });
    }
    
        // Бургер меню
        const menuToggle = document.getElementById('menu-toggle');
        const closeMenu = document.getElementById('close-menu');
        const overlayMenu = document.getElementById('menu');
        
        menuToggle.addEventListener('click', function() {
            overlayMenu.style.display = 'block';
            document.body.classList.add('menu-open');
        });
        
        closeMenu.addEventListener('click', function() {
            overlayMenu.style.display = 'none';
            document.body.classList.remove('menu-open');
        });
        
        // Закрытие меню при нажатии клавиши Esc
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && overlayMenu.style.display === 'block') {
                overlayMenu.style.display = 'none';
                document.body.classList.remove('menu-open');
            }
        });
});