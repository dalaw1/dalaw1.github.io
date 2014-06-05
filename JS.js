/**
 * Created by matthew on 5/26/2014.
 */
window.onload = function() {
    console.log('Javascript Received!');

    var name = document.getElementById('name');
    var newname = null;
    var cookie = null;
    var button = document.getElementById('button');

    if (document.cookie) {
        name.innerHTML = "Hey " + document.cookie + "! ";
    }
    else {
        name.innerHTML = "";
    }

    function saveCookie() {
        newname = document.getElementById('textbox').value;
        document.cookie = newname;
        cookie = document.cookie;
    }

    button.addEventListener("click", function () {
        saveCookie();
        name.innerHTML = "Hey " + cookie + "! ";
    });
};