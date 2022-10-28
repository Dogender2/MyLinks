







$.ajax({
    url: './../Configuration/config.json',
    dataType: 'json',
    type: 'get',
    cache: false,
    success: function(data) {
        console.log(data);
        //OwnerName
        $("#OwnerName").text(data.Wlasciciel);

        //Instagram
        $("#igName").text(data.SocialMedia.instagram.IGname);
        $("#igUrl").attr("href", data.SocialMedia.instagram.IGurl)

        //Pinterest
        $("#PinName").text(data.SocialMedia.pinterest.PinName);
        $("#PinURL").attr("href", data.SocialMedia.pinterest.PinURL);

        //Facebook
        $("#fbName").text(data.SocialMedia.facebook.fbName);
        $("#fbURL").attr("href", data.SocialMedia.facebook.fbURL);
        
    }
})