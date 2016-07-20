/*function inputFocus(i) {
  if(i.value == i.defaultValue) {
    i.value = ""; 
    i.style.color = "000";
  }
}

function inputBlur(i) {
  if(i.value == "") {
    i.value =  i.defaultValue;
    i.style.color = "#888";
  }
}
*/
function menuPage() {

    var firstName = document.getElementById("firstName").value;

    if (firstName.trim() && firstName != "") {
        localStorage.setItem("storageName", firstName)
        document.getElementById("username").innerHTML = firstName;
        window.location.replace("menu.html")
    } else {
        alert("Please put in your first name.")
    }
}
