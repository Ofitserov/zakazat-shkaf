$(function(){
    var fx = { //создаем объектный литерал
        'initModal':function(){ //ключ и значение объектного литерала, их может быть много
            if($('.modal-window').length == 0){
                $('<div>').attr('id','jquery-overlay').fadeIn('slow').appendTo('body');
                return $('<div>').addClass('modal-window').appendTo('body');
            } else {
                return $('.modal-window');
            }
        }
    }
    $('a#go').bind('click',function(e){
        e.preventDefault(); /*Добавили вх. параметр, возврата к исх значению*/
        modal = fx.initModal();
        $('<a>').attr('href','#').addClass('close_btn').click(function(event){
            event.preventDefault();
            modal.fadeOut('slow',function(){
                modal.remove();
            });
            $('#jquery-overlay').fadeOut('slow',function(){
                $('#jquery-overlay').remove();
            })
        }).appendTo(modal);

        $.ajax({
            url: 'form.php',
            type: 'POST',
            success: function(msg){
                modal.append(msg);
            },
            error: function (msg) {
                modal.append(msg);
            }
        });
    })

            $("a[rel='galery']").fancybox({

                'padding'           : 0,
                'helpers': {
                            overlay: {locked: false }
                },
                'transitionIn'		: 'none',
                'transitionOut'		: 'none',
                'titlePosition' 	: 'over',
                'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
                    return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
                }
            });


});

function submitForm(form) {
    var form = $(form);
    $.ajax({
        url: 'mail.php',
        type: 'POST',
        data: $('form').serialize(),
        success: function(data) {
            form.replaceWith(data);
        }
    });

    return false;
}

