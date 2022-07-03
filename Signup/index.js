const fullname = document.getElementById('fullname')
const email = document.getElementById('email')
const password = document.getElementById('password')
const signupbtn = document.getElementById('signup-btn')

signupbtn.onclick = function (e) {
  e.preventDefault()
  localStorage.setItem('fullname', fullname.value)
  localStorage.setItem('email', email.value)
  localStorage.setItem('password', password.value)
  {
    Swal.fire(
      'Sign up success!!!',
      'Wait for redirect after 2 seconds.....',
      'success'
    )
  }
  redirect = function () {
    location.href = "/Dashboard"
  }
  setInterval(redirect, 2000);
}

// function myFunction() {
//     var x = document.getElementById("password");
//     if (x.type === "password") {
//       x.type = "text";
//     } else {
//       x.type = "password";
//     }
//   }

