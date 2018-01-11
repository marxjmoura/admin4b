$(function() {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="suggestion"]').inputSuggestion();

    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });
});
