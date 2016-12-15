$(document).ready(function() {
    $('#fullpage').fullpage({
        sectionsColor: ['rgba(240, 128, 128, .4)', 'rgba(154, 205, 50, .4)', 'rgba(135, 206, 250, .4)', 'rgba(255, 215, 0, .4)','rgba(192, 192, 192, .4)', 'rgba(245, 245, 245, .4)'],
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage','5thPage', 'lastPage'],
        menu: '#menu',
        scrollingSpeed: 800
    });
});