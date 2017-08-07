// api key AIzaSyBX1qVDGx7YELXCIlrP4FQcBvWyUMPj3N4
$(document).ready(function () {
    $.ajax({
        url: "https://maps.googleapis.com/maps/api/staticmap?center=Australia&size=640x400&style=element:labels|visibility:off&style=element:geometry.stroke|visibility:off&style=feature:landscape|element:geometry|saturation:-100&style=feature:water|saturation:-100|invert_lightness:true&key=AIzaSyBX1qVDGx7YELXCIlrP4FQcBvWyUMPj3N4",
        dataType: "json",
        success: function (data) {
            console.log(data);
        }
    });
});

function onSignIn(googleUser) {
    console.log('User signed in!');
    var profile = googleUser.getBasicProfile();
    //change userName text, img source, & email text based on profile
    $(".userName").text(profile.getName());
    $("img").attr("src", 'https://cdn0.tnwcdn.com/files/2010/12/pins.jpg');
    $(".email").text(profile.getEmail());
}

//called when "sign out" button clicked
function onSignOut() {
    //should sign user out and toggleHidden
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.')
        //setting back to default
        $(".userName").text("USER_NAME");
        $("img").attr("src", "http://4.bp.blogspot.com/_0Q-vLFn_PCk/Shp-H5DcEeI/AAAAAAAADTU/PXrm6YnTz-M/s400/earth.jpg");
        $(".email").text("example@example.com");
    });
}