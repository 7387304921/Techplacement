// script.js


const course = {
    title: "Introduction to Programming",
    description: "Learn the basics of programming with this introductory course.",
    price: "5000",
  };
  
  function showCourseDetails() {
    // Update the content of the course detail section
    document.getElementById("course-title").textContent = course.title;
    document.getElementById("course-description").textContent = course.description;
    document.getElementById("course-price").textContent = course.price;
  
    // Show the course detail section
    document.getElementById("course-detail").style.display = "block";
  }
  
  function addToCart() {
    // Add the selected course to the cart (you can implement cart logic here)
    alert("Course added to cart!");
  }
  
  function checkout() {
    // Implement checkout functionality (redirect to payment page, etc.)
    alert("Proceeding to checkout...");
  }
  
  
  

const form = document.getElementById('paymentForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const cardNumber = document.getElementById('cardNumber').value;
  const expiryDate = document.getElementById('expiryDate').value;
  const cvv = document.getElementById('cvv').value;

  // Perform payment processing here
  console.log(`Card Number: ${cardNumber}, Expiry Date: ${expiryDate}, CVV: ${cvv}`);
  alert('Payment submitted successfully!');
});

  