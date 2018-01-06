$(function() {
    $('[data-toggle="tooltip"]').tooltip();

    $('pre').each(function(i, block) {
        hljs.highlightBlock(block);
    });
});
