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
        var b = parseInt(numbers[i+1].innerHTML);
        if (a > b) {
            numbers[i].innerHTML = b;
            numbers[i+1].innerHTML = a;
            swapped = true;

            if (a === 420) {
                numbers[i+1].className = "spin";
            }
            else {
                numbers[i+1].className = "";
            }
            if (b === 420) {
                numbers[i].className = "spin";
            }
            else {
                numbers[i].className = "";
            }
        }
    }

    if (!swapped){
        setStartingNumbers(numbers);
        newSong();
        bubleBubleToilAndTrouble();
    }
}

function bubleBubleToilAndTrouble()/* loads a new random gif into the background element */{
  var newGif = document.createElement("img");
  newGif.className = "buble_";
  var juicyGifs = ['css/buble.gif', 'css/buble2.gif', 'css/buble3.gif', 'css/buble4.gif'];  // define list of gifs
  newGif.src = juicyGifs[parseInt(Math.random() * juicyGifs.length)];                       // select a random gif
  document.getElementById("background").appendChild(newGif);
}

function setStartingNumbers(numbers){

    for (var i = 0; i < n - 1; i++){
        let number = i === Math.round(n / 2) ? 420 : Math.round(Math.random() * (max - min) + min);;
        numbers[i].innerHTML = number;
        numbers[i].style.backgroundColor = `hsl(${(number / max) * 100}, 100%, 50%)`;
    }
}

function newSong(){
    var newSong = document.createElement("iframe");
    newSong.setAttribute("allow", "autoplay");
    var bubleSongs = ['QJ5DOWPGxwg', 'R8CBoVc_OMI', 'Nx-DvH41Tjo', '30TkClWvT5k', 'pw3PhhSfcQg', 'l3l83C-we-k', '0yhI35F2NB0'];
    newSong.src = "https://www.youtube.com/embed/"+bubleSongs[parseInt(Math.random() * bubleSongs.length)]+"?autoplay=1";
    document.getElementById("song-container").appendChild(newSong);
}
