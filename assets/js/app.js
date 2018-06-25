//reference database in firefox
var userRef = firebase.database().ref("newusers");

//GLOBAL VAIRABLES 
var email = $("#email1").val();
var pass = $("#pass1").val();
var userHero = $("#hero").val();
var userWorld = $("#world").val();
var emailR = $("#email").val();
var passR = $("#pass").val();


//JQUERY
$(document).ready(function() {
  //Click Event - for returnining user
//   $("#returnHero").on('click', function() {

//     $(".signIn").show();

//     //hide Create or Old User Buttons 
//     $("#userNewOrOld").hide();
// });

// //Click Event - New User Selected
//   $("#createHero").on('click',function(){

//     $(".signUpDiv").show();

//      //hide Create or Old User Buttons 
//     $("#userNewOrOld").hide();
// });

//CLICK EVENT - NEW USER SUBMIT
$('#submitBtn2').on('click', function () {
//grab input from user inputs (existing user)
    var email = $("#email1").val();
    var pass = $("#pass1").val();
    var userHero = $("#hero").val();
    var userWorld = $("#world").val();
     console.log(email);
     console.log(pass);
     console.log(userHero);
     console.log(userWorld);
//CREATE NEW USER FUNCTION    
   firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function (error) {
     
    // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      console.log(email);
      console.log(pass);
    });
    saveUser(email, pass,userHero,userWorld);
  });

  $('#submitBtn').on('click', function(){
        
           //CREATE NEW USER FUNCTION    
           firebase.auth().signInWithEmailAndPassword(emailR, passR).catch(function(error) {
         
        // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
          console.log("Welcome Back " + emailR);
          console.log("Password= " + passR);
        });
     
      });
    



  function saveUser(email,pass,userHero,userWorld){
    var newUserRef = userRef.push();
        newUserRef.set({
        email: email,
        pass:pass,
        userHero:userHero,
        userWorld:userWorld
      });
     }


  
});

$(document).ready(function(){
  // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();
});