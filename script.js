

const submit = document.getElementById('submit');

submit.addEventListener('click', (e) => {
      e.preventDefault();
      const username = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
     
      alert("your response is been recorded")
      
})