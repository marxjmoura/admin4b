$(function () {
    $('pre code').each(function (i, code) {
        hljs.highlightBlock(code);
    });

    $('#spinner-toggle').on('click', function () {
        $('#spinner').addClass('show');

        setTimeout(function () {
            $('#spinner').removeClass('show');
        }, 3000);
    });

    var juices = [
        'Apple, carrot, and orange',
        'Beet, carrot, ginger, and turmeric',
        'Homemade tomato juice',
        'Orange and grapefruit',
        'Pumpkin seed',
        'Spinach, lettuce, and kale',
        'Strawberry and mango',
        'Strawberry-kiwi mint'
    ];

    $('[data-toggle="suggestion"][data-async]').on('suggestion:search', function () {
        var $input = $(this);
        var $uggestion = $input.closest('.input-suggestion');
        var $list = $uggestion.find('.list-group.items');

        var filteredJuices = juices.filter(function (juice) {
            return juice.contains($input.val());
        });

        var $result = filteredJuices.map(function (juice) {
            return $('<a>')
                .attr('href', '#')
                .attr('tabindex', '-1')
                .addClass('list-group-item list-group-item-action')
                .text(juice);
        });

        $list.empty();
        $list.append($result);

        $input.suggestion('refresh');
    });

    $('[data-toggle="file-manager"]').on('file:change', function (e, file) {
        $('#file-name').text(file.name);
        $('#file-size').text((file.size / 1024).toFixed(2) + ' KB');
        $('#is-invalid').toggleClass('d-none', !file.errors.length);
        $('#is-valid').toggleClass('d-none', !!file.errors.length);

        if (file.type.startsWith('image')) {
            $('#preview').attr('src', file.dataURL).removeClass('d-none');
        } else {
            $('#preview').removeAttr('src').addClass('d-none');
        }

        $('#file-empty').addClass('d-none');
        $('#file-data').removeClass('d-none');
    });

});
