//jeu du pendu //
//auteur:houck//
//simplon narbonne 2019 la prairie//

//declaration des variables de jeu
// liste de mot à devinner
var wordsToGuess = ['panier', 'lymphe', 'plumes', 'pagine', 'rutile', 'prisme','valser','crispe','orient','ignare'];
// Le mot a devinner
var secretWord = " ";
//lettre entrer par l'utilisateur
var saissieLetter = "_";
// nombre de partie
var gameNumber = 0;
//liste des lettre n'etant pas dans le mots
var letterTry = [];
var compteur = 0;
var play = document.getElementById('btn');

// créer un objet map
var mot = new Map();
//boucle pour remplir l'objet d'underscore
for (var i = 0; i < 6; i++) {
	mot.set(i, "_");
}
console.log(mot); //sert de test
//fin des variables
//___________________________________________________________________________
//fonction permettant de dessiner le mot dans le canvas
function draw() {
	var canvas = document.getElementById('gs');
	var ctx = canvas.getContext('2d');
	ctx.font = '48px serif';
	ctx.fillText(mot.get(0), 10, 380);
	ctx.fillText(mot.get(1), 60, 380);
	ctx.fillText(mot.get(2), 100, 380);
	ctx.fillText(mot.get(3), 150, 380);
	ctx.fillText(mot.get(4), 200, 380);
	ctx.fillText(mot.get(5), 250, 380);
}
//___________________________________________________________________________
//fonction pour dessiner le Pendu
function drawpot(compt){
	var canvas=document.getElementById('gs');
  var ctx = canvas.getContext('2d');
  switch(compt){
    case 1:

    ctx.fillRect(10, 300, 160, 20);
    break;
    case 2:

    ctx.fillRect(80, 300, 20, -200);
    break;
    case 3:


    ctx.fillRect(80, 100, 160, 20);
    break;
    case 4:
		ctx.beginPath();
    ctx.moveTo(100, 150);
		ctx.lineTo(120,120);
		ctx.lineTo(120, 150);
		ctx.fill();
		ctx.closePath();

    break;
    case 5:

		ctx.fillRect(250, 80, 5, 50);

    ctx.fillRect(10, 300, 160, 20);
    break;
    case 6:

    ctx.fillRect(10, 300, 160, 20);
    break;
  }
}
//la fonction doit choisir un mot aleatoire dans la wordsToGuess
function wordselect() {
	function rIndex(max) {
		return Math.floor(Math.random() * Math.floor(max));
	}
	return wordsToGuess[rIndex(wordsToGuess.length)];
}

//todo:ecrire la fonction pour dessiner le Pendu
//__________________________________________________
// function recupere la saissie clavier et renvoie un boleen et la lettre saissie
//true si la lettre est dans le mot secret
function main(){
secretWord = wordselect();
console.log("mon mot secret est " + secretWord); //decommenter pour voir le mot a trouver
console.log("lettre saissie " + saissieLetter);
function saissie() {
	document.addEventListener("keypress", function(e) {
		console.log("Vous avez appuyé sur la touche " + String.fromCharCode(e.charCode));
		saissieLetter = String.fromCharCode(e.charCode);
		console.log(letterTry); //decommenter pout voir les lettres tester


		if (secretWord.includes(saissieLetter)) {
			console.log("c'est gagné!!!");
			var indice=secretWord.search(saissieLetter)
			mot.set(indice,saissieLetter);
			draw();
		}
		 else {
			 letterTry.push(saissieLetter);
			 console.log(letterTry);
			 console.log("perdu");
			 console.log(letterTry.length);
			 drawpot(letterTry.length);

		}
})
}
//fin de la fonction saissie_______________________________________________________
saissie();
draw();
console.log(compteur);
}
// fin de la fonction main_____________________________________________
//fonction qui compte les parties si >5 stop




//TEST:commande pour controler les actions dans la console
console.log(wordsToGuess); //decommenter pour voir la liste de mots


play.addEventListener('click',function (event){
	main();
	compteur = compteur+1 ;

	})
