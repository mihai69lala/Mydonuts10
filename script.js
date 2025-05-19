let isSignUp = false;

function toggleForm() {
  const title = document.getElementById("form-title");
  const donut = document.querySelector(".donut");
  const form = document.getElementById("auth-form");

  donut.classList.add("animate-toggle");

  setTimeout(() => {
    donut.classList.remove("animate-toggle");

    isSignUp = !isSignUp;

    title.textContent = isSignUp ? "Sign Up" : "Sign In";
    form.querySelector("button[type=submit]").textContent = isSignUp ? "Register" : "Continue";
  }, 700);
}

document.getElementById("forgot-password").addEventListener("click", function (e) {
  e.preventDefault();
  const email = prompt("Enter your email for password reset:");
  if (email) {
    alert(`Password reset link sent to ${email}`);
  }
});

const togglePassword = document.getElementById('togglePassword');
const password = document.getElementById('password');

togglePassword.addEventListener('click', () => {
  // Animatia blink (inchidere ochi)
  togglePassword.classList.add('blink');

  setTimeout(() => {
    // toggle tip input
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);

    // inversăm emoji-urile: 🙈 când parola e ascunsă (password), 👁️ când e vizibilă (text)
    togglePassword.childNodes[0].nodeValue = type === 'password' ? '🙈' : '👁️';

    togglePassword.classList.remove('blink');
  }, 400);
});

function loginWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithRedirect(provider);
}
