(function ($) {
    $.ajax({
        url: "feeds/feeds.xml",
        dataType: 'xml',
        success: function (data, status, jqXHR) {
            var items = [];
            $(data).find("item").each(function (i) {
                if (i < 3) {
                    var item = "<li><h4>";
                    item += "<a href='" + $(this).find("link").text() + "'>";
                    item += $(this).find("title").text();
                    item += "</a></h4></li>";
                    items.push(item);
                }
            });
            $("#blog-ul").html(items.join(''));
        },
        error: function (jqXHR, status, e) {
            $("#blog-ul").html("<li><p>No feed has been generated yet.</p></li>");
        }
    });
})(jQuery);
