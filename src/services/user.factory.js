app.factory('userFactory', function ($http) {

    var factory = {};

      // get all users
      factory.getAll =  function(){
        // //edit from https://jsonblob.com/57a59a90e4b0dc55a4eae792
        // befor: https://jsonblob.com/api/jsonBlob/57a59a90e4b0dc55a4eae792
        return $http.get('https://jsonblob.com/api/jsonBlob/57a8d915e4b0dc55a4eb7378')
        .success(function(response) {
            return response;
         });
      };


      // get one user
      factory.getOne =  function(nom, prenom){
         var users = this.getAll();
         if(users){
           return  _.find(users, function(user) {
             return user.nom == nom && user.prenom == prenom;
           });
         }

        return false
      };


      // remove one user
      factory.add =  function(user, users){
        return users.push({
           nom: user.nom,
           prenom:  user.prenom,
           age: parseInt(user.age),
           photo:  user.photo,
           birthday:  user.dob,
           noteBac:  parseInt(user.noteauBac),
           sexe:  user.sexe,
           ville: user.ville,
           biographie: user.biographie
        });
      };


      // remove one user
      factory.remove =  function(user, users){
        var index = users.indexOf(user);
        users.splice(index, 1);
        return users;
      };

      // get one user
      factory.hasMinor = function(users){
        return _.every(users,function(user) {return user.age < 18;})
      };

      // moyenne age
      factory.moyenneAge = function(users){
        return _.reduce(rangeFilter, function(memo, num){
          return memo + num.age;
        },0) / (rangeFilter.length === 0 ? 1 : rangeFilter.length);
      };


      // serach an user by term
      // factory.search = function(term){
      //
      //
      // };



   return factory;

});
