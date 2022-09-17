document.getElementById("my-form").addEventListener("submit", function (event) {
  event.preventDefault();
  const formElements = event.target.elements;
  const { firstName, lastName, email, password } = formElements;
  submitViaAPI({
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
  });
});

function submitViaAPI(data) {
  console.log(data);
  console.log("Submitted!");
}
