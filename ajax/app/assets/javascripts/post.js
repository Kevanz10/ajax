


$(document).ready( function () {

   $.ajax({
        url: "/posts/latest_posts",
        success: function (data) {
            for(var i = 0; i < data.length; i++) {
                $("#latest_posts").append("<div>" + data[i].message + "</div>");
            }
        }
    });

});