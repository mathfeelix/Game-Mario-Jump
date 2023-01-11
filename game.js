// Mario and pipe images
const mario = document.getElementById("mario");
const pipe = document.getElementById("pipe");

// Adds jump animation to Mario when a key is pressed
// and removes it to reset the animation
document.addEventListener("keydown", () => {
  mario.style.animation = "mario-jump 800ms ease-out";
  setTimeout(() => {
    mario.style.animation = "";
  }, 800);
});

// Loop for the game
// It checks if Mario touches the pipe and end the game
const loop = setInterval(() => {
  const pipe_position = pipe.offsetLeft;
  const mario_position = parseFloat(window.getComputedStyle(mario).bottom);

  // 120px from the left is where the pipe touches Mario
  // 20px from the left is where Mario is located
  // We compare using 20px in case the pipe is going under Mario
  // 65px is the height of the pipe
  // It removes animations from Mario and the pipe to stop them
  // then freezes them in the position where they touched
  if (pipe_position < 120 && pipe_position > 20 && mario_position < 65) {
    pipe.style.animation = "none";
    mario.style.animation = "none";
    pipe.style.left = `${pipe_position}px`;
    mario.style.bottom = `${mario_position}px`;

    // Changes Mario's picture and ajusts its margin
    mario.src = "./images/game-over.png";
    mario.style.width = "50px";
    mario.style.marginLeft = "50px";
  }

  // console.log(pipe_position);
}, 10);
