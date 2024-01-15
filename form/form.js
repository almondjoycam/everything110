// References to form elements
var form = $('form');
// var submitButton = form.find('input[type="submit"]');

// Event handling
form.on('submit', function(e) {
    var formData = form.serialize();
    e.preventDefault();
    $.post('form/form.php', formData, function(data) {
        form.empty().append('<p>Thank you for your submission! You will receive a confirmation email shortly.</p>');
    }).done(function() {
        console.log('Done');
    });
});
