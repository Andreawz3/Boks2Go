window.onscroll = (e) => {
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