$(document).ready(function() {
    $('#fullpage').fullpage({
        sectionsColor: ['rgba(240, 128, 128, .6)', 'rgba(154, 205, 50, .6)', 'rgba(135, 206, 250, .6)', 'rgba(255, 215, 0, .6)','rgba(192, 192, 192, .6)', 'rgba(245, 245, 245, .6)'],
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage','5thPage', 'lastPage'],
        menu: '#menu',
        scrollingSpeed: 500 // Change to 1000 later
    });
});


// lightcoral','yellowgreen', 'lightskyblue', 'gold', 'silver