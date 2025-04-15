// Objet natif Etudiant
let etudiants = [
    {
        nom: "Zineb",
        prenom: "Ali",
        age: 21,
        cne: "CNE123",
        etudier: function() {
            console.log(`${this.prenom} ${this.nom} est en train d'étudier.`);
        }
    },
    {
        nom: "Amine",
        prenom: "Youssef",
        age: 23,
        cne: "CNE456",
        etudier: function() {
            console.log(`${this.prenom} ${this.nom} est en train d'étudier.`);
        }
    },
    {
        nom: "Amine",
        prenom: "Ahmed",
        age: 22,
        cne: "CNE789",
        etudier: function() {
            console.log(`${this.prenom} ${this.nom} est en train d'étudier.`);
        }
    }
];

// Objet natif Professeur
let professeur = {
    nom: "Bennani",
    age: 45,
    cin: "CIN789",
    enseigner: function() {
        console.log(`Le professeur ${this.nom} est en train d'enseigner.`);
    }
};


// Appel des méthodes
etudiants[0].etudier(); // Ali Zineb est en train d'étudier.
professeur.enseigner(); // Le professeur Bennani est en train d'enseigner.


etudiants.sort((a, b) => {
    if (a.nom !== b.nom) {
        return a.nom.localeCompare(b.nom);
    } else if (a.prenom !== b.prenom) {
        return a.prenom.localeCompare(b.prenom);
    } else {
        return a.age - b.age;
    }
});

// Affichage
console.log("Étudiants triés :");
etudiants.forEach(e => {
    console.log(`${e.nom} ${e.prenom} - ${e.age} ans`);
});
