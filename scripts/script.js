window.onload = () => {

};

function search() {
    const input = document.getElementsByClassName('input');
    input[0].style.width = '200px';
}
function unselect() {
    const input = document.getElementsByClassName('input');
    if (input[0].style.width == '200px' && input[0].value.trim() == '') {
        input[0].style.width = '75px'
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