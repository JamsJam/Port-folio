const text1="<h2>Bienvenue sur mon porte-folio.</h2>";
const text2="<h2>Vous trouverez ci-dessous mon CV.</h2>";
const text3="<h2>Via le bouton contact vous accéderez à mes coordonnées.</h2>";
const text4="<h2>Mes projets sont disponibles via le bouton projet.</h2>";

window.onload = function(){
    
    
    //************************************ Fonction responsive 768px
    

    var screenTaille = window.innerWidth,
    screenTailleVerif = Boolean(screenTaille  < 770);
    

    // Dragon de chargement => 8s puis affichage du site sinon la taille de l'ecran

    setTimeout(() => {
        document.querySelector('#loading').style.display = "none"
        if([screenTailleVerif] == "true") {
            
            document.querySelector('#mobile').style.display = "block"
        }
        else{
            
            document.querySelector('#laptop').style.display = "block"
        }
    },4000)
    
    // *********Fin du dragon de chargement

    //********* Changement d'affichage en fonction de la taille

    //  resize est un evenement qui se surveiller un changement des dimensions de la page
    window.addEventListener("resize", () => {
        var screenTailleChange = window.innerWidth,
        // boolean verifie si mon expression est vrai ou fausse (ici : si la largeur de mon ecran est < 768px)
        screenTailleChangeVerif = Boolean(screenTailleChange  < 770);
        
        if ( [screenTailleChangeVerif] == "true" ){
            
            document.querySelector('#mobile').style.display = "block"
            document.querySelector('#laptop').style.display = "none"
        }
        else{
            
            document.querySelector('#laptop').style.display = "block"
            document.querySelector('#mobile').style.display = "none"
        }

    })

    
    
    // ***************************************************Laptop

    document.querySelector('#H-button').addEventListener('click',() =>{
        document.querySelector('#l-header').style.transition = "all 0.6s";
        document.querySelector('#l-header').style.transform = "translateY(-140vh)";
        setTimeout(() => {
            document.querySelector('#l-header').style.display = "none";
        }, 2000);
    })









    // ***************************************************Mobile
    
    // Slide text automatique texte 5s
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
    

// ******************************Evenement click sur la nav Header et le footer

    // -------- Les bouton header--------
    var boutonAccueil = document.querySelectorAll(".boutonNav")[0],
        boutonProjet = document.querySelectorAll(".boutonNav")[1],
        boutonContact = document.querySelectorAll(".boutonNav")[2],
    // -------- Les sections--------
        accueil = document.querySelector("#accueilCV"),
        projet = document.querySelector("#accueilProjet"),
        contact = document.querySelector("#accueilContact");
    // -------- Bouton du footeur-------- 
        footerAccueil =document.querySelectorAll(".FootHover")[0];
        footerProjet =document.querySelectorAll(".FootHover")[1];
        footerContact =document.querySelectorAll(".FootHover")[2];
    console.log(window.getComputedStyle(accueil).display);


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