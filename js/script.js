 n = 500;
 min = 100;
 max = 999;

 window.onload = function(){
    newSong();
    var p = document.getElementById("numbers");
    var numbers = [];
    for (var i = 0; i < n - 1; i++){ 
        span = document.createElement("span");
        numbers.push(span);
        p.appendChild(span); 
    }
    setStartingNumbers(numbers);
    setInterval(function(){ bubleStep(numbers); }, 50);
 }

function bubleStep(numbers){

    var swapped = false;
    for (var i = 0; i < n - 2; i++) {
        var a = parseInt(numbers[i].innerHTML);
        var b = parseInt(numbers[i+1].innerHTML)
        if ( a > b) {
            numbers[i].innerHTML = b;
            numbers[i+1].innerHTML = a;
            swapped = true;
        }
    }

    if (!swapped){
        setStartingNumbers(numbers);
        newSong();
    }
}

function setStartingNumbers(numbers){
    for (var i = 0; i < n - 1; i++){ numbers[i].innerHTML = Math.round(Math.random() * (max - min) + min); }
}

function newSong(){
    var songContainer = document.getElementById("song-container");
    var newSong = document.createElement("iframe");
    newSong.src = "https://www.youtube.com/embed/EyKMPXqKlFk?autoplay=1";
    songContainer.appendChild(newSong);
}
