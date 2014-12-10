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

    var params = query.split(" ");

    var dumpData = new Array();
    _.each(params, function (value) {
      var data = {
        word: value,
        att: ''
      }
      dumpData.push(data);
    });

    var matchB = Brands.find({}, function ClothingList(err, data) {

      if (err) return next(err);

      _.each(data, function (ctype) {
        var w = ctype.name.toString().toUpperCase();

        // Aqui vendria el 2do foreach

        _.each(dumpData, function (pattern) {
          var b = pattern.word.toString().toUpperCase();

          if (w.match(b)) {
            console.log('found ' + b);
            pattern.att = 'bold';
          }
        });
      });
    });

    var matchB = ClothingTypes.find({}, function ClothingList(err, data) {

      if (err) return next(err);

      _.each(data, function (ctype) {
        var w = ctype.name.toString().toUpperCase();

        _.each(dumpData, function (pattern) {
          var b = pattern.word.toString().toUpperCase();

          if (w.match(b)) {
            console.log('found ' + b);
            pattern.att = 'italic';
          }
        });
      });

      console.log(dumpData);

      res.status(200);

      return res.json(dumpData);


    });
  }

};

