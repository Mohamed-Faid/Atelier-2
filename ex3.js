class Vecteur2D {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    afficher() {
        console.log(`Vecteur(x: ${this.x}, y: ${this.y})`);
    }

    addition(v) {
        return new Vecteur2D(this.x + v.x, this.y + v.y);
    }
}

// Programme principal - Vecteur
let v1 = new Vecteur2D();                  // par défaut
let v2 = new Vecteur2D(3, 4);              // avec paramètres
v1.afficher();
v2.afficher();

let somme = v1.addition(v2);
console.log("Somme des vecteurs :");
somme.afficher();

class Rectangle {
    constructor(longueur = 1, largeur = 1) {
        this.nom = "rectangle";
        this.longueur = longueur;
        this.largeur = largeur;
    }

    afficher() {
        console.log(`${this.nom} - Longueur: ${this.longueur}, Largeur: ${this.largeur}`);
    }

    surface() {
        return this.longueur * this.largeur;
    }
}

class Carre extends Rectangle {
    constructor(cote = 1) {
        super(cote, cote);
        this.nom = "carré";
    }
}

// Programme principal - Rectangle & Carré
let rect = new Rectangle(4, 5);
let carre = new Carre(3);

rect.afficher();
console.log("Surface :", rect.surface());

carre.afficher();
console.log("Surface :", carre.surface());

class Point {
    constructor(x = 0.0, y = 0.0) {
        this.x = x;
        this.y = y;
    }

    afficher() {
        console.log(`Point(x: ${this.x}, y: ${this.y})`);
    }
}

class Segment {
    constructor(x1, y1, x2, y2) {
        this.orig = new Point(x1, y1);
        this.extrem = new Point(x2, y2);
    }

    afficher() {
        console.log("Segment :");
        this.orig.afficher();
        this.extrem.afficher();
    }
}

// Programme principal - Segment
let seg = new Segment(1, 2, 4, 6);
seg.afficher();
