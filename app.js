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
   location.href = "https://drive.google.com/file/d/1GDmNBwcG5jBSf0wr2GktS3KPa8GhyQyB/view";
 }


document.addEventListener('DOMContentLoaded', () => {
  (document.querySelectorAll('.notification .delete') || []).forEach(($delete) => {
    const $notification = $delete.parentNode;

    $delete.addEventListener('click', () => {
      $notification.parentNode.removeChild($notification);
     
    });
  });
});


const sendMail = () => {

  var newParams = {
    from_name: document.getElementById("name").value,
    message: document.getElementById("message").value
  };

  emailjs.send('service_artizyq', 'template_ffraocd', newParams).then((res) => {

      const ack = document.getElementById("ack");
  
      ack.innerHTML = "<div class='notification is-primary is-light'>Thank you for connecting.</div>";

      setTimeout(()=> {
        ack.innerHTML = "";
      }, 3000);
  });

}

// Typewriting effect

var line = document.getElementById("typewrite");

var typewriter = new Typewriter(line, {

  loop: true
});

typewriter.typeString("A Front-end Developer").pauseFor(3000).deleteChars(19).typeString("Back-end Developer").pauseFor(3000).deleteChars(18).typeString("Fullstack Developer").pauseFor(3000).start();

