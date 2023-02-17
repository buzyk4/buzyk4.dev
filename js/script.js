
// Side menu buttons 

document.querySelector('.burger-button').addEventListener('click', function () {
    document.querySelector('.animated-icon').classList.toggle('open');
    document.querySelector('.menu-container').classList.toggle('open');
});

//test

function changeColor(color)
{
    var text = document.getElementById('test');
    
    text.style.color = color
}