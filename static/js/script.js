var character = document.getElementById("character")
var obstacle = document.getElementById("obstacle")
let game_status = false
function jump() {
    if (!game_status) {
        obstacle.style.animation = "block 2s infinite linear";
        game_status = true
    }
    if (character.classList != "animate") {
        character.classList.add("animate")    
    }
    setTimeout(function(){
        character.classList.remove("animate")
    }, 800);
}

var checkEnd = setInterval(function() {
    var characterTop =
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft =
    parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
    if (blockLeft < 135 && blockLeft > 100 && characterTop >= 120) {
        obstacle.style.animation = "none";
        game_status = false
        alert("Game Over!")
    }
}, 10);