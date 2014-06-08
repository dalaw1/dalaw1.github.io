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

    // Make Tabs Work
    $('#thome').click(function () {
        // Hide all pages and Disable all Iframes
        $('.page').hide();
        $('iframe').attr('src', "");
        // Prepare Page and Reformat Tabs
        $('#home').show();
        $('.tab').css("background", "");
        $(this).css("background", "#717171");
    });
    $('#tfg').click(function () {
        // Hide all pages and Disable all Iframes
        $('.page').hide();
        $('iframe').attr('src', "");
        // Prepare Page and Reformat Tabs and Setup Iframes
        $('#fg').show();
        $('#im').attr("src", "https://dl.dropboxusercontent.com/u/23419326/construct2/Matthew/index.html");
        $('#ijm').attr("src", "https://dl.dropboxusercontent.com/u/23419326/construct2/James/index.html");
        $('#icwc').attr("src", "https://dl.dropboxusercontent.com/u/23419326/construct2/Charles/index.html");
        $('.tab').css("background", "");
        $(this).css("background", "radial-gradient(at top right, gray, #717171) no-repeat center center fixed");
    });
    $('#ta').click(function () {
        // Hide all pages and Disable all Iframes
        $('.page').hide();
        $('iframe').attr('src', "");
        $('.tab').css("background", "");
        // Prepare Page and Reformat Tabs and Setup Iframes
        $('#a').show();
        $('#ia').attr("src", "https://dl.dropboxusercontent.com/u/23419326/construct2/Anthony/index.html");
        $('#other').css("background", "#717171");
        $(this).css("background", "#717171");
    });
    $('#tc').click(function () {
        // Hide all pages, Reset Tabs and Disable all Iframes
        $('.page').hide();
        $('iframe').attr('src', "");
        $('.tab').css("background", "");
        // Prepare Page and Reformat Tabs and Setup Iframes
        $('#c').show();
        $('#icg').attr("src", "https://dl.dropboxusercontent.com/u/23419326/construct2/Casey/index.html");
        $('#other').css("background", "#717171");
        $(this).css("background", "#717171");
    });
    $('#te').click(function () {
        // Hide all pages, Reset Tabs and Disable all Iframes
        $('.page').hide();
        $('iframe').attr('src', "");
        $('.tab').css("background", "");
        // Prepare Page and Reformat Tabs and Setup Iframes
        $('#e').show();
        $('#ie').attr("src", "https://dl.dropboxusercontent.com/u/23419326/construct2/Eduardo/index.html");
        $('#other').css("background", "#717171");
        $(this).css("background", "#717171");
    });
    $('#tjl').click(function () {
        // Hide all pages, Reset Tabs and Disable all Iframes
        $('.page').hide();
        $('iframe').attr('src', "");
        $('.tab').css("background", "");
        // Prepare Page and Reformat Tabs and Setup Iframes
        $('#jl').show();
        $('#ijl').attr("src", "https://dl.dropboxusercontent.com/u/23419326/construct2/JeremyL/index.html");
        $('#other').css("background", "#717171");
        $(this).css("background", "#717171");
    });
    $('#tjp').click(function () {
        // Hide all pages, Reset Tabs and Disable all Iframes
        $('.page').hide();
        $('iframe').attr('src', "");
        $('.tab').css("background", "");
        // Prepare Page and Reformat Tabs and Setup Iframes
        $('#jp').show();
        $('#ijp').attr("src", "https://dl.dropboxusercontent.com/u/23419326/construct2/JeremyP/index.html");
        $('#other').css("background", "#717171");
        $(this).css("background", "#717171");
    });
    $('#tj').click(function () {
        // Hide all pages, Reset Tabs and Disable all Iframes
        $('.page').hide();
        $('iframe').attr('src', "");
        $('.tab').css("background", "");
        // Prepare Page and Reformat Tabs and Setup Iframes
        $('#j').show();
        $('#ijbm').attr("src", "https://dl.dropboxusercontent.com/u/23419326/construct2/Julian/index.html");
        $('#other').css("background", "#717171");
        $(this).css("background", "#717171");
    });
    $('#tl').click(function () {
        // Hide all pages, Reset Tabs and Disable all Iframes
        $('.page').hide();
        $('iframe').attr('src', "");
        $('.tab').css("background", "");
        // Prepare Page and Reformat Tabs and Setup Iframes
        $('#l').show();
        $('#il').attr("src", "https://dl.dropboxusercontent.com/u/23419326/construct2/Luca/index.html");
        $('#other').css("background", "#717171");
        $(this).css("background", "#717171");
    });
    $('#tn').click(function () {
        // Hide all pages, Reset Tabs and Disable all Iframes
        $('.page').hide();
        $('iframe').attr('src', "");
        $('.tab').css("background", "");
        // Prepare Page and Reformat Tabs and Setup Iframes
        $('#n').show();
        $('#in').attr("src", "https://dl.dropboxusercontent.com/u/23419326/construct2/Nicholas/index.html");
        $('#other').css("background", "#717171");
        $(this).css("background", "#717171");
    });
    $('#tp').click(function () {
        // Hide all pages, Reset Tabs and Disable all Iframes
        $('.page').hide();
        $('iframe').attr('src', "");
        $('.tab').css("background", "");
        // Prepare Page and Reformat Tabs and Setup Iframes
        $('#p').show();
        $('#ip').attr("src", "https://dl.dropboxusercontent.com/u/23419326/construct2/Philippe/index.html");
        $('#other').css("background", "#717171");
        $(this).css("background", "#717171");
    });
    $('#ts').click(function () {
        // Hide all pages, Reset Tabs and Disable all Iframes
        $('.page').hide();
        $('iframe').attr('src', "");
        $('.tab').css("background", "");
        // Prepare Page and Reformat Tabs and Setup Iframes
        $('#s').show();
        $('#is').attr("src", "https://dl.dropboxusercontent.com/u/23419326/construct2/Steven/index.html");
        $('#other').css("background", "#717171");
        $(this).css("background", "#717171");
    });
    $('#tt').click(function () {
        // Hide all pages, Reset Tabs and Disable all Iframes
        $('.page').hide();
        $('iframe').attr('src', "");
        $('.tab').css("background", "");
        // Prepare Page, Reformat Tabs and Setup Iframes
        $('#t').show();
        $('#it').attr("src", "https://dl.dropboxusercontent.com/u/23419326/construct2/Tristan/index.html");
        $('#other').css("background", "#717171");
        $(this).css("background", "#717171");
    });
};
