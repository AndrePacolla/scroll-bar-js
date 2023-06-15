function scrollFixed(){
    window.scrollTo({
        top: 0,
        behavior:'smooth'
    });
}

function positionScroll(){
    if(window.scrollY === 0){
        document.querySelector('.buttonScroll').style.display = 'none';
    }else{
        document.querySelector('.buttonScroll').style.display = 'block';
    }
}

window.addEventListener('scroll',positionScroll);
