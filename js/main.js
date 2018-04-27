$(document).ready(function(){
    $('.selection__checkbox').change(function(){
        if($(this).is(':checked')){
            $(this).next('label').addClass('selection__label-selected');
            $('.selection__input-blueDate, .selection__calendar-blue').prop( 'disabled', true );
            $('.selection__calendar-blue').css({'cursor':'default'})
        }else{
            $(this).next('label').removeClass('selection__label-selected');
            $('.selection__input-blueDate, .selection__calendar-blue').prop( 'disabled', false );
            $('.selection__calendar-blue').css({'cursor':'pointer'})
        }
    });

    $('.selection__select').styler();

    $('.selection__arrows').click(function () {
        let departure = $('.selection__input-departure').val();
        let arrival = $('.selection__input-arrival').val();
        $('.selection__input-departure').val(arrival);
        $('.selection__input-arrival').val(departure);
    });

    $('.selection__text-exampleDep').click(function () {
        $('.selection__input-departure').val($(this).html());
    });

    $('.selection__text-exampleArr').click(function () {
        $('.selection__input-arrival').val($(this).html());
    });

    $('.menu__icon').click(function() {
        $('.nav').toggleClass('menu_state_open');
        $('.nav__li').toggleClass('menuOpen');
    });
});