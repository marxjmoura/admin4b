$(function () {
    $('pre code').each(function (i, block) {
        hljs.highlightBlock(block);
    });
});
