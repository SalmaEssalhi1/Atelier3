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
  