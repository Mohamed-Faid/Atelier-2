// 1. Fonction constructeur Voiture
function Voiture(model, marque, annee, type, carburant) {
    this.model = model;
    this.marque = marque;
    this.annee = annee;
    this.type = type;
    this.carburant = carburant;
}

// 3. Héritage - Classe Hyndai
function Hyndai(model, marque, annee, type, carburant, serie, hybride) {
    Voiture.call(this, model, marque, annee, type, carburant);
    this.serie = serie;
    this.hybride = hybride;
}

Hyndai.prototype = Object.create(Voiture.prototype);
Hyndai.prototype.constructor = Hyndai;

Hyndai.prototype.alarmer = function() {
    console.log("Alarme déclenchée pour la Hyndai " + this.model);
};

// Classe Ford
function Ford(model, marque, annee, type, carburant, options) {
    Voiture.call(this, model, marque, annee, type, carburant);
    this.options = options;
}

Ford.prototype = Object.create(Voiture.prototype);
Ford.prototype.constructor = Ford;

// 2. Création d'une liste de voitures
let voitures = [
    new Hyndai("i30", "Hyndai", 2020, "berline", "essence", "Premium", true),
    new Ford("Focus", "Ford", 2018, "compacte", "diesel", ["GPS", "Climatisation"]),
    new Hyndai("Kona", "Hyndai", 2022, "SUV", "hybride", "N Line", true),
    new Ford("Mustang", "Ford", 2019, "sport", "essence", ["Cuir", "Bluetooth", "Caméra"]),
];

// 4. Trier selon l'année (ordre croissant)
voitures.sort((a, b) => a.annee - b.annee);

// Affichage
voitures.forEach(v => {
    console.log(`Marque: ${v.marque}, Modèle: ${v.model}, Année: ${v.annee}`);
});

