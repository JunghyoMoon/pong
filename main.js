const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let x = canvas.width / 2;
let y = canvas.height / 2;
let vx = 4;
let vy = 3;
const radius = 5;

const ball = (x, y, radius) => {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fillStyle = "#fbc531";
    ctx.fill();
    if (x + radius > canvas.width || x - radius < 0) {
        vx = -vx;
    }
    if (y + radius > canvas.height || y - radius < 0) {
        vy = -vy;
    }
};

const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ball(x, y, radius);
    x += vx;
    y += vy;
    window.requestAnimationFrame(draw);
};

draw();
