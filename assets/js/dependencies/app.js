/**
 * Created by office-pc-ub on 09/12/14.
 */

$(function(){
  $('#search-button').on('click',function(){

    var value = $('#search-text').val();

    console.log(value);
    var data = {
      query: value
    };

    $.ajax({
      type: "POST",
      url: '/clothes/search',
      data: data,
      success: function(data){

        console.log(data);

      }
    });

  });

});
