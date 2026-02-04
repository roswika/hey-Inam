const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const popup = document.getElementById("popup");
const music = document.getElementById("loveMusic");
const loveNoteBtn = document.getElementById("loveNoteBtn");
const loveNote = document.getElementById("loveNote");
const countdown = document.getElementById("countdown");

// Move NO button playfully, but always visible
noBtn.addEventListener("mouseover", () => {
    const padding = 10; 
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
    noBtn.style.transform = `rotate(${(Math.random() - 0.5) * 30}deg)`;
});

// Heart burst
function heartBurst(x, y) {
    for (let i = 0; i < 25; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";

        heart.style.left = x + "px";
        heart.style.top = y + "px";

        const randomX = (Math.random() - 0.5) * 400;
        const randomY = Math.random() * -600;

        heart.animate([
            { transform: "translate(0,0)", opacity: 1 },
            { transform: `translate(${randomX}px, ${randomY}px)`, opacity: 0 }
        ], { duration: 2000, easing: "ease-out" });

        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 2000);
    }
}

// Floating hearts forever after YES
function floatingHearts() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = window.innerHeight + "px";

        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 4000);
    }, 350);
}

// Countdown to Feb 14
function updateCountdown() {
    const date = new Date("Feb 14 2026 00:00:00").getTime();
    const now = new Date().getTime();
    const diff = date - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    countdown.innerText = `Ice cream date countdown: ${days} days ${hours} hours 🍦`;
}

setInterval(updateCountdown, 1000);

// Show love note
loveNoteBtn.addEventListener("click", () => {
    loveNote.style.display = "block";
});

// YES button event
yesBtn.addEventListener("click", () => {
    const rect = yesBtn.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    popup.style.display = "flex";

    heartBurst(x, y);
    floatingHearts();
    music.play();
});

// Ice cream cursor trail
document.addEventListener("mousemove", (e) => {
    const ice = document.createElement("div");
    ice.classList.add("cursor-icecream");
    ice.innerHTML = "🍦";

    ice.style.left = e.clientX + "px";
    ice.style.top = e.clientY + "px";

    document.body.appendChild(ice);

    setTimeout(() => ice.remove(), 1000);
});
