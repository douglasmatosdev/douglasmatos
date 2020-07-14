window.onresize=function() {
    getDimensions()
}

function getDimensions() {
    let widthWindow = window.innerWidth;
    let heightWindow = window.innerHeight;
    if(widthWindow === 1001) {
        console.log(`width: ${widthWindow}\nheight: ${heightWindow}`);
        $('.menu-nav').css('display', '');
        $('.btn-show').css('display', '');
        $('.btn-close').css('display', '');
    }
}

getDimensions();