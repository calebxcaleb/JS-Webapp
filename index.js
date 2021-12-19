//GLOBAL VARIABLES
let dogButton = document.getElementById('get-dog');
let dogGallery = document.querySelector('.gallery') 
let doglist = 
//EVENT LISTENERS
// window load
window.addEventListener('load', reloadImages);
//click and change
dogButton.addEventListener('click', reloadImages);

function reloadImages(){
    dogGallery.innerHTML = '';

    for(let i = 0; i < 6; i++){
        randomDogImage(i + 1);
    }
}

//random dog image
function randomDogImage(n){
    var imageSrc;
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            dogGallery.innerHTML += '<figure class=”gallery__item gallery__item--' + n + '"><img src="' + data.message + '" class="gallery__img" alt="Image ' + n + '"></figure>';
        })        
}

