// Usual Javascript
function toggleSignUp() {
  alert('Thank you for signing-up!');
}

let status = true;
// EcmaScript
const toggleGetStarted = () => {

  if (status) {
    document.getElementById("title").innerHTML = "Thank you very much!";
    document.getElementById('subtitle').style.display = 'none';
    document.body.style.background = "url('./background1.jpg') no-repeat";
    status = false;
  } else {
    document.getElementById("title").innerHTML = "Design Better. Faster. Together.";
        document.getElementById('subtitle').style.display = 'block';
    document.body.style.background = "url('./background.jpg')";
    status = true;
  }
}
