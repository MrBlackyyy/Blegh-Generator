function PlaySound (idWhichBlegh) {
    document.querySelector(idWhichBlegh).play();
}

const Bleghs = document.querySelectorAll('.tecla');

for (let counter = 0; counter < Bleghs.length; counter++){
    //console.log(idAudio)

    const sound = Bleghs[counter].classList [1];
    const idAudio = `#som_${sound}`

    Bleghs[counter].onclick = function () {
        PlaySound (idAudio);
    }   
}
