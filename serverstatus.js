$(document).ready(function() {
    ping();
});

function ping() {
    $.ajax({
        url: "http://www.jonliled.com:30000",
        success: function(result) {
            $(".success").show();
        },
        error: function(result) {
            $(".fail").show();
        },
        complete: function(xhr) {
            $('.server-status').text(xhr.status);
        }
    });
}