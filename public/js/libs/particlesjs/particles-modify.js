$('#fun-particles').click(function() {
    $('#particles-js').removeClass('particles-js');
    $('.subMenuNav').toggleClass('showSubMenu');
    console.log("Brincando com particles agora");
})

$('#stop-fun-particles').click(function() {
    $('#particles-js').addClass('particles-js');
    $('.subMenuNav').toggleClass('showSubMenu');
    $('')
    console.log("Vamos para de brincar né");
})

// MENU E SUB MENU
$('.subMenuNav-setup').click(function() {
    $('.subMenuNav').toggleClass('showSubMenu');
})

document.querySelector('.subFromLeft').onclick = function () {
    document.documentElement.classList.remove('menu-ativo');
}

document.querySelector('#stop-fun-particles').onclick = function() {
    document.documentElement.classList.remove('menu-ativo');
}

document.documentElement.onclick = function(event) {
    if(event.target === document.documentElement) {
        document.documentElement.classList.remove('menu-ativo');
    }
}