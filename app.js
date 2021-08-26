// Get that hamburger menu cookin' //

document.addEventListener("DOMContentLoaded", function() {
    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(function($el) {
        $el.addEventListener("click", function() {
          // Get the target from the "data-target" attribute
          var target = $el.dataset.target;
          var $target = document.getElementById(target);
          // Toggle the class on both the "navbar-burger" and the "navbar-menu"
          $el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  });
  
  // Smooth Anchor Scrolling
  $(document).on("click", 'a[href^="#"]', function(event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top
      },
      500
    );
  });
  
  // When the user scrolls down 20px from the top of the document, show the scroll up button
  window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("toTop").style.display = "block";
    } else {
      document.getElementById("toTop").style.display = "none";
    }
  }
  
 const getResume = () => {
   location.href = "https://drive.google.com/file/d/19mv5kMeJYMUi5KJJ9xNyU9sJiWT236NI/view";
 }


 var btn = document.getElementById("btn");
 btn.onclick = (e) => {

  e.preventDefault();

  //Firebase Code

  const firebaseConfig = {
    apiKey: "AIzaSyCgfiNDKqjWaQ3VoNeDbQ2-tsYN_0O6Wzk",
    authDomain: "myportfolioform.firebaseapp.com",
    projectId: "myportfolioform",
    storageBucket: "myportfolioform.appspot.com",
    messagingSenderId: "750668611103",
    appId: "1:750668611103:web:5eb7db4a556efbc39f5f2a"
  };

  firebase.initializeApp(firebaseConfig);
  var firestore = firebaseApp.firestore();
  const db = firestore.collection("formData");

  const name = document.getElementById("Name");
  const email = document.getElementById("Email");
  const message = document.getElementById("Message");

  db.doc().set({
    name: name,
    email: email,
    message: message
  }).then(() => {console.log("data saved")}).catch((error) => {console.log(error)})

  //Firebase Code End
   
    const ack = document.getElementById("ack");
 
    ack.innerHTML = "<div class='notification is-primary is-light'>Thank you for connecting.</div>";

    setTimeout(()=> {
      ack.innerHTML = "";
    }, 3000);
 }

// document.addEventListener('DOMContentLoaded', () => {
  (document.querySelectorAll('.notification .delete') || []).forEach(($delete) => {
    const $notification = $delete.parentNode;

    $delete.addEventListener('click', () => {
      $notification.parentNode.removeChild($notification);
     
    });
  });
//});



