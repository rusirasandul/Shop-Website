document.getElementById('feedbackForm').addEventListener('submit', function(event) {
      event.preventDefault();
  
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var rating = document.getElementById('rating').value;
      var comment = document.getElementById('comment').value;
  
      var message = document.getElementById('message');
  
      
      message.innerHTML = 'Feedback Submitted:<br>Name: ' + name + '<br>Email: ' + email + '<br>Rating: ' + rating + '<br>Comment: ' + comment;
  });
  

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


    // Initialize EmailJS with your user ID
    emailjs.init("your_user_id");

    // Function to send email
    function sendEmail(formData) {
        emailjs.send("your_service_id", "your_template_id", formData)
            .then(function(response) {
                console.log("Email sent successfully", response);
               
                window.location.href = "thankyou.html";
            }, function(error) {
                console.error("Email sending failed", error);
                
            });
    }

    // Event listener for form submission
    document.getElementById("feedbackForm").addEventListener("submit", function(event) {
        event.preventDefault(); 

       
        var formData = {
            firstname: document.getElementById("firstname").value,
            lastname: document.getElementById("lastname").value,
            email: document.getElementById("email").value,
            
        };

        
        sendEmail(formData);
    });
