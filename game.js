var score = 0;
var multi = 1;
var cursorcost = 15;
var cursors = 0;
var grandmacost = 100;
var grandmas = 0;
var multicost = 10;

function skorekle(){
score += 1 * multi;
document.getElementById("score").innerHTML = score;
playAudio();

}

function buymult(){
if(score >= multicost){
score = score - multicost;
multi = multi + 1;
multicost = Math.round(multicost * 5);

document.getElementById("score").innerHTML = score;
document.getElementById("multcost").innerHTML = multicost;
document.getElementById("multi").innerHTML = multi;
} else{
    alert("Yeterli Kurabiyen Yok");
    }
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
    alert("Yeterli Kurabiyen Yok");
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
            score = score + cursors * multi;
            score = score + grandmas * 3 * multi;
            document.getElementById("score").innerHTML = score;
            }, 2000);

            function loadgame() {
            var savedgame = JSON.parse(localStorage.getItem("gamesave"));
            if (typeof savedgame.score !== "undefined") score =savedgame.score;
            if (typeof savedgame.cursors !== "undefined") cursors =savedgame.cursors;
            if (typeof savedgame.cursorcost !== "undefined") cursorcost =savedgame.cursorcost;
            if (typeof savedgame.grandmas !== "undefined") grandmas =savedgame.grandmas;
            if (typeof savedgame.grandmacost !== "undefined") grandmacost =savedgame.grandmacost;
            if (typeof savedgame.multi !== "undefined") multi =savedgame.multi;
            if (typeof savedgame.multicost !== "undefined") multicost =savedgame.multicost;
            }




            function savegame() {
            var  gamesave = {
            score: score,
            cursors: cursors,
            cursorcost: cursorcost,
            grandmas: grandmas,
            grandmacost: grandmacost,
            multi: multi,
            multicost: multicost
            };
            localStorage.setItem("gamesave",JSON.stringify(gamesave))
            }
 




            function resetGame() {
                if (confirm("Oyundaki tum ilerlemeni silmek istiyormusun?")) {
                  var gameSave = {}
                  localStorage.clear();
                  location.reload();
                }
              }


            window.onload = function() {
            loadgame();
            document.getElementById("score").innerHTML = score;
            document.getElementById("cursorcost").innerHTML = cursorcost;
            document.getElementById("cursors").innerHTML = cursors;
            document.getElementById("grandmacost").innerHTML = grandmacost;
            document.getElementById("grandmas").innerHTML = grandmas;
            document.getElementById("multi").innerHTML = multi;
            document.getElementById("multcost").innerHTML = multicost;
            }


            setInterval (function() {
                savegame();
            },15000);








        

  //Audio
  var ac = document.getElementById("audio"); 

  function playAudio() { 
    ac.play(); 
  } 
