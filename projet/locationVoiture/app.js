window.onload = function() {

// faire apparraitre et disparaitre la nav

    var nav = document.getElementById("myNav");
    var openBtn = document.getElementById("openBtn");
    var i = 0 
    openBtn.onclick = openNav;

    function openNav() {
        if (i == 0){
            nav.classList.add("active");
            i = 1;
            
        }
        else{
            nav.classList.remove("active");
            i = 0;
            
        }
    }

// Changement d'image toute les 15s

    var f = 1
    setInterval(function(){
        if(f==1){
            document.querySelector('header').style.background = 'url(./Annexes/background1.jpg)';
            document.querySelector('header').style.backgroundSize = '100vw 94vh';
            document.querySelector('header').style.backgroundPosition = 'center';
            f=2;
        }
        else{
            //verifie la taille de l'ecran pour afficher la bonne taille de l'image dans la boucle
            if ( window.innerWidth < 1200){
                document.querySelector('header').style.background = 'url(./Annexes/background.jpg)';
                document.querySelector('header').style.backgroundSize = '199vw 90vh';
                document.querySelector('header').style.backgroundAttachment = 'scroll';
                document.querySelector('header').style.backgroundPosition = '-6px -200px';

            }
            else{
                document.querySelector('header').style.background = 'url(./Annexes/background.jpg)';
                document.querySelector('header').style.backgroundSize = '100vw 74vh';
                document.querySelector('header').style.backgroundPosition = 'center';
            } 
            f=1
        }
        console.log (f)
    },7000);


    // *********************************************************Interaction slider
    var previousCar = document.querySelectorAll('.previus');
    console.log(previousCar);
    var nextCar = document.querySelectorAll('.next');
    console.log(nextCar);
    var img = document.querySelectorAll('img');
    console.log(document.querySelectorAll('img'));
    var imgPeugeot = img[1];
    var imgFord = img[4];
    var imgAudi = img[7];
    var imgOpel = img[10];
    

    var car1 = 0,
        car2 = 0,
        car3 = 0,
        car4 = 0;
    // *******************************SLIDE 1 : Peugeot

    //*****Bouton precedent
    previousCar[0].onclick = function(){
        console.log('click precedent');
        if (car1 == 0){
            car1 = 2;
        }
        else if(car1 == 1){
            car1 = 0;
        }
        else{
            car1 = 1
        };
        console.log(car1)
        imgPeugeot.setAttribute('src', './Annexes/Peugeot/peugeot-'+car1+'.png')
    };
    //*****Bouton suivant
    nextCar[0].onclick = function(){
        console.log('click next');
        if (car1 == 0){
            car1 = 1;
        }
        else if(car1 == 1){
            car1 = 2;
        }
        else{
            car1 = 0;
        };
        console.log(car1);
        imgPeugeot.setAttribute('src', './Annexes/Peugeot/peugeot-'+car1+'.png');
    };

    // *******************************SLIDE 2 : Ford
    
    //*****Bouton precedent
    previousCar[1].onclick = function(){
        console.log('click precedent');
        if (car2 == 0){
            car2 = 2;
        }
        else if(car2 == 1){
            car2 = 0;
        }
        else{
            car2 = 1
        };
        console.log(car2)
        imgFord.setAttribute('src', './Annexes/ford/ford-'+car2+'.png')
    };
    //*****Bouton suivant
    nextCar[1].onclick = function(){
        console.log('click next');
        if (car2 == 0){
            car2 = 1;
        }
        else if(car2 == 1){
            car2 = 2;
        }
        else{
            car2 = 0;
        };
        console.log(car2);
        imgFord.setAttribute('src', './Annexes/ford/ford-'+car2+'.png');
    };

// *******************************SLIDE 3 : Audi
    
    //*****Bouton precedent
    previousCar[2].onclick = function(){
        console.log('click precedent');
        if (car3 == 0){
            car3 = 2;
        }
        else if(car3 == 1){
            car3 = 0;
        }
        else{
            car3 = 1
        };
        console.log(car3)
        imgAudi.setAttribute('src', './Annexes/audi/audi-'+car3+'.png')
    };
    //*****Bouton suivant
    nextCar[2].onclick = function(){
        console.log('click next');
        if (car3 == 0){
            car3 = 1;
        }
        else if(car3 == 1){
            car3 = 2;
        }
        else{
            car3 = 0;
        };
        console.log(car3);
        imgAudi.setAttribute('src', './Annexes/audi/audi-'+car3+'.png');
    };

// *******************************SLIDE 4 : Opel
    
    //*****Bouton precedent
    previousCar[3].onclick = function(){
        console.log('click precedent');
        if (car4 == 0){
            car4 = 2;
        }
        else if(car4 == 1){
            car4 = 0;
        }
        else{
            car4 = 1
        };
        console.log(car4)
        imgOpel.setAttribute('src', './Annexes/opel/opel-'+car4+'.png')
    };
    //*****Bouton suivant
    nextCar[3].onclick = function(){
        console.log('click next');
        if (car4 == 0){
            car4 = 1;
        }
        else if(car4 == 1){
            car4 = 2;
        }
        else{
            car4 = 0;
        };
        console.log(car4);
        imgOpel.setAttribute('src', './Annexes/opel/opel-'+car4+'.png');
    };
};

