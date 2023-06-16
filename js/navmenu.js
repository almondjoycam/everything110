// Queries the submenu(s)
var itemsWithSubmenu = $('li.has-submenu');

// Delays dropdown menu for mouse users
// Adds class 'open' on mouseover,
itemsWithSubmenu.on('mouseover', function() {
    $(this).addClass('open');
});

// and then removes class 'open' 1 second
// after mouseout.
itemsWithSubmenu.on('mouseout', function() {
    $(this).delay(1000).removeClass('open');
});

// Allows on-click toggle for keyboard users
// If the menu is already open on click,
// removes the 'open' class.
// Otherwise, adds the 'open' class.
itemsWithSubmenu.on('click', function(e) {
    e.preventDefault();
    var menuToggle = $(this);

    if (menuToggle.attr('class').includes('open')) {
        menuToggle.removeClass('open');
    } else {
        menuToggle.addClass('open');
    }
});
