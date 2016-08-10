/**
 * All Filters of you needs...
 * @Damien: Noublies pas de faire lefiltre ville.... :p
 */
 app.filter('departement',function(){

   return function(tableau, dpt){
         if(!dpt){
            return tableau;
         }

         return  _.filter(tableau, function(use){
              return use.codepostal.toString().substr(0,2) == dpt.substr(0,2)
         });

   };
 });

 app.filter('drapeau', function(){
   	return function(langue){
       switch (langue) {
         case "es":
          return "http://www.europetrotteur.com/images/drapeau_Espagne.png";
         case "en":
          return "http://www.europetrotteur.com/images/drapeau_United%20Kingdom.png";
         case "it":
          return "http://www.europetrotteur.com/images/drapeau_Italie.png";
         case "fr":
            return "http://www.europetrotteur.com/images/drapeau_France.png";
         default:
         return   "http://flags-and-anthems.com/images/flags/flag-switzerland-flagge-quadratischweiss-13x13.gif";
       }
     };
	});


app.filter('mineur',function () {
    return function (tableau, checked) {

      var majeurs = []; //tableau des majeurs
      var mineurs = []; //tableaud des mineurs

      if (checked == undefined) {
        return tableau;
      }


      // Rangement des majeurs et mineurs
      for (user of tableau) {

        if (user.age >= 18) {
          majeurs.push(user);
        }
        else {
          mineurs.push(user);
        }

      }



    //Si switch coché
    if (checked == false) {
      checked = true; //variable drapeau
      return mineurs;
    }

      checked = false;
      return majeurs;
    };
});


app.filter('naissance',function(){

   return function(tableau, date){
         if(date === undefined || date === null){
            return tableau;
         }

         return  _.filter(tableau, function(use){
            return moment(use.birthday,'DD/MM/YYYY') > moment(date);
         });

   };
});

app.filter('plus',function(){

   return function(tab, id){


     obj = _.find(tab, function(obj) { return obj.id == id })

     if(obj === undefined){
          return false;
     }
     console.log(obj.compteur);

     return obj.compteur;
   };
});

app.filter('notes',function(){

   return function(tableau, note){
         if(note === undefined || note === null){
            return tableau;
         }
         return  _.filter(tableau, function(use){
            return use.noteBac >= note;
         });

   };
});


 app.filter('range', function(){
   return function(tab, tranches){

     //filters all true
     tranches = _.filter(tranches, function(elt){
        return elt.checked === true;
     });

     if(tranches.length === 0){
       return tab;
     }

     var tabFilter =  [];
     _.each(tranches ,function(tranche){
        if(tranche.data === "10-25"){
          tabFilter.push(_.filter(tab, function(elt){
             return elt.age >= 10 && elt.age <= 25;
          }));
        }
        else if(tranche.data === "25-45"){
          tabFilter.push(_.filter(tab, function(elt){
             return elt.age >= 25 && elt.age <= 45;
          }));
        }
        else if(tranche.data === "45-60"){
          tabFilter.push(_.filter(tab, function(elt){
             return elt.age >= 45 && elt.age <= 60;
          }));
        }

      });

    // concatener
    tabFilter = [].concat.apply([], tabFilter);

    return tabFilter;
};

});

app.filter('sexe',function(){

   return function(sexe){
     console.log();
         if(sexe === false){
            return "Femme";
         }
         return  "Homme";

   };
});


app.filter('search', function() { // creation filtre les note bac

    return function(matches, note) {
        var result = [];// tableau d objet filtrer à retourner
        var regex = new RegExp(note, 'i'); // recup  de la saisie en conversion Regex
        if (note === "" || note === undefined ) { // si la saisie du champ est a 0 jreturn tt
          return matches;
        }

        console.log(regex);

        angular.forEach(matches, function(match, key) { // boucle qui va rechercher le tableau d'objet
            var nom = match.nom; // recup nom de l user
            var prenom = match.prenom;// recup prenom de l user

            if (regex.test(nom +" " +prenom)) { // verif si le champ correspond a nom ou prenom et le return
                 result.push(match);
            }
        });

        return result; // return le tableau filtrer
    };
});


app.filter('age',function(){

   return function(tab, age){
         return  _.filter(tab, function(use){
            return use.age ;
         });

   };
});
