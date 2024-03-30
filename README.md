# TP Web de Takima

Léo Baleras

***

1. Le fichier `package-lock.json` est généré automatiquement lors de l'installation de packages npm. C'est un fichier qui possède des informations détaillées sur les dépendances installées, y compris les versions exactes, les sous-dépendances, les URL de téléchargement, etc. Il est utilisé pour garantir la reproductibilité des installations en fixant les versions des dépendances.

2. Le format à trois chiffres pour les numéros de version des dépendances npm est appelé Semantic Versioning (SemVer). Il suit un format MAJEUR.MINEUR.CORRECTIF, où la version MAJEURE est utilisée pour des modifications non retrocompatibles, la version MINEURE pour des fonctionnalités rétrocompatibles, et la version CORRECTIF pour des corrections de bugs.

3. Une devDependency est un package qui n'est nécessaire que pour le développement ou les tests, et non pour l'exécution réelle du projet. La différence avec une dépendance est que les devDependencies ne sont pas installées lors de la mise en production du projet, ce qui permet de réduire la taille du bundle et d'éviter d'inclure des packages inutiles.

4. Une closure/IIFE (Immediately Invoked Function Expression) est une fonction JavaScript qui s'exécute dès qu'elle est définie. Elle était utilisée pour la confidentialité des données et pour éviter les collisions de variables dans l'espace de noms global. Elle a été remplacée par les fonctions fléchées.

5. `import * from './utils'` importe toutes les exportations du module utils dans un objet, tandis que `import { parseUrl } from './utils'` importe seulement la fonction parseUrl. L'utilisation de la première méthode peut entraîner des importations inutiles et des tailles de bundles plus importantes, tandis que la deuxième méthode est plus efficace et recommandée.

6. Deux choses possibles avec les classes Java mais pas avec les classes ES6 sont : 
   1. l'Overloading : Java permet de définir plusieurs méthodes avec le même nom mais des signatures différentes, ce qui n'est pas possible en ES6.
   2. l'Interface : Java permet de définir des interfaces qui définissent des méthodes sans les implémenter, ce qui n'est pas possible en ES6.

7. La différence entre `var` et `let` est que `var` est à la portée de la fonction et `let` est à la portée du bloc. Cela signifie que `var` peut être accessible depuis n'importe où dans sa fonction, tandis que `let` ne peut être accessible que dans son bloc (et ses enfants).

8. La méthode `.bind(this)` crée une nouvelle fonction qui, lorsqu'elle est appelée, a son mot-clé `this` défini sur la valeur fournie. Si elle est supprimée, `this` à l'intérieur de la fonction peut ne pas faire référence à l'objet correct. Les fonctions fléchées n'ont pas leur propre `this`, elles héritent donc de la portée parente, ce qui rend `.bind(this)` inutile.

9.  Le symbole `@` dans `@babel/***` est utilisé dans npm pour désigner une famille de packages. Il permet de regrouper les packages sous une famille spécifique, ce qui peut être utile pour gérer de grands projets ou organisations (comme babel, angular...).

10. Les Promesses ont plusieurs avantages : 
    1.  Elles fournissent une méthode plus propre et plus lisible pour gérer les opérations asynchrones, 
    2.  Elles permettent une meilleure gestion des erreurs, 
    3.  Elles peuvent être facilement chaînées pour effectuer plusieurs opérations asynchrones en séquence.

11. La fonctionnalité async/await a été publiée dans ECMAScript 2017 (ES8).

12. La programmation orientée composants pour le web est considérée comme plus facile à maintenir car : 
    1.  Elle favorise la réutilisation du code, 
    2.  Elle rend le code plus facile à comprendre et à déboguer, 
    3.  Elle permet une meilleure séparation des préoccupations, chaque composant gérant une tâche spécifique.

13. La programmation fonctionnelle est un paradigme de programmation où les programmes sont construits en appliquant et en composant des fonctions. Elle met l'accent sur l'immutabilité, les fonctions pures et évite les données mutables et les effets secondaires.

14. La fonction `map()` applique une fonction donnée à chaque élément d'un tableau, et renvoie un nouveau tableau avec les résultats.

15. La fonction `filter()` crée un nouveau tableau avec tous les éléments qui passent le test implémenté par la fonction fournie.

16. La fonction `reduce()` applique une fonction contre un accumulateur et chaque élément du tableau (de gauche à droite) pour le réduire à une seule valeur de sortie.

17. La différence entre `.then()` et `async/await` lors de la gestion de fonctions asynchrones est que `.then()` est une méthode qui renvoie une Promise, tandis que `async/await` est un sucre syntaxique qui rend le code asynchrone plus facile à lire et à écrire, en particulier lors de la gestion de plusieurs opérations asynchrones.

18. Le préfixe `_` dans un fichier Sass indique généralement que le fichier est partiel, ce qui signifie qu'il n'est pas destiné à être compilé en CSS par lui-même, mais plutôt importé dans d'autres fichiers Sass. C'est une méthode courante pour organiser et réutiliser le code Sass.