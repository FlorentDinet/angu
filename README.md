AngularJS
===================


Project from *AngularJS**[^stackedit] for 3WAL10

----------

![GitHub Logo](/screens/v1.png)



Bower
===================

Launch bower init .
Install Jquery & Moment with Bower
Install all moduiles Angular you need:
+ angular-animate pours les animations
+ angular-aria pour les aria
+ angular-cookies pour lire er ecrire des cookis
+ angular-material pour les composant Material d'ANgular
+ angular-messages  pour les messages de validation formulaires
+ angular-resource: pour gérer le RESTFUll
+ angular-sanitize: pou satanizer le HTML ds le JS
+ angular-translate: traduit en internationnalisation


Gulp for workin environment
===================
Launch npm install


Angular Materilizecss
===================

https://krescruz.github.io/angular-materialize/


Angular Best Modules
===================
+ i18n
+ Animates
+ Form validation
+ Angular UI https://angular-ui.github.io/


Angular Datas on ./datas
===================

Idées
===================

+ Like / Dislike one time
+ Favorite in memory Local STorage
+ Nosql Intercations
+ Playlist de sound SouncCloud GOT



Angular StyleGuide
------------------

https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md


Angular est un framework MVC
----------------------------

En deux mots, il s'agit donc d'un patron de conception qui vous permet d'avoir une stricte séparation entre la vue (ce que l'utilisateur voit), le modèle (les données du système) et le contrôleur (les actions possibles de votre système).
 Il s'agit donc de développer plusieurs "petits" contrôleurs qui vont agir sur différents éléments de la page. Un exemple visuel sera plus parlant :

![enter image description here](https://sdz-upload.s3.amazonaws.com/prod/upload/mvc-angular.png)


LA NOTION DE DATA-BINDING
-------------------------

AngularJS. Il s'agit d'un moyen de lier la partie vue à la partie logique. En d'autres termes, grâce à cela, les éléments de votre code HTML seront liés à votre contrôleur JavaScript.

[Example en demo du JS->HTML](http://jsfiddle.net/6nwL3r1t/6/)

L'idée est de lier le HTML <->JS pour déclarer ce qui se passe et non comment cela se passe....


AngularJS est un framework qui appartient à la catégories **des frameworks MVVM** (Modèle-Vue-VueModèle). En d'autre termes, ces frameworks sont créés sur la base du binding.
Fini les modification du DOM. Tout se passera désormais grâce aux bindings.

[Autre exemple montrer que les elemnts sont lié entre eux](http://jsfiddle.net/7sh8a9oz/)



Injection des dépendances
-------------------------

 - **La simplicité**. Avouez que c'est très pratique pour un développeur. Vous n'avez plus à vous soucier du comment instancier les modules que vous utilisez. Cela suit le principe du "least knowledge". Lorsque vous développez quelque chose, vous n'avez pas envie de vous soucier des autres composants, vous voulez juste les utiliser !
 - **La fiabilité**. Lorsque votre module est chargé, vous avez la certitude que toutes ses dépendances sont chargées et que vous avez la possibilité de les utiliser.
- **La réutilisabilité**. Nous le verrons lorsque nous aborderons la partie des services, mais il s'agit d'un point très important. Lorsque vous développez des services permettant par exemple de faire des conversions de dates, il y a fort à parier que vous souhaiteriez pouvoir réutiliser ce module dans d'autres projets. L'injection de dépendances permet donc d'inciter les développeurs à créer de petits modules unitaires et à les assembler par la suite pour créer des systèmes plus conséquents.
- **Les tests**. C'est un point extrêmement important. Vous commencez à me connaître et vous savez que j'accorde une très grande importance aux tests. Si le module que vous souhaitez tester possède 10 dépendances, il est assez embêtant d'avoir à instancier les 10 modules afin de pouvoir juste tester notre module. À la place, nous allons dire au système d'utiliser des mocks (des bouchons) qui vont se comporter comme nos dépendances.

$scope
------

Comme vous pouvez le constater, $scope constitue une dépendance de notre contrôleur. Il s'agit du mécanisme couramment utilisé par Angular afin d'exposer le modèle à la vue. En d'autres termes, le data-binding se fait grâce à cet objet $scope.


$watch
------
Il est souvent intéressant d'observer les changements de notre modèle.

$watch(watchFn, watchAction, deepWatch)

Analysons les paramètres :

*watchFn :* la propriété de votre modèle que vous souhaitez observer. Ce paramètre peut-être soit une fonction, soit une expression.
*watchAction* : fonction ou expression qui sera appelée lorsque watchFn  change.
*deepWatch* : ce paramètre est optionnel. Il s'agit d'un booléen qui lorsqu'il est vrai indique à Angular qu'il doit déclencher watchAction lorsque les sous-propriétés d'un objet changent. Ce paramètre est pratique lorsque vous souhaitez examiner l'ensemble des propriétés d'un tableau ou d'un objet.
