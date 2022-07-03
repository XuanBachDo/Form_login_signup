const email=document.getElementById('email')
const password=document.getElementById('password')
const form=document.getElementById('label')

form.onsubmit=function(e){e.preventDefault()
    if(email.value==localStorage.getItem('email')&&password.value==localStorage.getItem('password'))
{
    Swal.fire({
        icon: 'success',
        title: 'Login success!!!',
        text: 'Wait for redirect after 2 seconds.....',
      })
    redirect=function(){
        location.href="/Dashboard"
    }
    setInterval(redirect, 2000);
}

else{
      Swal.fire({
        icon: 'error',
        title: 'Wrong email or password! ',
        text: 'Please try again!!',
        footer: '<a href="">Forgot Password ?</a>'
      })
}
// localStorage.getItem('email',email.value)
    // localStorage.getItem('password',password.value)
}
