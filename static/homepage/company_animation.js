const track = document.querySelector(".companies-track");

track.innerHTML += track.innerHTML;

let position = 0;
let paused = false;

track.parentElement.onmouseenter = () => paused = true;
track.parentElement.onmouseleave = () => paused = false;

function move() {
    if (!paused) {
        position +=1;
        track.style.transform = `translateX(-${position}px)`;
    }
    requestAnimationFrame(move);
}

move();