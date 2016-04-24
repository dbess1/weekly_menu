$(document).ready(function() {

    weeklyMenu();

    function weeklyMenu() {

        var menu = ["meatloaf", "albondigas", "enchalades", "chicken and waffles", "steak and cheese", "tacos", "stuffed peppers", "french soup"];

        while (menu.length < 9) {
            var randomMenu = menu[Math.ceil(Math.random() * menu.length)];
            var splitMenu = randomMenu.split();
            var found = false;
            for (var i = 0; i < menu.length; i++) {
                if (menu[i] == randomMenu) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                menu[menu.length] = randomMenu;
                $('.words').text(splitMenu[0]);
            }

        }


    }

    $("button").on("click", function() {

        weeklyMenu();

    });
});
