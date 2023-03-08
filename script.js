const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function () {
    this.classList.toggle('is-active');
});

var button = document.getElementById('button');

button.onclick = function() {
    var div = document.getElementById('menu');
    if (div.style.display !== 'flex') {
        div.style.display = 'flex';
        div.style.flexDirection = 'column';
        div.style.float = 'left';
    }
    else {
        div.style.display = 'none';
        div.style.flexDirection = 'none';
        div.style.float = 'none';
    }
};