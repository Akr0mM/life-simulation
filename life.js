const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let cw = innerWidth - 400;
let ch = innerHeight;
canvas.width = cw;
canvas.height = ch;

let particles = [];
let red;
let green;
let white;
let blue;

window.onload = function main() {
    setInput()

    green = create(1000, 'lime');
    red = create(1000, 'red');
    white = create(1000, 'white');
    blue = create(1000, '#4242ff');

    animate();
};

function rules(settings) {
    
}

function setInput() {
    let numbers = Array.from(document.querySelectorAll('.number'))
    numbers.forEach(input => {
        input.min = "0"
        input.max = "3000"
        input.value = "1000"
        input.step = "1"
    })

    let attraction = Array.from(document.querySelectorAll('.attraction'))
    attraction.forEach(input => {
        input.min = "-100"
        input.max = "100"
        input.value = "0"
        input.step = "0.5"
    })

    let inputs = Array.from(document.querySelectorAll('input'))
    inputs.forEach(input => {
        input.addEventListener('change', updateRules())
    })
}

function animate() {
    update();
    draw();

    requestAnimationFrame(animate);
}

function update() {
    rules();
}

function updateRules() {
    
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

function redRule(particles, g, radius) {
    for (let i = 0; i < red.length; i++) {
        let fx = 0;
        let fy = 0;
        let a
        let b
        for (let j = 0; j < particles.length; j++) {
            a = red[i];
            b = particles[j];
            let dx = a.x - b.x;
            let dy = a.y - b.y;
            let d = Math.sqrt(dx * dx + dy * dy);
            if (d > 0 && d < radius) {
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

function blueRule(particles, g, radius) {
    for (let i = 0; i < blue.length; i++) {
        let fx = 0;
        let fy = 0;
        let a
        let b
        for (let j = 0; j < particles.length; j++) {
            a = blue[i];
            b = particles[j];
            let dx = a.x - b.x;
            let dy = a.y - b.y;
            let d = Math.sqrt(dx * dx + dy * dy);
            if (d > 0 && d < radius) {
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

function blueRule(particles, g, radius) {
    for (let i = 0; i < blue.length; i++) {
        let fx = 0;
        let fy = 0;
        let a
        let b
        for (let j = 0; j < particles.length; j++) {
            a = blue[i];
            b = particles[j];
            let dx = a.x - b.x;
            let dy = a.y - b.y;
            let d = Math.sqrt(dx * dx + dy * dy);
            if (d > 0 && d < radius) {
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

function greenRule(particles, g, radius) {
    for (let i = 0; i < green.length; i++) {
        let fx = 0;
        let fy = 0;
        let a
        let b
        for (let j = 0; j < particles.length; j++) {
            a = green[i];
            b = particles[j];
            let dx = a.x - b.x;
            let dy = a.y - b.y;
            let d = Math.sqrt(dx * dx + dy * dy);
            if (d > 0 && d < radius) {
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