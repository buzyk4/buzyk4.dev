// Function for window.onload content

function mainInit() {

    popupFunction()
}

// Side menu buttons 

document.querySelector('.burger-button').addEventListener('click', function () {
    document.querySelector('.animated-icon').classList.toggle('open');
    document.querySelector('.menu-container').classList.toggle('open');
});

function popupFunction() {
    const popup_btns = document.querySelectorAll('.popup-button');

    popup_btns.forEach(button => {
        button.addEventListener('click', e => {
            const target = e.target.dataset.target;

            const popup_el = document.querySelector(target);
            if (popup_el != null) {
                popup_el.classList.toggle('is-active');
            }
        })
    })
}

