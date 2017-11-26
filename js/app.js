document.addEventListener('DOMContentLoaded', function() {

    // Dropdown menu
    var dropdownMenu = document.querySelectorAll('.site-menu>li');
    dropdownMenu.forEach(function(li) {
        li.addEventListener('mouseover', function() {
            var sublist = li.querySelector('.dropdown');
            if (sublist !== null) {
                sublist.style.display = 'block';
            }
        });

        li.addEventListener('mouseout', function() {
            var sublist = li.querySelector('.dropdown');
            if (sublist !== null) {
                sublist.style.display = 'none';
            }
        });
    });

    //Slider
    

});