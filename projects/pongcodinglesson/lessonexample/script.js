const canvas = document.getElementById("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");
let setSpeed = 50;

let paddle = {
    pos: {
        x: canvas.width - 50,
        y: 10
    },
    size: {
        x: 10,
        y: 50
    }
}

let ball = {
    pos: {
        x: canvas.width / 2,
        y: canvas.height / 2
    },
    vel: {
        x: 2,
        y: 1.5
    },
    size: 5
};

window.addEventListener("mousemove", function (e) {
    let y = e.clientY - paddle.size.y / 2

    if (y < ball.size * 2) {
        y = ball.size * 2
    } else if (y > canvas.height - paddle.size.y - ball.size * 2) {
        y = canvas.height - paddle.size.y - ball.size * 2
    }

    paddle.pos.y = y

    if ((ball.pos.x + ball.size >= paddle.pos.x + ball.size / 2 && ball.pos.x - ball.size <= paddle.pos.x + paddle.size.x - ball.size / 2) && (ball.pos.y + ball.size >= paddle.pos.y + 1 && ball.pos.y - ball.size <= paddle.pos.y + paddle.size.y - 1)) {
        if (ball.pos.y <= paddle.pos.y + paddle.size.y / 2) {
            ball.pos.y = paddle.pos.y - ball.size;
        } else if (ball.pos.y >= paddle.pos.y + paddle.size.y / 2) {
            ball.pos.y = paddle.pos.y + paddle.size.y + ball.size;
        }
    }
})

function reflect(x) {
    if (x == true) {
        if (ball.vel.x > 0) {
            ball.vel.x -= Math.abs(ball.vel.x * 2);
        } else {
            ball.vel.x += Math.abs(ball.vel.x * 2);
        }
    } else {
        if (ball.vel.y > 0) {
            ball.vel.y -= Math.abs(ball.vel.y * 2);
        } else {
            ball.vel.y += Math.abs(ball.vel.y * 2);
        }
    }
}

function drawCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";

    ctx.beginPath();
    ctx.arc(ball.pos.x, ball.pos.y, ball.size, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.fillRect(paddle.pos.x, paddle.pos.y, paddle.size.x, paddle.size.y);
}

let ended = false

function end() {
    ended = true;

    ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let txt = "Game Over";
    let fontSize = 30;
    ctx.fillStyle = "white";
    ctx.font = fontSize + "px serif";
    ctx.fillText(txt, canvas.width / 2 - ctx.measureText(txt).width / 2, canvas.height / 2 + fontSize / 2);
}

function run() {
    ball.pos.x += ball.vel.x;
    ball.pos.y += ball.vel.y;

    //wall colide
    if (ball.pos.x + ball.size >= canvas.width) {
        end();
    }

    if (ball.pos.x - ball.size <= 0) {
        reflect(true);
    }

    if (ball.pos.y + ball.size >= canvas.height || ball.pos.y - ball.size <= 0) {
        reflect(false);
    }

    //paddle collide
    if ((ball.pos.x + ball.size >= paddle.pos.x && ball.pos.x - ball.size <= paddle.pos.x + paddle.size.x) && (ball.pos.y + ball.size >= paddle.pos.y && ball.pos.y - ball.size <= paddle.pos.y + paddle.size.y)) {
        if (ball.pos.x <= paddle.pos.x || ball.pos.x >= paddle.pos.x + paddle.size.x) {
            reflect(true);
        }

        if (ball.pos.y <= paddle.pos.y || ball.pos.y >= paddle.pos.y + paddle.size.y) {
            reflect(false);
        }
    }

    if (ended == false) {
        drawCanvas();

        if (setSpeed > 1) {
            setSpeed -= 0.01;
        }

        if (ball.vel.x > 0) {
            ball.vel.x += 0.000002;
        } else {
            ball.vel.x -= 0.000002;
        }

        if (ball.vel.y > 0) {
            ball.vel.y += 0.0000015;
        } else {
            ball.vel.y -= 0.0000015;
        }

        window.setTimeout(run, setSpeed);
    }
}

function main() {
    ended = false;
    setSpeed = 50;
    ball.pos.x = canvas.width / 2;
    ball.pos.y = canvas.height / 2;
    let num1 = Math.floor(Math.random() * 2);
    let num2 = Math.floor(Math.random() * 2);

    if (num1 == 0) {
        ball.vel.x *= -1;
    }

    if (num2 == 0) {
        ball.vel.y *= -1;
    }

    run();
}

main();

canvas.addEventListener("click", main);
