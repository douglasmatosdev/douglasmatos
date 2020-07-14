let $socialMenuItem = $('.social-menu-item > a');

$socialMenuItem.hover(function () {

    let $currentMenuItem = $(this).parent();
    let $textItem = $currentMenuItem.find('.social-item');

    $textItem.removeClass('fa-text-hide');
    $textItem.addClass('fa-text-show');


}, function () {

    let $currentMenuItem = $(this).parent();
    let $textItem = $currentMenuItem.find('.social-item');

    $textItem.removeClass('fa-text-show');
    $textItem.addClass('fa-text-hide');
});

$('.logo').hover(function () {
    $(this).css('transform', 'rotate(360deg');
    $(this).css('transition', 'all 1s');

}, function () {
    $(this).css('transform', 'rotate(-360deg');
    $(this).css('transition', 'all 1s');
});
