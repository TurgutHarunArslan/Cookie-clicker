var score = 0;
var cursorcost = 15;
var cursors = 0;
var grandmacost = 45
var grandmas = 0;

function skorekle(amount){
score = score + amount;
document.getElementById("score").innerHTML = score;
}

function buycursor(){
if(score >= cursorcost) {
score = score - cursorcost;
cursors = cursors + 1;
cursorcost = Math.round(cursorcost * 1.30);

document.getElementById("score").innerHTML = score;
document.getElementById("cursorcost").innerHTML = cursorcost;
document.getElementById("cursors").innerHTML = cursors;
} else{
    alert("Yeterli Skorun Yok");
    }
}




   function buygrandma(){
        if(score >= grandmacost) {
        score = score - grandmacost;
        grandmas = grandmas + 1;
        grandmacost = Math.round(grandmacost * 1.30);
        
        document.getElementById("score").innerHTML = score;
        document.getElementById("grandmacost").innerHTML = grandmacost;
        document.getElementById("grandmas").innerHTML = grandmas;
        } else{
            alert("Yeterli Skorun Yok");
            }
        }
        
        setInterval(function(){
            score = score + cursors;
            score = score + grandmas * 3;
            document.getElementById("score").innerHTML = score;
            }, 1000);

            function loadgame() {
            var savedgame = JSON.parse(localStorage.getItem("gamesave"))
            if (typeof savedgame.score !== "undefined") score =savedgame.score;
            if (typeof savedgame.cursors !== "undefined") cursors =savedgame.cursors;
            if (typeof savedgame.cursorcost !== "undefined") cursorcost =savedgame.cursorcost;
            if (typeof savedgame.grandmas !== "undefined") grandmas =savedgame.grandmas;
            if (typeof savedgame.grandmacost !== "undefined") grandmacost =savedgame.grandmacost;
            }




            function savegame() {
            var  gamesave = {
            score: score,
            cursors: cursors,
            cursorcost: cursorcost,
            grandmas: grandmas,
            grandmacost: grandmacost
            };
            localStorage.setItem("gamesave",JSON.stringify(gamesave))
            }
            window.onload = function() {
            loadgame();
            document.getElementById("score").innerHTML = score;
            document.getElementById("cursorcost").innerHTML = cursorcost;
            document.getElementById("cursors").innerHTML = cursors;
            document.getElementById("grandmacost").innerHTML = grandmacost;
            document.getElementById("grandmas").innerHTML = grandmas;
            }

            window.onbeforeunload = function() {
                savegame();
            }

        
            setInterval (function() {
                savegame();
            },30000);
        



