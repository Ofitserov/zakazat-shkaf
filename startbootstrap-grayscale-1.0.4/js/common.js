$(document).ready(function() {
    $(".popup").magnificPopup();
    tel = $('.tel').attr('value');
    name = $('.name').attr('value');
    $.ajax({
        url: 'ajax.php',
        type: 'POST',
        data: $(this).serialize(),
        success: function(msg){
            $('popup').append(msg);
        },
        error: function (msg) {
            $('popup').append(msg);
        }
    });
})

