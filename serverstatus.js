$(document).ready(function() {
    ping();
});
var msg = "";

function ping() {

    $.ajax({
        url: "http://www.jonliled.com:30000",
        crossDomain: true,
        success: function(result) {
            document.getElementById('status-box').classList.remove("server-down");
            document.getElementById('status-box').classList.add("server-up");
            document.getElementById('status-box').setAttribute('href', 'www.jonliled.com:30000');
            document.getElementById('status-box').setAttribute('target', '_blank');
            msg = "Click here to join..."
        },
        error: function(result) {
            document.getElementById('status-box').classList.remove("server-up");
            document.getElementById('status-box').classList.add("server-down");
            document.getElementById('status-box').setAttribute('href', '#');
            document.getElementById('status-box').removeAttribute('target');
            msg = "D&D server is currently unavailable..."
        },
        complete: function(xhr) {
            $('.server-status').text(msg);
        }
    });
}