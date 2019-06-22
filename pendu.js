//jeu du pendu //
//auteur:houck//
//simplon narbonne 2019 la prairie//

//declaration des variables de jeu
// liste de mot à devinner
var wordsToGuess = ['panier','tribut','plumes','pistes','dormir'];
// Le mot a devinner
var secretWord = " ";
//lettre entrer par l'utilisateur
var saissieLetter = "_";
// nombre de partie
var gameNumber = 0;
//liste des lettre essayer
var letterTry = [];;
// créer un objet map
var mot =new Map();
//boucle pour remplir l'objet d'underscore
for (var i = 0; i < 6; i++) {
  mot.set(i,"_");
}
console.log(mot);//sert de test
//fin des variables
//___________________________________________________________________________
//fonction permettant de dessiner le mot dans le canvas
function draw(){
  var canvas = document.getElementById('gamescreen');
  var ctx = canvas.getContext('2d');
  ctx.font = '48px serif';
  ctx.fillText(mot.get(0), 10, 350);
  ctx.fillText(mot.get(1),60 , 350);
  ctx.fillText(mot.get(2),100 ,350);
  ctx.fillText(mot.get(3),150 ,350);
  ctx.fillText(mot.get(4),200 ,350);
  ctx.fillText(mot.get(5),250 ,350);
}
//la fonction doit choisir un mot aleatoire dans la wordsToGuess
function wordselect(){
  function rIndex(max){
    return Math.floor(Math.random()* Math.floor(max));
  }
    return wordsToGuess[rIndex(wordsToGuess.length)];
}
secretWord = wordselect();
//todo:ecrire la fonction pour dessiner le Pendu
//__________________________________________________
// function recupere la saissie clavier et joue
function saissie(){
  document.addEventListener("keypress", function (e) {
    console.log("Vous avez appuyé sur la touche " + String.fromCharCode(e.charCode));
    saissieLetter = String.fromCharCode(e.charCode);
    letterTry.push(saissieLetter);//ajoute la lettre saissie dans une liste(type:array)
    console.log(letterTry);//decommenter pout voir les lettres tester
     var found = secretWord.search(saissieLetter);//recupere l'indice de la lettre
     //dans le mot secretWord si la lettre n est pas dans le mot renvoie -1
     console.log(found);//affiche l'indice de la lettre taper
     mot.set(found,saissieLetter);//dans le ojet map vide on ajoute la lettre a l endroit voulue
     if (found == -1){
       console.log("perdu");
     }else{
       console.log ("bien");
       console.log (mot);
       draw();
       }
     })
  }
//____________________________________________________________________________




//fonction qui compte les parties si >5 stop




//TEST:commande pour controler les actions dans la console
console.log (wordsToGuess);//decommenter pour voir la liste de mots
console.log ("mon mot secret est " + secretWord);//decommenter pour voir le mot a trouver
console.log ("lettre saissie "+ saissieLetter);
saissie();
