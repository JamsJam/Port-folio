const text1="<h2>Bienvenue sur mon porte-folio</h2>";
const text2="<h2>Vous trouverez ci-dessous mon CV</h2>";
const text3="<h2>Via le bouton contact vous accéderez à mes coordonnées</h2>";
const text4="<h2>Mes projets sont disponible via le bouton projet</h2>";
window.onload = function(){

    // Dragon => 8s puis affichage du site
    setTimeout(() => {
        document.querySelector('#loading').style.display = "none"
        document.querySelector('#mobile').style.display = "block"
    },7000)



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
    
    // ******************************Evenement click sur la nav et le footer
    // -------- Les bouton header--------
    var boutonAccueil = document.querySelectorAll(".boutonNav")[0],
    boutonProjet = document.querySelectorAll(".boutonNav")[1],
    boutonContact = document.querySelectorAll(".boutonNav")[2],
    // -------- Les sections--------
        accueil = document.querySelector("#accueilCV"),
        projet = document.querySelector("#accueilProjet"),
        contact = document.querySelector("#accueilContact"),
    // -------- Bouton du footeur-------- 
        footerAccueil =document.querySelectorAll(".FootHover")[0],
        footerProjet =document.querySelectorAll(".FootHover")[1],
        footerContact =document.querySelectorAll(".FootHover")[2];
    console.log(window.getComputedStyle(accueil).display)


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



// ***********************Navigation Footer


    footerAccueil.addEventListener('click',() => {
        if (window.getComputedStyle(accueil).display == "none"){
            console.log("change")
            accueil.style.display = "flex";
            projet.style.display = "none";
            contact.style.display = "none";
        }
            
    })

    footerProjet.addEventListener('click',() => {
        if (window.getComputedStyle(projet).display == "none"){
            console.log("change")
            accueil.style.display = "none";
            projet.style.display = "flex";
            contact.style.display = "none";
        }
            
    })

    footerContact.addEventListener('click',() => {
        if (window.getComputedStyle(contact).display == "none"){
            console.log("change")
            accueil.style.display = "none";
            projet.style.display = "none";
            contact.style.display = "flex";
        }
            
    })
    // **************************************Fin des bouton navigation 



};