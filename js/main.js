$(document).ready(function() {
    $('#fullpage').fullpage({
        sectionsColor: ['#1bbc9b', '#4BBFC3', 'gray', 'whitesmoke','whitesmoke', '#ccddff'],
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage','5thPage', 'lastPage'],
        menu: '#menu',
        scrollingSpeed: 500 // Change to 1000 later
    });
});