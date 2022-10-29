

var title;
var descriptionContent;
let descNbr = 0;



var folder = "./../images/photos";

$.ajax({
    url : folder,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|JPG)$/) ) {


                
                $.ajax({
                    url: './../images/descriptions/desc.json',
                    dataType: 'json',
                    type: 'get',
                    cache: false,
                    success: function(data) {
                        
                        console.log(data);
                
                
                        title = data.zdjecia[descNbr].Title;
                        descriptionContent = data.zdjecia[descNbr].Description;

                        console.log(title);
                        console.log(descriptionContent);

                        $('#ImgTitle' + descNbr).text(title);
                        $('#imgDescrip' + descNbr).text(descriptionContent);
                        
                        console.log(descNbr);
                        descNbr++;



                        $("#container").append( "\
                        <li>\
                            \
                            <img alt='' src='" + val +"'>\
                            \
                            <div class='normalBox'>\
                            \
                            <span class='imgtit' id='ImgTitle"+descNbr+"'></span><br />\
                            \
                            <span class='imgdesc' id='imgDescrip"+descNbr+"'></span>\
                            \
                            </div>\
                        </li>\
                        ");
                    }
                })
                

                
            } 
        });
    }
});
