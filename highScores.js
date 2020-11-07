var clear = document.querySelector("#clear");
clear.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
}); 

