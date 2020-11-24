// var load = $('#load-text').text();
    
// function load_animation(){
    
//     // for(i = 0; i < load.length; i++)
//     // {
//         $('#load-text').fadeIn('slow');
        
//     // }
// }
var x = 1;
var p = 0;
var random_id = Math.floor((Math.random()*1000));
function send_message(value, bot_reply){
    
    // var value = $('#inpu').val();
    var d = new Date();
    var add_date = d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear();

    var add_time = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();

    // var bot_respond = chat_send_msg(value, random_id);   //storing bot renponse of user input
    // alert(bot_respond);

    if(value == "")
    {
        alert('where is your message??');
    }
    else{

        if(p === 0)
        {
            $('#middle-wrapper').append('<div class = "col-sm-12 p-3" id="main-addition"></div>');
            p = 1;
        }
        $('#main-addition').append('<div class="d-flex mb-3 bg-none"><div class="p-2 ml-auto" id = "added1"><span class="pl-1 pr-1 ml-auto" id = "added3">' + add_time + ' on ' + add_date + '</span><br>' + value + '</div> </div>');

        $('#main-addition').append('<div class="d-flex mb-3 bg-none"><div class="p-2 mr-auto" id = "added2"><span class="pl-1 pr-1 mr-auto" id = "added3">' + add_time + ' on ' + add_date + '</span><br>' + bot_reply + '</div> </div>');
    }
    $('#inpu').val("");
    $('#main-addition').scrollTo(0,xH);
    // chat_send_msg(value);
}


function chat_send_msg(){
    var bot_answer;
    var value = $('#inpu').val();    //storing user input
    
    var send_data = {
        "message": value,
        "sender": random_id,
    };
    var send_data1 = JSON.stringify(send_data);
    $.ajax({
        method: 'POST',
        url: 'http://a27e6f8ea8e6.ngrok.io/webhooks/rest/webhook',
        contentType: 'application/json',
        dataType: 'json',
        data: send_data1,
        success: function(response){
            $.each(response, function(index, element) { 
                bot_answer = element.text;
                send_message(value, bot_answer);
                // return bot_answer;
            })
        },
        error: function(){
            alert('hoini ... vul hye6e');
        }  
    });
    
    
}

// function send_message(){
//     var value = $('#inpu').val();
//     var random_id = Math.floor((Math.random()*100));
    
//     var d = new Date();
//     var add_date = d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear();

//     var add_time = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();

//     bot_respond =  chat_send_msg(value, random_id);

//     if(value == "")
//     {
//         alert('where is your message??');
//     }
//     else{
//         if(x === 1)
//         {
//             if(p === 0)
//             {
//                 $('#middle-wrapper').append('<div class = "col-sm-12 p-3" id="main-addition"></div>');
//                 p = 1;
//             }
//             $('#main-addition').append('<div class="d-flex mb-3 bg-none"><div class="p-2 ml-auto" id = "added1"><span class="pl-1 pr-1 ml-auto" id = "added3">' + add_time + ' on ' + add_date + '</span><br>' + value + '</div> </div>');
//             x = 2;
//         }

//         else if(x === 2)
//         {
//             if(p === 0)
//             {
//                 $('#middle-wrapper').append('<div class = "col-sm-12 p-3" id="main-addition"></div>');
//                 p = 1;
//             }
//             $('#main-addition').append('<div class="d-flex mb-3 bg-none"><div class="p-2 mr-auto" id = "added2"><span class="pl-1 pr-1 mr-auto" id = "added3">' + add_time + ' on ' + add_date + '</span><br>' + value + '</div> </div>');
//             x = 1;
//         }
//     }
//     $('#inpu').val("");
//     $('#main-addition').scrollTo(0,xH);
//     // chat_send_msg(value);
// }






$('document').ready(function(){

    
    $('#inpu').focus();
    // load_animation();
    $('#send').click(function(){
        // send_message();
        chat_send_msg();
    })



    $('#inpu').keydown(function(e){
        
        if(e.keyCode === 13){
            // send_message();
            chat_send_msg();
        }
        
    })

    $('#refresh').click(function(){
        $('#inpu').focus();
        $('#middle-wrapper').empty();
        x = 1;
        p = 0;
        random_id = Math.floor((Math.random()*1000));
    });
    
    $('#main-addition').scrollTo(0,xH);
});