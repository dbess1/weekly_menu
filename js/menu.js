$(document).ready(function() {
    window.onload = $('#username').html(localStorage.getItem("storageName"));

    weeklyMenu();
    function weeklyMenu() {

        var menu = ["Kibbeh", "Bulgogi", "Goulash", "Wiener Schnitzel", "Pot-au-Feu", "Roast Beef and Yorkshire Pudding", "Irish Stew", "Meatloaf", "Albondigas", "Enchiladas", "Lasgna", "Chicken, Mash Potatoes, Mac & Cheese", "Turkey Burgers, Sweet Potatoes Fries", "Stuffed Peppers", "French Soup", "Grass-fed Burgers", "Ackee and Saltfish", "Coo-Coo and Flying Fish"];

        var randomMenu = menu[Math.floor(Math.random() * menu.length)];
        var splitMenu = randomMenu.split();
        $('.words').text(splitMenu[0]);
    }

    $("button").on("click", function() {

        weeklyMenu();

    });
});
