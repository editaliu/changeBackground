
function pakeisti(){
    
   
    var fonas = String(document.getElementById("aaa").value);
    
    if (fonas == "summer"){
    document.body.style.backgroundImage = "url('https://s-media-cache-ak0.pinimg.com/originals/71/de/6b/71de6b93b5b358df998904cce550ca37.jpg')";
    }
    
    else if (fonas == "autumn"){
    document.body.style.backgroundImage = "url('https://wallpapercave.com/wp/A0y3N7j.jpg')";
    }
    
    else if (fonas == "winter"){
    document.body.style.backgroundImage = "url('https://newevolutiondesigns.com/images/freebies/winter-wallpaper-17.jpg')";
    }
    
    else if (fonas == "spring"){
    document.body.style.backgroundImage = "url('https://lh6.ggpht.com/d6gkWNLwOqBtssXt5BE1AgmegrL6qde6aRPOUxy6WLkRhDEGdssHXaNELDhQBSof9mI=h900')";
    }
    
    else {
        alert("Is it really correct name of the season?");
    }
}

//BODY BACKGROUND COLOR
document.body.style.backgroundColor = "#C8A8A8";

//PRESS ENTER ON KEYBOARD (INSTEAD OF BUTTON)
var fonas = document.getElementById("aaa");
fonas.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
     document.getElementById("btn").click();
    }
});
    
