// 🎵 Play music on button click
function playMusic() {
  const audio = document.getElementById("birthday-audio");
  audio.play();
}

// 🎉 Confetti Effect
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const pieces = [];
for (let i = 0; i < 100; i++) {
  pieces.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 10 + 5,
    speed: Math.random() * 3 + 2,
    color: `hsl(${Math.random() * 360}, 100%, 50%)`
  });
}

function updateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  pieces.forEach(p => {
    p.y += p.speed;
    if (p.y > canvas.height) p.y = 0;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
  });
  requestAnimationFrame(updateConfetti);
}
updateConfetti();

// 👇 Scroll-to-show "Read More" box
window.addEventListener('scroll', () => {
  const readMoreBox = document.getElementById('readMoreBox');
  const triggerPoint = 200;

  if (window.scrollY > triggerPoint) {
    readMoreBox.classList.remove('hidden');
    readMoreBox.classList.add('fade-in');
  }
});
