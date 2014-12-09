/**
 * StoreController
 *
 * @description :: Server-side logic for managing stores
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  'search':function  (req,res,next) {

    var sails = req._sails;
    var query = req.param('query');

    var dumpData = new Array();

    var params = query.split(" ");

    _.each(params,function(value){
        var data ={
            word: value,
            att: ''
        }

        dumpData.push(data);

    });
    //the algorithm!!


    //first search for the brands

    var matchA = Brands.find({},function brandList(err, data){

       if (err) return next(err);

      _.each(dumpData, function(pattern){
        var w = pattern.word.toString();
        _.each(data, function (brand) {
          var b = brand.name.toString();
          if(w.match(b)){
            console.log('found '+b);
            pattern.att = 'bold';
          }

        });
      });

      console.log(dumpData);

    });

    ClothingTypes.find({}, function ClothingList(err, data){

        if (err) return next(err);

       _.each(dumpData, function(pattern){
         var w = pattern.word.toString();
         _.each(data, function (ctype) {
           var b = ctype.name.toString();

           if(w.match(b)){
             console.log('found '+b);
             pattern.att = 'italic';
           }
         });
       });

        console.log(dumpData);

     });



    // Set status code
    res.status(200);

    var data = {
      res: params
    }

    // If appropriate, serve data as JSON(P)
      return data;

  }
};

