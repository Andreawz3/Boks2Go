window.onscroll = (e) => {

    // Slides in 'About Chef' on Main Page
    if (window.scrollY > 160) {
        const aboutChef = document.getElementById('chef-info');
        aboutChef.classList.add('slidingInfo');

        const chefImg = document.getElementById('chef-image');
        chefImg.classList.add('slidingImg')
    }
    if (window.scrollY > 1300) {
        const chefRecom = document.getElementById('dishes-info');
        chefRecom.classList.add('slidingChefRec');
    }
}

// Search Bar Animation on Navigation Bar
function search() {
    const input = document.getElementById('input');
    input.style.width = '200px';
}
function unselect() {
    const input = document.getElementById('input');
    if (input.style.width == '200px' && input.value.trim() == '') {
        input.style.width = '75px'
    }
}

// Modal Box for Card Info on Shopping Cart Page
function modalBox() {
    const cardInfo = document.getElementById('modal-box');
    cardInfo.style.display = 'block';
    
}
function closeButton() {
    const cardInfo = document.getElementById('modal-box');
    if (cardInfo.style.display === 'block') {
        cardInfo.style.display = 'none';
    }
}


// Carousel Images on Menu Page
let slideIndex = 1;

slidesAppear(slideIndex);

function nextImg(n) {
    slidesAppear(slideIndex += n);
};

function slidesAppear(n) {
    const slidesImgs = document.getElementsByClassName("slidesImg");

    if(n > slidesImgs.length) {
        slideIndex = 1;
    };
    if(n < 1) {
        slideIndex = slidesImgs.length;
    };
    for(let i = 0; i < slidesImgs.length; i++) {
        slidesImgs[i].style.display = "none";
    }

    slidesImgs[slideIndex-1].style.display = "block";
};


