const enterBtn = document.getElementById('enterBtn');
enterBtn.addEventListener('click', () => {
  document.getElementById('note').scrollIntoView({ behavior: 'smooth' });
});

const noteButtons = document.querySelectorAll('.note-card');
const noteReveal = document.getElementById('noteReveal');
noteButtons.forEach((button) => {
  button.addEventListener('click', () => {
    noteButtons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    noteReveal.textContent = button.dataset.note;
  });
});

document.getElementById('surpriseBtn').addEventListener('click', (event) => {
  const message = document.getElementById('surpriseMessage');
  message.classList.toggle('show');
  event.currentTarget.innerHTML = message.classList.contains('show')
    ? 'You found it <span>♡</span>'
    : 'One tiny final thing <span>♡</span>';
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((section) => observer.observe(section));
