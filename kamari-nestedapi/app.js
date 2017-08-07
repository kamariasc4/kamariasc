$(document).ready(function () {
    $.ajax({
        url: "https://randomuser.me/api/",
        dataType: "json",
        success: function (data) {
            console.log(data)
            var fname = data.results[0].name.first
            var lname = data.results[0].name.last
            var picture = data.results[0].picture.large;
            var nat = data.results[0].nat
            $('h1').append(fname);
            $('h2').append(lname);
            $('img').attr("src", picture);
            $('h4').append(nat);
            

            $.ajax({
                url: 'https://restcountries.eu/rest/v2/alpha?codes=' + nat,
                dataType: 'json',
                success: function(data){
                    console.log(data[0].name)
                    var country = data[0].name

                    $('h4').text(country);
                }
            })

        }
    })
});