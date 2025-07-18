const side = document.getElementById("side")
function openside(){
    side.style.transform = "translateX(-17rem)"
}
function closeside(){
    side.style.transform = "translateX(16rem)"
}


(function(){
    emailjs.init("Gv9HOHg-LEFHEFESs"); // Public Key (User ID)
  })();

 document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_4gkcj3p", "template_n3w5ge6", this)
      .then(function(response) {
          console.log("SUCCESS!", response.status, response.text);
          document.getElementById("contact-form").reset(); // Reset the form after successful submission
          alert("Message sent successfully!");
       }, function(error) {
         console.log(error);
          alert("Failed to send message. Please try again later.");
      });
  });
  
 
   