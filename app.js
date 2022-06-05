const text1="<h2>Bienvenue sur mon porte-folio</h2>";
const text2="<h2>Vous trouverez ci-dessous mon CV</h2>";
const text3="<h2>Via le bouton contact vous accéderez à mes coordonnées</h2>";
const text4="<h2>Mes projets sont disponible via le bouton projet</h2>";
window.onload = function(){

    // Slide automatique texte 5s
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

    // ******************************Evenement click sur la nav
    var boutonAccueil = document.querySelectorAll(".boutonNav")[0]
    var boutonProjet = document.querySelectorAll(".boutonNav")[1]
    var boutonContact = document.querySelectorAll(".boutonNav")[2]
    var accueil = document.querySelector("#accueilCV")
    var projet = document.querySelector("#accueilProjet")
    var contact = document.querySelector("#accueilContact")
    console.log(window.getComputedStyle(accueil).display)
    // console.log(boutonProjet)
    // console.log(boutonContact)

    boutonAccueil.addEventListener('click',() => {
        if (window.getComputedStyle(accueil).display == "none"){
            console.log("change")
            accueil.style.display = "flex";
            projet.style.display = "none";
            contact.style.display = "none";
        }
            
    })

    boutonProjet.addEventListener('click',() => {
        if (window.getComputedStyle(projet).display == "none"){
            console.log("change")
            accueil.style.display = "none";
            projet.style.display = "flex";
            contact.style.display = "none";
        }
            
    })

    boutonContact.addEventListener('click',() => {
        if (window.getComputedStyle(contact).display == "none"){
            console.log("change")
            accueil.style.display = "none";
            projet.style.display = "none";
            contact.style.display = "flex";
        }
            
    })
};