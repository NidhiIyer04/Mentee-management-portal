// Replace this with your actual data fetching logic (e.g., API call)
function loadData() {
  const menteeData = {
    name: "John Doe",
    enrollment_number: "123456",
    phone_number: "+1234567890",
    email: "john.doe@example.com",
    // Add all other mentee details here
  };
  
  document.getElementById("name").textContent = menteeData.name;
  document.getElementById("enrollment_number").textContent = menteeData.enrollment_number;
  document.getElementById("phone_number").textContent = menteeData.phone_number;
  document.getElementById("email").textContent = menteeData.email;
  // Update all other elements with corresponding data
}
