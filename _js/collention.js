$(document).ready(function(){
    var i = 0;
    $('.heart').click(function(){
        $(this).css("color","red");
        var $item_text = $(this).closest('.sortImg_Text');
        var text = $item_text.find('.sortImg_store').text();
        var phone = $item_text.find('.sortImg_phone').text();
                
        var $item_img = $(this).closest('.sortImg_Text').closest('.sort_Store');
        var img = $item_img.find('.sortImg').attr('src');
        var href = $item_img.find('.sortImg_href').attr('href');
                
        var item_obj = {
            href: href,
            img: img,
            text: text,
            phone: phone,
        };
        console.log(item_obj);
                
        var $collent_Store = $('<div class="collent_Store"><a  class = "collent_href"><img class="collentImg" /><div class="collent_store"><h4></h4></div><br><div class="collent_phone"></div></div></a></div>')
                
        $collent_Store.find('.collent_href').attr('href',item_obj.href);
        $collent_Store.find('.collentImg').attr('src',item_obj.img);
        $collent_Store.find('.collent_store').text(item_obj.text);
        $collent_Store.find('.collent_phone').text(item_obj.phone);
       
                
        $('#collention').append($collent_Store); 
        
        $('#collention').css("height",'i+"60"');
    });
    
    $('#collent_bar').click(function(){
        $('#collention').slideToggle('slow');
    })
    
});