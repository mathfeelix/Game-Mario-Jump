// Mario and pipe images
const mario = document.getElementById("mario");
const pipe = document.getElementById("pipe");

// Adds jump animation to Mario when a key is pressed
// and removes it to reset the animation
document.addEventListener("keydown", jump);

function jump() {
  mario.style.animation = "mario-jump 800ms ease-out";
  setTimeout(() => {
    mario.style.animation = "";
  }, 800);
}

// Loop for the game
// It checks if Mario touches the pipe and end the game
const loop = setInterval(() => {
  const pipe_position = pipe.offsetLeft;
  const mario_position = parseFloat(window.getComputedStyle(mario).bottom);

  // 20px from the left is where Mario is located
  // 120px from the left is where the pipe touches Mario
  // 65px is the height of the pipe
  // So if the pipe is between 20px and 120px (where Mario is)
  // and Mario is lower the the pipe's height, it means they've touched
  // It removes animations from Mario and the pipe to stop them
  // then freezes them in the position where they touched
  if (pipe_position > 20 && pipe_position < 120 && mario_position < 65) {
    pipe.style.animation = "none";
    mario.style.animation = "none";
    pipe.style.left = `${pipe_position}px`;
    mario.style.bottom = `${mario_position}px`;

    // Changes Mario's picture and ajusts its margin
    mario.src = "./images/game-over.png";
    mario.style.width = "50px";
    mario.style.marginLeft = "50px";

    // Removes Event Listener
    document.removeEventListener("keydown", jump);
  }

  // console.log(pipe_position);
}, 10);
