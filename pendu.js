//jeu du pendu //
//auteur:houck//
//simplon narbonne 2019 la prairie//

//declaration des variables de jeu
var wordsToGuess = ['panier','tribut','plumes','pistes','dormir'];// le mot à deviner
var saissieLetter = "";// la lettre saissie
var numberGame = " ";//nombre de partie
//declaration de la variables canvas
var canvas = "document.getElementById('gamescreen')";
var ctx = "canvas.getContext('2d')";

//declaration de la fonction main
//la fonction doit choisir un mot dans la wordsToGuess
function wordselect(){
  //fonction pour generé un index aleatoire
  function rIndex(max){
    return Math.floor(Math.random()* Math.floor(max));
  }
  //returne un mot aleatoire en foncion de la longeur de la liste
    return wordsToGuess[rIndex(wordsToGuess.length)];
  //testé avec console.log()ok
}
// analysé si la saissieLetter est dans le mot

//si oui returne la lettre
//si non return une image dans le canvas

//fonction qui compte les parties si >5 stop


//affichage avec canva
