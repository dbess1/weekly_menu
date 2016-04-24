$(document).ready(function() { 

    weeklyMenu();

    function weeklyMenu() {

        var menu = ["meatloaf", "albondigas", "enchalades", "chicken and waffles", "steak and cheese", "tacos", "stuffed peppers", "french soup"];

        var randomMenu = menu[Math.floor(Math.random() * menu.length)];
        var splitMenu = randomMenu.split();
        $('.words').text(splitMenu[0]);
    }

    $("button").on("click", function() { 

      weeklyMenu(); 

    });
});
