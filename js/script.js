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

function sendEmail(event) {
	event.preventDefault();

	// Get the input values
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var subject = document.getElementById("subject").value;
	var message = document.getElementById("message").value;

	// Create the email body
	var body = "Name: " + name + "\r\n";
	body += "Email: " + email + "\r\n";
	body += "Subject: " + subject + "\r\n";
	body += "Message: " + message;

	// Send the email using the user's email client
	window.location.href = "mailto:buzyka99@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
}