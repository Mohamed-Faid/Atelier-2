// 1. Gestion des livres avec Array
let books = ["Le Petit Prince", "1984", "Les Misérables"];
console.log("Initial books:", books);

// Ajouter à la fin
books.push("L'Étranger");
console.log("Après push:", books);

// Ajouter au début
books.unshift("Candide");
console.log("Après unshift:", books);

// Supprimer le dernier
books.pop();
console.log("Après pop:", books);

// Supprimer le premier
books.shift();
console.log("Après shift:", books);


// 2. Gestion des catégories avec Set
let categories = new Set(["Fiction", "Science", "Histoire"]);
console.log("Initial categories:", Array.from(categories));

// Ajouter une nouvelle catégorie
categories.add("Biographie");
console.log("Après ajout Biographie:", Array.from(categories));

// Ajouter une catégorie existante
categories.add("Fiction");  // Ne change rien
console.log("Après ajout Fiction (doublon):", Array.from(categories));

// Supprimer une catégorie
categories.delete("Science");
console.log("Après suppression Science:", Array.from(categories));


// 3. Gestion des emprunts avec Map
let borrows = new Map();

// Ajouter des paires livre-emprunteur
borrows.set("1984", "Alice");
borrows.set("Le Petit Prince", "Bob");
borrows.set("Les Misérables", "Charlie");
console.log("Emprunts initiaux:", Array.from(borrows.entries()));

// Supprimer une entrée
borrows.delete("1984");
console.log("Après suppression de '1984':", Array.from(borrows.entries()));

// Vérifier si un livre est emprunté
console.log("Le Petit Prince est emprunté ? =>", borrows.has("Le Petit Prince")); // true
console.log("1984 est emprunté ? =>", borrows.has("1984")); // false