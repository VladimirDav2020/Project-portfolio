// Taggle menu
$(document).ready(function(){

    const menuToggle = document.querySelector('.toggle-menu');
    const mobMenu = document.querySelector('.nav-list');
    const overlaeyEl = document.querySelector('#overlay');
    const bodyEl = document.body;

    // Клик по иконке гамбургер
    menuToggle.addEventListener('click', function(){
        this.classList.toggle('active');
        mobMenu.classList.toggle('active');
        overlaeyEl.classList.toggle('active');
        bodyEl.classList.toggle('noscroll');
    });

    // Клик по мобильному меню
    mobMenu.addEventListener('click', function(){
        this.classList.remove('active');
        menuToggle.classList.remove('active');
        overlaeyEl.classList.remove('active');
        bodyEl.classList.remove('noscroll');
    });

    // Закрытие мобильного меню при клике по overlaey
    overlaeyEl.addEventListener('click', function(){
        this.classList.remove('active');
        menuToggle.classList.remove('active');
        mobMenu.classList.remove('active');
        bodyEl.classList.remove('noscroll');
    });

    // Закрытие мобильного меню при ресайзе
    window.addEventListener('resize', function(){
        mobMenu.classList.remove('active');
        menuToggle.classList.remove('active');
        overlaeyEl.classList.remove('active');
        bodyEl.classList.remove('noscroll');
    });

    // FORM PLACEHOLDER
    const formInputs = document.querySelectorAll('.form-field, .form-textarea');
    console.log(formInputs);
    for(let item of formInputs){
        const thisPlaceholder = item.nextElementSibling;
        console.log(thisPlaceholder);
    
        item.addEventListener('focus', function(){
            thisPlaceholder.classList.add('active');
        });
    
        item.addEventListener('blur', function(){
            if(item.value == ''){
                thisPlaceholder.classList.remove('active');
            } 
        });
    }

    // MixItUp3
    let containerEl = document.querySelector("#portfolio-project");

    let mixer = mixitup(containerEl, {
        classNames: {
            block: ""
        }
    });
});

// FORM VALIDATE
$('#contact-form').validate({
    rules: {
        email: {
            required: true,
            email: true
        },
        theme: {
            required: true
        },
        message: {
            required: true
        }
    },
    messages: {
        email: {
            required: 'Введите email',
            email: 'отсутсвует символ @'
        },
        theme: {
            required: 'Введите тему сообщения'
        },
        message: {
            required: 'Введите текст сообщения'
        }
    }
})



