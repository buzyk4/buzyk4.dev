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

const form = document.querySelector('#contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = form.querySelector('#name').value;
  const email = form.querySelector('#email').value;
  const message = form.querySelector('#message').value;

  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/send-email');
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.onload = () => {
    if (xhr.status === 200) {
      alert('Email sent successfully!');
      form.reset();
    } else {
      alert('There was a problem sending the email.');
    }
  };
  xhr.send(JSON.stringify({ name, email, message }));
});