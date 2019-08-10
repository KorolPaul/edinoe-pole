$(document).ready(function () {
    var isMobile = 'ontouchstart' in window || navigator.msMaxTouchPoints;

    /* Menu toggle */
    const $sidebar = $('.sidebar');
    const $menuToggle = $('.js-menu-toggle');

    function toggleMenu(e) {
        if (e) {
            e.preventDefault();
        }
        $sidebar.toggleClass('opened');
        $('html').toggleClass('sidebar-opened');
    }
    $menuToggle.on('click', toggleMenu);

    window.addEventListener('keydown', function(e) {
        if ((e.key === 'Escape' || e.keyCode === 27) && $sidebar.hasClass('opened')) {
            toggleMenu();
        }
    });

    $('.showcase_logo-image').on('mousemove', function (e) {
        const { clientHeight, clientWidth } = e.currentTarget;
        let { layerX, layerY, offsetX, offsetY } = e.originalEvent;
        const x = offsetX || layerX;
        const y = offsetY || layerY;

        const percentX = (x / clientWidth * 100) - 50;
        const percentY = (y / clientHeight * 100) - 50;

        $(this).css('transform', `rotateY(${percentX / 6}deg) rotateX(${-percentY / 20}deg)`);
    });

    /* Gallery slider */
    $('.slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        nav: true,
        dots: false,
        items: 3,
        navContainer: $('.gallery_buttons'),
        navText: ['prev','next'],
    });

    /* Popup */
    var $popup = $('.popup');
    var $popupContent = $('.popup_content');

    function togglePopup() {
        $popup.toggleClass('opened');
    }

    $('.service_button').on('click', function(e) {
        e.preventDefault();

        var content = $(this).next().html();
        $popupContent.html(content);
        togglePopup();
    });

    $('.fade').on('click', togglePopup);

});
