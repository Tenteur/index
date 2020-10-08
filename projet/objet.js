/*var utilisateur = {
	nom: {
		prenom: "Paul",
		 famille: "Dupont"
	},
	 age: "25"
	};
console.log(utilisateur.nom.famille)*/

function Personne(nom, age, anniversaire) {
	this.nom = nom;
	this.age = age;
	this.anniversaire = anniversaire;
}

function Voiture(fab, an, prop) {
	this.fabricant = fab
	this.année = an
	this.propriétaire = prop

	this.genererMessage = function() {
		alert(this.propriétaire.nom + ' possède une ' + this.fabricant + ' de ' + this.année)
	};
}

var utilisateur1 = new Personne("Paul", "25", "30 Novembre");
var utilisateur2 = new Personne("Marc", "19", "15 Octobre");

var v = new Voiture("Toyota", "2005", utilisateur1)

utilisateur1.nom = "Jean";

v.genererMessage();