$( document).ready(function(){
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=9b99b08423dce4c7c77dc2ce80924047",
        dataType: "json",
        success: function(data){
            console.log(data.city);
        }
    });
});