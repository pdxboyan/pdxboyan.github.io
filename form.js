let form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    const formData = {};
    const inputs = form.querySelectorAll("input");

    event.preventDefault();

    // Collecting all inputs
    inputs.forEach((input) => {
      if (input.type === "radio") {
        if (input.checked) {
          formData[input.name] = input.id;
        }
      } 
      else {
        formData[input.name] = input.value;
      }
    });

    // Printing formData
    console.log("====== Form Submission ======");
    console.log("Name: ", formData.name);
    console.log("Username: ", formData.username);
    console.log("Email: ", formData.email);
    console.log("Password: ", formData.password);
    console.log("Birthdate: ", formData.birthdate);
    console.log("Pronouns: ", formData.pronouns);
  });