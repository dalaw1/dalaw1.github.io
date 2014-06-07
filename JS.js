/**
 * Created by matthew on 5/26/2014.
 */
window.onload = function() {
    // Debug to see if Javascript is Received
    console.log('Javascript Received!');

    // Cookie Manager and Change Greeting Name
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
        $(".inputcontainer").fadeTo("slow", 0.5);
    });

    // Change Iframes In Featured Games
    var gamecontainer = document.getElementById('gamecontainer');
    var currentframe = 0;

    $(document).keydown(function (e) {
        if (e.keyCode == 37)
            SlideLeft();
        else if (e.keyCode == 39)
            SlideRight();
    });
    function SlideLeft() {
        if (currentframe > 0) {
            $("#gamecontainer").animate({"margin-left": "+=500px"});
            currentframe--;
        }
    }

    function SlideRight() {
        if (currentframe < 2) {
            $("#gamecontainer").animate({"margin-left": "-=500px"});
            currentframe++;
        }

    }
};
