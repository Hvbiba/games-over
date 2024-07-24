// get all sign up and log in inputs
let signInputs = document.querySelectorAll('#signUp input')
console.log(signInputs)
let logInputs = document.querySelectorAll('#logIn input')
console.log(logInputs)


// sign up form vaildation
if(signInputs.length > 0 )
{
// Fist name input
signInputs[0].addEventListener('keyup',function(){
    let name_1 = signInputs[0].value;
    let nameRegex = /^[A-Z][a-zA-Z]*$/;
    if(name_1.match(nameRegex)){
        // name is true
        document.getElementById('firstnameHelp').innerHTML = 'Vaild Name';
        this.style.border = '2px solid #157347';
    }else{
        // name not true
        document.getElementById('firstnameHelp').innerHTML = 'First Letter Should Be Capital.';
        this.style.border = '2px solid #BB2D3B';
    }
});


// seconde name input
signInputs[1].addEventListener('keyup',function(){
    let name_2 = signInputs[1].value;
    let nameRegex = /^[A-Z][a-zA-Z]*$/;
    if(name_2.match(nameRegex)){
        // name is true
        document.getElementById('secnameHelp').innerHTML = 'Vaild Name';
        this.style.border = '2px solid #157347';
    }else{
        // name not true
        document.getElementById('secnameHelp').innerHTML = 'First Letter Should Be Capital.';
        this.style.border = '2px solid #BB2D3B';
    }
});

// email input 
signInputs[2].addEventListener('keyup', function(){
    let email = signInputs[2].value;
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(email.match(emailRegex)){
        document.getElementById('emailHelp').innerHTML='Vaild Email';
        this.style.border = '2px solid #157347';
    }else{
        document.getElementById('emailHelp').innerHTML='Invaild Email';
        this.style.border = '2px solid #BB2D3B';
    }
});

//password input strong

signInputs[3].addEventListener('keyup', function(){
    let password = signInputs[3].value;
    let passRegex = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/;
    if(password.match(passRegex)){
        document.getElementById('passwordHelp').innerHTML = 'Strong Password';
        document.getElementById('passwordHelp').style.color ='#157347';
    }
    else{
        document.getElementById('passwordHelp').innerHTML = "Week Password";
        document.getElementById('passwordHelp').style.color ='#BB2D3B';
        document.getElementById('passwordHelp').style.fontWeight = 'bolder';
    }
});
}

async function signUp() {
    // Get the values of the input fields
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.querySelector('#signUp #email').value;
    const password = document.querySelector('#signUp #password').value;

    // Send a POST request to the signup API endpoint
    // fetch('https://movies-api.routemisr.com/signup', {
    //     method: 'POST', // Use the POST method
    //     headers: {
    //         'Content-Type': 'application/json' // Set the content type to JSON
    //     },
    //     body: JSON.stringify({ first_name: firstName, last_name: lastName, email, password }) // Send the input data as JSON
    // })
    // .then(response => response.json()) // Parse the JSON response
    // .then(data => {
    //     console.log('Response data:', data); // Debugging: log the response data
    //     if (data.success) {
    //         alert('Registration successful');
    //         location.href = './index.html';
    //     } else {
    //         alert('Registration failed: ' + (data.message || 'Unknown error'));
    //     }
    // })
    // .catch(error => {
    //     console.error('Error:', error);
    //     alert('Registration failed: ' + error.message);
    // });

    const api = await fetch(`https://movies-api.routemisr.com/signup`, {
        method: "post",
        body: JSON.stringify({ first_name: firstName, last_name: lastName, email, password }),
        headers: {
           Accept: "application/json",
           "Content-Type": "application/json",
        },
     });
  
     const response = await api.json();
  
     if (response.message === "success") {
        alert('Registration successful');
        location.href = './index.html';
     } else {
        alert('Registration failed: ' + (data.message || 'Unknown error'));
     }
  
     console.log(response);
}



async function logIn() {
    // Get the values of the input fields
    const email = document.querySelector('#logIn #email').value;
    const password = document.querySelector('#logIn #password').value;

    // Send a POST request to the login API endpoint
    // fetch('https://movies-api.routemisr.com/signin', {
    //     method: 'POST', // Use the POST method
    //     headers: {
    //         'Content-Type': 'application/json' // Set the content type to JSON
    //     },
    //     body: JSON.stringify({ email, password }) // Send the input data as JSON
    // })
    // .then(response => response.json()) // Parse the JSON response
    // .then(data => {
    //     console.log('Response data:', data); // Debugging: log the response data
    //     if (data.success) {
    //         alert('Login successful');
    //         location.href = './home.html';
    //     } else {
    //         alert('Login failed: ' + (data.message || 'Unknown error'));
    //     }
    // })
    // .catch(error => {
    //     console.error('Error:', error);
    //     alert('Login failed: ' + error.message);
    // });



    const api = await fetch(`https://movies-api.routemisr.com/signin`, {
        method: "post",
        body: JSON.stringify({ email, password }),
        headers: {
           Accept: "application/json",
           "Content-Type": "application/json",
        },
     });
  
     const response = await api.json();
  
     if (response.message === "success") {
        alert('Login successful');
        location.href = "./home.html";
     } else {
        alert('Login failed: ' + (data.message || 'Unknown error'));
     }
  
     console.log(response);
}



let createAcc =  document.getElementById('createAcc');
if(createAcc){
   setTimeout(function(){
        createAcc.addEventListener('click' , function(){
            location.href = './signUp.html';
        });
   },100);
}

let logLink = document.getElementById('logLink')
if(logLink){
    setTimeout(function(){
        logLink.addEventListener('click' , function(){
            location.href = './index.html';
        })
    },100);
}