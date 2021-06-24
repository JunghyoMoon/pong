const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 4,
    vx: 2,
    vy: 1,
};

const bar = {
    leftX: canvas.width * 0.05 - 1,
    rightX: canvas.width * 0.95 - 1,
    leftY: canvas.height / 2 - 25,
    rightY: canvas.height / 2 - 25,
    width: 2,
    height: 25,
    vy: 10,
};

const drawBall = (x, y, radius) => {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fillStyle = "#fbc531";
    ctx.fill();
    if (x + radius > canvas.width || x - radius < 0) {
        ball.vx = -ball.vx;
    }
    if (y + radius > canvas.height || y - radius < 0) {
        ball.vy = -ball.vy;
    }
};

const handleKeyDown = (event) => {
    const { code } = event;
    console.log(code, typeof code);
    if (code === "ArrowUp") {
        bar.rightY -= bar.vy;
    } else if (code === "ArrowDown") {
        bar.rightY += bar.vy;
    }
    if (code === "KeyW") {
        bar.leftY -= bar.vy;
    } else if (code === "KeyS") {
        bar.leftY += bar.vy;
    }
};

const drawBar = (x, y, width, height) => {
    ctx.fillStyle = "#fbc531";
    ctx.fillRect(x, y, width, height);
    document.addEventListener("keydown", handleKeyDown);
};

const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBar(bar.leftX, bar.leftY, bar.width, bar.height);
    drawBar(bar.rightX, bar.rightY, bar.width, bar.height);
    drawBall(ball.x, ball.y, ball.radius);
    ball.x += ball.vx;
    ball.y += ball.vy;
    window.requestAnimationFrame(draw);
};

const init = () => {
    draw();
};

init();
