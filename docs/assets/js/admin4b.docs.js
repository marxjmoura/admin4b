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
});
