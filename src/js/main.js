$(document).ready(function () {
    /* Menu toggle */
    const $menu = $('.menu');
    const $menuToggle = $('.js-menu-toggle');

    function toggleMenu(e) {
        if (e) {
            e.preventDefault();
        }
        $menu.toggleClass('opened');
        $('html').toggleClass('menu-opened');
    }
    $menuToggle.on('click', toggleMenu);

    $('.menu_link').on('click', function() {
        $menu.removeClass('opened');
        $('html').removeClass('menu-opened');
    });


    /* Datapicker */
    $('.datapicker').datepicker();

    /* Custom select */
    $('.select').selectize({
        create: true,
        sortField: 'text'
    });

    /* SVG animation */
    setInterval(function() {
        var $circles = $('.st0');
        var circlesCount = $circles.length;

        function getRandomArbitrary() {
            return parseInt(Math.random() * (circlesCount));
        }

        var index = getRandomArbitrary();

        $circles.eq(index).addClass('st1');
        $circles.eq(index).removeClass('st0');
        $circles.eq(index).addClass('bubble');
    }, 650);

    /* For who animation */
    $('.target').on('click', function() {
        $('.target').removeClass('active');
        $(this).addClass('active');
    });

    /* Tabs */
    $tabLinks = $('.tabs_link');
    $tabLinks.on('click', function(e) {
        e.preventDefault();
        $tabLinks.removeClass('active');
        $(this).addClass('active');

        var index = $(this).data('tab');

         $('.tab').removeClass('active');
         $('.tab[data-tab="' + index + '"]').addClass('active');

    })
});
