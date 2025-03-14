# Atelier3 : Javascript et Functional Programming
## Exercice 1
### Description
Ce script JavaScript traite un tableau de nombres pour filtrer uniquement les nombres pairs et les trier par ordre croissant.
### Fonctionnalitées
=> Définition d'un tableau de nombres

=> Affichage du tableau original

=> Filtrage des nombres pairs uniquement

=> Tri des nombres pairs en ordre croissant

=> Affichage du tableau filtré et trié

```js
const numbers = [1, 7, 10, 9, 8 , 2];
console.log (numbers);
const pairenmbre = numbers.filter(num => num % 2 === 0).sort((a,b) => a-b);
console.log (pairenmbre);
```
=> **filter()** : Extrait les éléments selon un prédicat sans modifier la source

=> **sort()** : Réorganise les éléments sans effets secondaires

Cette approche fonctionnelle remplace efficacement ce qui aurait nécessité plusieurs boucles et variables temporaires en programmation impérative traditionnelle.

## Exercice 2
### Description
Ce script démontre plusieurs concepts avancés de programmation fonctionnelle en JavaScript par le calcul des factorielles pour une liste de nombres.
### Fonctionnalitées
=> **Récursivité**: La fonction factorial s'appelle elle-même pour résoudre le problème de façon élégante.

=> **Fonctions de premier ordre** : La fonction factorial est traitée comme une valeur et passée directement à la méthode map().

=> **Expression conditionnelle ternaire** : Utilisation de condition ? valeur_si_vrai : valeur_si_faux comme alternative concise aux structures if/else.

=> **Immutabilité** : Le tableau original numbers reste inchangé pendant les opérations.

=> **Transformation de collection** : La méthode map() applique une fonction à chaque élément et retourne une nouvelle collection.

=> **Fonction pure** : factorial retourne toujours le même résultat pour les mêmes entrées sans effets secondaires.
```js
const factorial = n => (n <= 1 ? 1 : n * factorial(n - 1));

const numbers = [1, 3, 4];
console.log(numbers);
const factorialList = numbers.map(factorial);

console.log(factorialList); 

```
Cette implémentation représente l'élégance de la programmation fonctionnelle - la fonction récursive factorial est définie de manière concise grâce à la syntaxe des fonctions fléchées, puis appliquée à chaque élément du tableau via map() pour produire un nouveau tableau des résultats.

## Exercice 3
### Description
Ce script démontre le traitement fonctionnel de texte en JavaScript, illustrant comment manipuler et filtrer des chaînes de caractères à travers une série d'opérations chaînées.
### Fonctionnalitées
=> **Pipeline de traitement** : Création d'un flux de traitement des données à travers plusieurs opérations chaînées (map → filter → forEach).

=> **Transformation de collection** : Utilisation de map() pour transformer chaque élément d'une collection de manière uniforme.

=> **Filtrage déclaratif** : Application de filter() pour sélectionner des éléments selon un prédicat précis.

=> **Action terminale** : Utilisation de forEach() comme opération finale pour produire un effet (affichage).

=> **Abstraction des données** : Traitement du texte comme une collection de lignes plutôt que comme une chaîne monolithique.

=> **Immutabilité intermédiaire** : Les données originales ne sont pas modifiées pendant le traitement en chaîne.

```js
function Texte(texte) {
    // Divise le texte en lignes
    const lignes = texte.split('\n');
    
    // Convertit chaque ligne en majuscules, filtre celles contenant "I", et imprime celles filtrées
    lignes.map(ligne => ligne.toUpperCase())  // Conversion en majuscules
      .filter(ligne => ligne.includes('I'))  // Filtre les lignes contenant la lettre "I"
      .forEach(ligne => console.log(ligne));  // Imprime chaque ligne filtrée
  }
 
  const myTexte = `Cette phrase sans la lettre.
  Voici une  ligne avec la lettre i.
  Celle-ci contient un I majuscule.`;
  
  Texte(myTexte);
```
Cette approche fonctionnelle permet de traiter les données en trois étapes distinctes mais connectées : transformation (conversion en majuscules), filtrage (sélection des lignes contenant "I"), et action finale (affichage), créant ainsi un code plus lisible et modulaire qu'une approche procédurale traditionnelle avec des boucles imbriquées.

## Exercice 4
### Description
Ce script illustre deux approches fonctionnelles différentes pour trouver la valeur maximale dans un tableau de nombres, avec une démonstration active de la méthode utilisant reduce().
### Fonctionnalitées

=> **Réduction de collection** : Utilisation de reduce() pour transformer une collection en une valeur unique, suivant le paradigme fold/reduce fondamental en programmation fonctionnelle.

=> **Expression de fonction fléchée** : Définition concise de la fonction maximum avec la syntaxe des fonctions fléchées.

=> **Opérateur ternaire** : Emploi de l'expression conditionnelle cur > prev ? cur : prev pour comparer les valeurs de façon élégante.

=> **Valeur initiale d'accumulation** : Utilisation de -Infinity comme valeur de départ pour l'accumulateur. 

=> **Fonctions d'ordre supérieur** : La fonction maximum accepte une collection et applique une fonction de réduction sur celle-ci. 

=> **Méthode alternative commentée** : Le code montre également l'approche avec l'opérateur de décomposition (...) et Math.max() en commentaire, qui représente une application du pattern "apply".
```js
const numbers = [1, 7, 10, 9, 8];
console.log(numbers);

    //méthode 1
//const maxNumber = Math.max(...numbers);
//console.log("Le nombre maximum est :", maxNumber);

    //méthode 2
const maximum = (max) => max.reduce((prev,cur)=>(cur > prev ? cur : prev), -Infinity);
console.log("Le nombre maximum est :", maximum(numbers));
```
Cette implémentation représente un exemple classique de traitement fonctionnel - réduire une collection à une valeur unique via une fonction de comparaison, illustrant comment des opérations complexes peuvent être exprimées de manière concise avec les principes fonctionnels.

## Exercice 5
### Description
Ce script démontre l'application de techniques fonctionnelles pour traiter une collection d'objets représentant des produits, calculant le prix total avec TVA en utilisant des opérations de transformation et d'agrégation chaînées.
### Fonctionnalitées
=> **Composition de fonctions** : Chaînage des méthodes map() et reduce() pour créer un pipeline de traitement des données en une seule expression.

=> **Transformation de données** : Utilisation de map() pour convertir chaque prix unitaire en prix TTC (avec TVA de 25%).

=> **Accumulation** : Application de reduce() pour agréger tous les prix transformés en une somme totale.

=> **Structures de données immuables** : Le tableau d'objets original reste inchangé pendant les opérations.

=> **Projection** : Extraction et manipulation de la propriété price de chaque objet produit.

=> **Expression concise** : Utilisation de fonctions fléchées pour définir les transformations de manière succincte.
```js
const products = [
    { name: "Shirt", price: 20 },
    { name: "Shoes", price: 50 },
    { name: "Hat", price: 15 }
    ]; 

console.log(products);
const claculerTTc = products.map(v => v.price*1.25).reduce((p,n)=>p+n);
console.log("Le prix total est :" , claculerTTc);

```
Cette approche illustre l'élégance de la programmation fonctionnelle pour exprimer un calcul commercial (somme des prix avec TVA) en une seule ligne expressive, remplaçant efficacement ce qui aurait nécessité plusieurs boucles en programmation impérative traditionnelle

## Exercice 6
### Description
Cette application web permet de gérer un inventaire de produits avec une interface utilisateur intuitive. Elle offre des fonctionnalités de visualisation, de filtrage, de tri et d'analyse des données de produits.
### Fonctionnalitées
#### Chargement de données:
=> Importation de données produits à partir du fichier **donnee.JSON**
```js
document.getElementById('inputfile').addEventListener('change', function () {
    let fr = new FileReader();
    fr.onload = function () {
        products = JSON.parse(fr.result);
        displayProducts(products);
        populateCategories();
        updateCharts();
    }
    fr.readAsText(this.files[0]);
});
```

=> Format de données attendu: tableau d'objets avec les propriétés **name**, **price**, **category** et **stock**
```js
function displayProducts(filteredProducts) {
    let tbody = document.querySelector('#productTable tbody');
    tbody.innerHTML = '';
    filteredProducts.forEach(p => {
        let row = `<tr><td>${p.price} DH</td><td>${p.stock}</td><td>${p.name}</td><td>${p.category}</td></tr>`;
        tbody.innerHTML += row;
    });
}
```
#### Visualisation des données:
=> Affichage des produits sous forme de tableau avec colonnes pour le prix, le stock, le nom et la catégorie
Deux graphiques visuels:

    Graphique à barres montrant le niveau de stock pour chaque produit
    
    Graphique circulaire illustrant la répartition des produits par catégorie

#### Filtrage et recherche:
=> Recherche de produits par nom (filtrage en temps réel) 
```js
document.getElementById('search').addEventListener('input', function () {
    let searchValue = this.value.toLowerCase();
    let filtered = products.filter(p => p.name.toLowerCase().includes(searchValue));
    displayProducts(filtered);
});
```
=> Filtrage par catégorie via un menu déroulant
```js
function populateCategories() {
    let categories = [...new Set(products.map(p => p.category))];
    let filter = document.getElementById('categoryFilter');
    filter.innerHTML = '<option value="">Toutes les catégories</option>';
    categories.forEach(cat => {
        filter.innerHTML += `<option value="${cat}">${cat}</option>`;
    });
    filter.addEventListener('change', () => {
        let selectedCategory = filter.value;
        let filtered = selectedCategory ? products.filter(p => p.category === selectedCategory) : products;
        displayProducts(filtered);
    });
}
```

=> Affichage des produits à faible stock (moins de 5 unités)
```js
function showLowStock() {
    let lowStockProducts = products.filter(p => p.stock < 5);
    displayProducts(lowStockProducts);
}
```
#### Tri et analyse:
=> Tri des produits par prix ou par quantité en stock

```js
function sortTable() {
    let sortBy = document.getElementById('sortFilter').value;
    if (sortBy) {
        products.sort((a, b) => a[sortBy] - b[sortBy]);
        displayProducts(products);
    }
}

```
=> Calcul de la valeur totale de l'inventaire (prix × quantité)
```js
function calculateTotalPrice() {
    let total = products.reduce((sum, p) => sum + p.price * p.stock, 0);
    document.getElementById('totalPrice').textContent = `Prix total: ${total} DH`;
}
```
#### Affichage des statistiques :
Visualisation des stocks par produit et des répartitions par catégorie sous forme de graphiques (Chart.js)
```js
function updateCharts() {
    let ctx1 = document.getElementById('stockChart').getContext('2d');
    new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: products.map(p => p.name),
            datasets: [{ label: 'Stock', data: products.map(p => p.stock), backgroundColor: 'blue' }]
        }
    });
    
    let ctx2 = document.getElementById('categoryChart').getContext('2d');
    let categoryCounts = products.reduce((acc, p) => {
        acc[p.category] = (acc[p.category] || 0) + 1;
        return acc;
    }, {});
    new Chart(ctx2, {
        type: 'pie',
        data: {
            labels: Object.keys(categoryCounts),
            datasets: [{ data: Object.values(categoryCounts), backgroundColor: ['red', 'green', 'yellow', 'blue'] }]
        }
    });
}
```
<img src="https://github.com/user-attachments/assets/cbb7812b-e047-46ab-b62b-2b5c64a983e2" alt="Image" width="900" />
<img src="https://github.com/user-attachments/assets/1da06bb4-6f56-4398-b32f-f7df41566b72" alt="Image" width="900" />

# Conclusion :
Le code montre une implémentation claire des principes de **la programmation fonctionnelle**, notamment avec l'utilisation des fonctions map, filter, et reduce, qui permettent de traiter les données de manière déclarative et sans mutation. De plus, il utilise **JSON** pour importer et manipuler les données des produits, facilitant ainsi la gestion et l'affichage dynamique des informations dans l'application.
