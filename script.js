function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    // $("#name").text(profile.getName());  
    // $(".data").css("display","block");
    // $("g-signin2").css("display","none");
    // console.log(googleUser);
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }
