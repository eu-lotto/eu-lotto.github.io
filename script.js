// JavaScript function to update the countdown
function updateCountdown() {
    // Set the date we're counting down to
    var countDownDate = new Date("Jan 5, 2024 00:00:00").getTime();

    // Get the current date and time
    var now = new Date().getTime();

    // Calculate the remaining time
    var distance = countDownDate - now;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById("countdown").innerHTML = "Draw results in: " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // Update every 1 second
    setTimeout(updateCountdown, 1000);
};

window.addEventListener('load', function () {
    var countdownElement = document.getElementById('countdown');
    
    setTimeout(function () {
        countdownElement.classList.add('emphasized');
    }, 0); // 2000 milliseconds (2 seconds) delay
});

        function checkForm() {
            var username = document.getElementById('username').value;
            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;
            var submitButton = document.getElementById('submitButton');

            if (username.trim() !== '' && email.trim() !== '' && password.trim() !== '') {
                submitButton.removeAttribute('disabled');
            } else {
                submitButton.setAttribute('disabled', 'disabled');
            }
        };
		
function submitForm(event) {
    // Perform form validation if needed

    // Assuming you have a function updateCountdown() for countdown

    // Simulate a successful submission
    showSuccessMessage();

    // Get the form data
    var formData = new FormData(document.getElementById('myForm'));

    // Use AJAX to submit the form data
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'your_php_script.php', true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Handle the response if needed
        }
    };

    xhr.send(formData);

    event.preventDefault();
}



        function showSuccessMessage() {
            document.getElementById('myForm').style.display = 'none';

            // Display the success message
            var successMessage = document.createElement('div');
            successMessage.innerHTML = "<p>You entered the draw! You will be notified when the results are out.</p>";
			    successMessage.style.backgroundColor = 'red';
    successMessage.style.color = 'white';
    successMessage.style.padding = '20px';
    successMessage.style.borderRadius = '10px';
    successMessage.style.textAlign = 'center';
	successMessage.style.fontSize = '44px';
    successMessage.style.fontWeight = 'bold';
            document.body.appendChild(successMessage);
        }

//-----------Var Inits--------------
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
cx = ctx.canvas.width / 2;
cy = ctx.canvas.height / 2;

let confetti = [];
const confettiCount = 1500;
const gravity = 0.5;
const terminalVelocity = 5;
const drag = 0.075;
const colors = [
{ front: 'lightgreen', back: 'green' },
{ front: 'lightyellow', back: 'yellow' },
{ front: 'lightorange', back: 'orange' },
{ front: 'lightpink', back: 'pink' },
{ front: 'lightturquoise', back: 'turquoise' }];


//-----------Functions--------------
resizeCanvas = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  cx = ctx.canvas.width / 2;
  cy = ctx.canvas.height / 2;
};

randomRange = (min, max) => Math.random() * (max - min) + min;

initConfetti = () => {
  for (let i = 0; i < confettiCount; i++) {
    confetti.push({
      color: colors[Math.floor(randomRange(0, colors.length))],
      dimensions: {
        x: randomRange(2, 3),
        y: randomRange(2, 4) },

      position: {
        x: randomRange(0, canvas.width),
        y: canvas.height - 1 },

      rotation: randomRange(0, 2 * Math.PI),
      scale: {
        x: 1,
        y: 1 },

      velocity: {
        x: randomRange(-25, 25),
        y: randomRange(0, -50) } });


  }
};

//---------Render-----------
render = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  confetti.forEach((confetto, index) => {
    let width = confetto.dimensions.x * confetto.scale.x;
    let height = confetto.dimensions.y * confetto.scale.y;

    // Move canvas to position and rotate
    ctx.translate(confetto.position.x, confetto.position.y);
    ctx.rotate(confetto.rotation);

    // Apply forces to velocity
    confetto.velocity.x -= confetto.velocity.x * drag;
    confetto.velocity.y = Math.min(confetto.velocity.y + gravity, terminalVelocity);
    confetto.velocity.x += Math.random() > 0.5 ? Math.random() : -Math.random();

    // Set position
    confetto.position.x += confetto.velocity.x;
    confetto.position.y += confetto.velocity.y;

    // Delete confetti when out of frame
    if (confetto.position.y >= canvas.height) confetti.splice(index, 1);

    // Loop confetto x position
    if (confetto.position.x > canvas.width) confetto.position.x = 0;
    if (confetto.position.x < 0) confetto.position.x = canvas.width;

    // Spin confetto by scaling y
    confetto.scale.y = Math.cos(confetto.position.y * 0.1);
    ctx.fillStyle = confetto.scale.y > 0 ? confetto.color.front : confetto.color.back;

    // Draw confetto
    ctx.fillRect(-width / 2, -height / 2, width, height);

    // Reset transform matrix
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  });

  // Fire off another round of confetti
  if (confetti.length <= 10) initConfetti();

  window.requestAnimationFrame(render);
};

//---------Execution--------
initConfetti();
render();

//----------Resize----------
window.addEventListener('resize', function () {
  resizeCanvas();
});

