const container = document.querySelector('.container');


function getImgNum(){
    return Math.floor(Math.random() * 10)
}

function loadImages(numImages = 9){
    let i = 0;
    while(i<numImages){
        const img = document.createElement('img')
        img.src = "images/" + getImgNum() + ".jpg"
        container.appendChild(img)
        i++
    }
}
$('.overlay').fadeIn();


loadImages();


window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        $('.overlay').fadeIn();
        loadImages();
        $('.overlay').fadeOut("fast");     
    }
};




