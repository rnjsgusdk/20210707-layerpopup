/*eslint-disable*/

$(function(){



    $("botton.tabbtn").click(function(){
        $("botton.tabbtn").css({
            "border": '1px solid #aaa',
            "background-color":'#eee'
        });

        $(this).css({
            "border-bottm-color": "#fff",
            "background-color": "#fff"
        })
    });



    /*내용css */
    $("div.tabcontents").css({"dispaly":"none"});

    var datelink = $(this).attr("data-link");
    $("#" + datelink).css({"dispaly":"bolck"});


     /*$("#galleryarema").css({"dispaly":"bolck"});*/


    /*레이어팝업*/
    $("#poppoint").click(function(){
     $("div#layerbg").css({"display":"block"});
    });

    $("#closebtn").click(function(){
      $("div#layerbg").css({"display":"none"});
    });
    /*레이어팝업*/
});
