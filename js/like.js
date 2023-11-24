function changeImg(event) {
    let elem = event.target;
    let imgHeart = 'images/heart_empty.png';
    let imgFullHeart = 'images/heart_full.png'

    if (elem.getAttribute('src') === imgHeart) {
        elem.setAttribute('src', imgFullHeart);
    } else {
        elem.setAttribute('src', imgHeart);
    }
}

document.querySelectorAll(".like__icon").forEach(item => {
    item.addEventListener('click', changeImg);
});