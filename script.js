
const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    themeToggleBtn.textContent = '☀️ Light Mode';
  } else {
    themeToggleBtn.textContent = '🌙 Dark Mode';
  }
});
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Form ko refresh hone se rokta hai
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  if (name === "" || email === "" || message === "") {
    alert("Kripya sabhi fields ko fill karein!");
    return;
  }
  alert(`Dhanyawad ${name}! Aapka message successfully receive ho gaya hai.`);
  contactForm.reset(); // Form clear kar dega
});