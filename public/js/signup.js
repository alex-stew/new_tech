async function signupFormHandler(event) {
    event.preventDefault();
  
    const email = document.querySelector("#email-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();
    const name = document.querySelector("#name-signup").value.trim();
  
    if (email && password && name) {
      if (password.length < 8) {
        alert("please enter a secure password, of at least 8 characters");
        return;
      }
      const response = await fetch("/api/users/signup", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          password,
        }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        console.log("password set");
        document.location.replace("/login");
      } else {
        alert("this email address is already in use. Please try again.");
      }
    }
}
  document
    .querySelector("#signupBtn")
    .addEventListener("click", signupFormHandler);