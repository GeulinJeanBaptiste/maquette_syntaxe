// Les variables
/* Pour déclarer une variable je peux utiliser plusieurs termes: 
var : (outdated)  
const : (une variable constante: elle gardera le même type dans tout mon script)
let : ( un variable qui peut être réassignée à tout moment avec n'importe quelle valeur et n'importe que type)
*/
// Ma première instruction. Chaqque instruction se termine par un ;
let prenom = "Julien";
console.log("mon texte"); //console.log affiche des information de type string.
console.log(prenom); //racourci --> clg
// let prenom ="BOB";
// Il est interdit de redéclarer une variable.
prenom ="Bob" // type string
console.log(prenom);
prenom =42; // type number
console.log(prenom);
const lastName = "l'Éponge;"
console.log(lastName);
// const firstName = "Bob";
// console.log(firstName);
// lastName = "142"; une variable const ne peut pas être réassignée
const block = document.querySelector("#block");
// .querySelector est du css
// block = "Bonjour; ne marche pas"
block.style.backgroundColor = "red";
block.innerText = "Patate";
console.log(block);
console.dir(block);
block.innerHTML = "<button>Grosse patate</button>";
/* pour utiliser des caractères spéciaux (ex:"") dans une chaine de caractère je doit utiliser devant ces derniers un \ */
block.textContent = "Grosse \"grosse\"patate";
/* les tableaux ARRAY représentés par des crocets []*/
// const color1 = "orange";
// const color2 = "fuchsia";
// const color3 = "red";
// console.log(color2);

const themecolor = ["orange","fuchsia","red"];
console.log(themecolor[1]);
themecolor[1] = "green";
console.log(themecolor);

const TVA = [5.5,20];
console.log(TVA);
console.log(TVA[0]);
console.log(TVA[1]);
console.dir(TVA);

let prixbrut = 499;
// console.log(prixbrut);
// console.dir(prixbrut);
// console.log(prixbrut+(prixbrut*TVA[0]/100));
// console.log(prixbrut+(prixbrut*TVA[1]/100));

// afficher dans la div #resultatPrix1 le calcul de tva 5.5
const resultatPrix1 = document.querySelector("#resultatPrix1");
resultatPrix1.innerText = (prixbrut+(prixbrut*TVA[0]/100)); // Calcul de prix brut + TVA 5.5

prixbrut = 259;
// console.log(prixbrut+(prixbrut*TVA[0]/100));
// console.log(prixbrut+(prixbrut*TVA[1]/100));
// afficher dans la div #resultatPrix2 le calcul de tva 5.5
const resultatPrix2 = document.querySelector("#resultatPrix2");
resultatPrix2.innerText = (prixbrut+(prixbrut*TVA[0]/100)); // Calcul de prix brut + TVA 5.5










