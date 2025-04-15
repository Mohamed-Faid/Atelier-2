Exercice 1 :
1. Ecrire une fonction constructeur voiture avec les attributs « model , marque, année, type,
carburant » .
2. créer une liste des voitures.
3. implémenter le mécanisme d’héritage entre la classes voitures et deux autre classes Hyndai
( attributs : série(string) , hybride (booléen) / méthodes : alarmer() )et Ford ( options (tableau )).
4. Trier puis afficher les voiture selon un ordre croissant des année.
Exercice 2 :
1. Creer deux objet native Etudiant ( nom : string , prenom : string , age : number , cne : string ) et
Professeur ( nom : string , age : number , cin : string , )
2. Ajouter une méthode étudier() a l’objet Etudiant, puis ajouter une méthode enseigner() a l’objet
Etudiant Professeur.
3. Trier les étudiants selon l’ordre alphabétique « nom , prénom et age».
#Exercice 3 :
En utilisant le javascript avec le standard EcmaScript 6 :
Définir une classe Vecteur2D avec un constructeur fournissant les coordonnées par défaut d’un
vecteur du plan (par exemple : x = 0 et y = 0).
Dans le programme principal, instanciez un Vecteur2D sans paramètre, un Vecteur2D avec ses deux
paramètres, et affichez-les.
Enrichissez la classe Vecteur2D précédente en lui ajoutant une méthode d’affichage et une méthode
de surcharge d’addition de deux vecteurs du plan.
Dans le programme principal, instanciez deux Vecteur2D, affichez-les et affichez leur somme.
Définir une classe Rectangle avec un constructeur donnant des valeurs (longueur et largeur) par
défaut et un attribut nom = "rectangle", une méthode d’affichage et une méthode surface renvoyant
la surface d’une instance.
Définir une classe Carre héritant de Rectangle et qui surcharge l’attribut d’instance : nom = "carré".
Dans le programme principal, instanciez un Rectangle et un Carre et affichez-les.
Définir une classe Point avec un constructeur fournissant les coordonnées par défaut d’un point du
plan (par exemple : x = 0.0 et y = 0.0).
Définir une classe Segment dont le constructeur possède quatre paramètres : deux pour l’origine et
deux pour l’extrémité. Ce constructeur définit deux attributs : orig et extrem, instances de la classe
Point. De cette manière, vous concevez une classe composite : la classe Segment est composée de
deux instances de la classe Point.
#Exercice 5 :
Créer un programme pour gérer une bibliothèque avec des livres, des catégories et des emprunts.
Utilisez Array, Set, Map et les méthodes demandées.
Instructions :
1. Gestion des livres (Array) :
• Créez un tableau books contenant 3 titres de livres (chaînes de caractères).
• Utilisez push pour ajouter un nouveau livre à la fin.
• Utilisez unshift pour ajouter un livre au début.
• Utilisez pop pour supprimer le dernier livre.
• Utilisez shift pour supprimer le premier livre.
• Affichez le tableau après chaque opération.
2. Gestion des catégories (Set) :
• Créez un Set nommé categories avec 3 catégories de livres (ex. : "Fiction",
"Science", "Histoire").
• Ajoutez une nouvelle catégorie avec add.
• Essayez d’ajouter une catégorie déjà existante (pour montrer que Set évite les
doublons).
• Supprimez une catégorie avec delete.
• Affichez le contenu du Set après chaque opération.
3. Gestion des emprunts (Map) :
• Créez un Map nommé borrows pour associer des livres à des emprunteurs (clé : titre
du livre, valeur : nom de l’emprunteur).
• Ajoutez 3 paires livre-emprunteur avec set.
• Supprimez une entrée avec delete.
• Vérifiez si un livre est emprunté avec has.
• Affichez le contenu du Map après chaque opération.
