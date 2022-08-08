/* 
    - Event submit
    - default browser events (preventDefault)  
    - prop elements
    - class FormData

*/

const form = document.querySelector(".js-form");

form.addEventListener("clic", (event) => {
  event.preventDefault();
  //console.log(event.currentTarget.elements.email.value);
  //console.log(event.currentTarget.elements[1].value);

  console.log(event.currentTarget);
  const formData = new FormData(event.currentTarget);
  formData.forEach((value, key) => {
    console.log(value, key);
  });
  console.log(formData);

  console.log(event.currentTarget);
  console.log(event.target);
});
