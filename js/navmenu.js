// Queries the submenu(s)
var itemsWithSubmenu = $('li.has-submenu');
var timeDelay;

// Delays dropdown menu for mouse users
// Adds class 'open' on mouseover,
itemsWithSubmenu.on('mouseover', function() {
    $(this).addClass('open');
    clearTimeout(timeDelay);
});

// and then removes class 'open' 1 second
// after mouseout.
itemsWithSubmenu.on('mouseout', function() {
    timeDelay = setTimeout(closeMenu, 1000, $(this));
});

function closeMenu(jqObject) {
    jqObject.removeClass('open');
}

// Allows on-click toggle for keyboard users
// If the menu is already open on click,
// removes the 'open' class.
// Otherwise, adds the 'open' class.
itemsWithSubmenu.on('click', function(e) {
    var menuToggle = $(this);
    var toggleLink = $('a.submenu-toggle');
    menuToggle.find('a').not('.submenu-toggle').off('click');

    if (menuToggle.attr('class').includes('open')) {
        menuToggle.removeClass('open');
        toggleLink.attr('aria-expanded', 'false');
    } else {
        menuToggle.addClass('open');
        toggleLink.attr('aria-expanded', 'true');
    }
    e.preventDefault();
});
