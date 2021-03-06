
$(document).ready(function(){
    
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
