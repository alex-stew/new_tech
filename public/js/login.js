async function loginFormHandler (event) {
    event.preventDefault();
  
    const email = document.querySelector("#email-login").value.trim();
    const password = document.querySelector("#password-login").value.trim();
  
    if (email && password) {
      const response = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({ 
          email, 
          password,
         }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        console.log(response);
        document.location.replace("/");
      } else {
        alert("you have entered an incorrect username or password; please try again.");
      }
    }
}
  document
    .querySelector("#loginBtn")
    .addEventListener("click", loginFormHandler);  