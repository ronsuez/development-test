/**
 * StoreController
 *
 * @description :: Server-side logic for managing stores
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  'search':function  (req,res) {


    var query = req.param('query');
    
    console.log(query);

    var params = query.split(" ");

    async.waterfall([
      function createObject(callback){

        console.log('----New Data--');

        console.log(params);

        var dumpData = new Array();
        _.each(params, function (value) {
          var data = {
            word: value,
            att: ''
          }
          dumpData.push(data);
        });

        callback(null, dumpData);
    },
      function findByBrands(rawData, callback){
        console.log('find By Brands');

        Brands.find({}, function BrandList(err, data) {

          if (err) callback(err);

          _.each(data, function (ctype) {
            var w = ctype.name.toString().toUpperCase();

            _.each(rawData, function (pattern) {
              var b = pattern.word.toString().toUpperCase();

              if (w.match(b)) {
                console.log('found ' + b);
                pattern.att = 'bold';
              }
            });
          });

          callback(null,rawData);
        });
      },
      function findByClothesTypes(rawData, callback) {
        console.log('find By Clothes Types');
        ClothingTypes.find({}, function ClothingList(err, data) {

          if (err) callback(err);

          _.each(data, function (ctype) {
            var w = ctype.name.toString().toUpperCase();

            _.each(rawData, function (pattern) {
              var b = pattern.word.toString().toUpperCase();

              if (w.match(b)) {
                console.log('found ' + b);
                pattern.att = 'italic';
              }
            });
          });

          callback(null,rawData);

        });
      }
    ], function (err, result){

      if(err)
        return res.badRequest({
        err: err
      });

      console.log('---Result---');
      console.log(result);

      return res.ok({
        status: 'success',
        data: result
      });

    });
  }
};

