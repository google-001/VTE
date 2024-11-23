const button1 = document.querySelector('#a');
const button2 = document.querySelector('#b');
const button3 = document.querySelector('#c');
const button4 = document.querySelector('#d');
const button5 = document.querySelector('#e');
const values = document.querySelector('#starval');
button1.addEventListener('click',()=>{
    button1.innerHTML = '&bigstar;'
    button2.innerHTML = '&star;'
    button3.innerHTML = '&star;'
    button4.innerHTML = '&star;'
    button5.innerHTML = '&star;'
    values.value = '1'
})
button2.addEventListener('click',()=>{
    button1.innerHTML = '&bigstar;'
    button2.innerHTML = '&bigstar;'
    button3.innerHTML = '&star;'
    button4.innerHTML = '&star;'
    button5.innerHTML = '&star;'
    values.value = '2'
})
button3.addEventListener('click',()=>{
    button1.innerHTML = '&bigstar;'
    button2.innerHTML = '&bigstar;'
    button3.innerHTML = '&bigstar;'
    button4.innerHTML = '&star;'
    button5.innerHTML = '&star;'
    values.value = '3'
})
button4.addEventListener('click',()=>{
    button1.innerHTML = '&bigstar;'
    button2.innerHTML = '&bigstar;'
    button3.innerHTML = '&bigstar;'
    button4.innerHTML = '&bigstar;'
    button5.innerHTML = '&star;'
    values.value = '4'
})
button5.addEventListener('click',()=>{
    button1.innerHTML = '&bigstar;'
    button2.innerHTML = '&bigstar;'
    button3.innerHTML = '&bigstar;'
    button4.innerHTML = '&bigstar;'
    button5.innerHTML = '&bigstar;'
    values.value = '5'
})
document.getElementById("my-form").addEventListener("submit", async function(event) {
  event.preventDefault(); // Prevent default form submission

  const status = document.getElementById("my-form-status");
  const button = document.getElementById("my-form-button");
  const data = new FormData(event.target);
  let formname = document.querySelector('#formname');
  const bodys = document.querySelector('.body');
  const Thankyou = document.querySelector('.thankyou');
  const namer = document.getElementById('second');

  button.disabled = true; // Disable the button during submission

  try {
    const response = await fetch(event.target.action, {
      method: event.target.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      status.innerHTML = "Thanks for your submission!";
      event.target.reset(); // Reset the form
      bodys.style.display = 'none' // Redirect to index.html
      Thankyou.style.display = 'flex'
      namer.style.color = 'white'
      namer.style.fontSize = '15px'
      namer.innerHTML = formname.value
    } else {
      const errorData = await response.json();
      status.innerHTML = errorData.errors ? errorData.errors.map(err => err.message).join(", ") : "Oops! There was a problem.";
    }
  } catch (error) {
    status.innerHTML = "Oops! There was a problem submitting your form.";
  } finally {
    button.disabled = false; // Re-enable the button
  }
});