const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let x = canvas.width / 2;
let y = canvas.height / 2;
const radius = 10;

const ball = (x, y, radius) => {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fillStyle = "blue";
    ctx.fill();
};

const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let speed = 3;
    if (x + radius > canvas.width || x - radius < 0) {
        speed = -speed;
    }
    if (y + radius > canvas.width || y - radius < 0) {
        speed = -speed;
    }
    ball(x, y, radius);
    x += speed;
    y += speed;
    window.requestAnimationFrame(draw);
};

draw();
