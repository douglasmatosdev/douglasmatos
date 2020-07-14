document.querySelector('.btnNavMenu-show').onclick = function() {
    document.documentElement.classList.add('menu-ativo');
};

document.querySelector('.btnNavMenu-hide').onclick = function() {
    document.documentElement.classList.remove('menu-ativo');
};

document.documentElement.onclick = function(event) {
    if(event.target === document.documentElement) {
        document.documentElement.classList.remove('menu-ativo');
    }
};



// $('.btnNavMenu-show').click(function () {
    
//     $('.menuNav').removeClass('hide');
//     $('.btnNavMenu-show').addClass('hide');
//     $('.btnNavMenu-hide').removeClass('hide');

// });

// $('.btnNavMenu-hide').click(function () {

//     $('.menuNav').addClass('hide');
//     $('.btnNavMenu-hide').addClass('hide');
//     $('.btnNavMenu-show').removeClass('hide');
// });
