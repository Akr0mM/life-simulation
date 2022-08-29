const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let cw = innerWidth;
let ch = innerHeight;
canvas.width = cw;
canvas.height = ch;

let particles = [];
let red;
let green;
let yellow;
let blue;

window.onload = function main() {
    yellow = create(1000, 'yellow');
    red = create(1000, 'red');
    green = create(1000, 'green');
    blue = create(1000, 'blue');

    animate();
};

function rules(settings) {
    rule(red, red, -0.1);
    rule(red, yellow, -0.01);
    rule(yellow, red, 0.01);
}


function animate() {
    update();
    draw();

    requestAnimationFrame(animate);
}

function update() {
    rules();
}

function draw() {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, cw, ch);
    particles.forEach(particle => {
        ctx.fillStyle = particle.color;
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, 3, 0, 2*Math.PI, false);
        ctx.fill()
    });
}

function create(number, color) {
    let group = [];
    for (let i = 0; i < number; i++) {
        group.push({ 'x': random(), 'y': random(), 'vx': 0, 'vy': 0, 's': 5, 'color': color });
        particles.push(group[i]);
    }
    return group;
}

function random() {
    return Math.floor(Math.random() * cw);
}

function rule(particles1, particles2, g) {
    for (let i = 0; i < particles1.length; i++) {
        let fx = 0;
        let fy = 0;
        let a
        let b
        for (let j = 0; j < particles2.length; j++) {
            a = particles1[i];
            b = particles2[j];
            let dx = a.x - b.x;
            let dy = a.y - b.y;
            let d = Math.sqrt(dx * dx + dy * dy);
            if (d > 0 && d < 100) {
                let F = g * 1 / d;
                fx += (F * dx);
                fy += (F * dy);
            }
        }
        a.vx = (a.vx + fx) * 0.5
        a.vy = (a.vy + fy) * 0.5
        a.x += a.vx;
        a.y += a.vy;
        if (a.x <= 0 || a.x >= cw) { a.vx *= -1 }
        if (a.y <= 0 || a.y >= ch) { a.vy *= -1 }
    }
}