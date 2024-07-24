var counter = 1;
setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 5000);

function prevSlide() {
    counter--;
    if (counter < 1) {
        counter = 4;
    }
    document.getElementById('radio' + counter).checked = true;
}

function nextSlide() {
    counter++;
    if (counter > 4) {
        counter = 1;
    }
    document.getElementById('radio' + counter).checked = true;
}
