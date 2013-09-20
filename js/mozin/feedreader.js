(function ($) {
    $.ajax({
        url: "http://blog.mozillaindia.org?feed=rss2",
        crossDomain: true,
        dataType: 'xml',
        type: 'POST',
        success: function (data) {
            console.log("success: " + data);
        },
        error: function (jqXHR, status, e) {
            console.log(status);
        }
    });
})(jQuery);
