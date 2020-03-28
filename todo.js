$(function() {
    'use strict';

    $('#todos').on('click', '.update_todo', function() {
        let id = $(this).parents('li').data('id');

        $.post('_ajax.php', {
            id: id,
            mode: 'update'
        }, function(res) {
            if (res.state === '1') {
                $('#todo_' + id).find('.todo_title').addClass('done');
            } else {
                $('#todo_' + id).find('.todo_title').removeClass('done');
            }
        })
    });

});