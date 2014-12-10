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


        var result = "";

        $.each(data,function(index,value){

          console.log(value);

          if(value.att=='bold'){

            result += " <b>"+value.word+"</b> ";
          }else if(value.att=='italic'){

            result += " <i>"+value.word+"</i> ";
          }else{

            result += " "+value.word+" ";
          }

        });
        $('#result').html();
        
        $('#result').append(result);
      }
    });

  });

});
