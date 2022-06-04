



const text1="<h2>Bienvenue sur mon porte-folio</h2>";
const text2="<h2>Vous trouverez ci-dessous mon cv</h2>";
const text3="<h2>Via le bouton contact vous accederez a mes coordonnées</h2>";
const text4="<h2>Mes projets sont disponible via le bouton projet</h2>";
window.onload = function(){
    var i = 1;
    var text;
    
    
    setInterval(function() {
        i++;
        if (i==1){
            text = text1;
        };
        if (i==2){
            text = text2;
        };
        if (i==3){
            text = text3;
        };
        if (i==4){
            i=1
            text = text4;
        };
        
        document.querySelector("#sousTitre").innerHTML = text
    }, 5000)
};