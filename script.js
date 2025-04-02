// function to handlethe twinkling effect 
document.getElementById("twinkleButton").addEventListener("click", function (e) {
   if (window.innerWidth <= 700) {
    return; // Do nothing on mobile devices
  }
  
  e.preventDefault(); // Prevent immediate navigation

  const button = e.target;
  const container = button.parentElement;

  // Create twinkling stars
  for (let i = 0; i < 20; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    // Random position around the button
    const x = Math.random() * button.offsetWidth - button.offsetWidth / 2 + 3 ;
    const y = Math.random() * button.offsetHeight - button.offsetHeight / 2 + 3;

    star.style.left = `${button.offsetWidth / 2 + x}px`;
    star.style.top = `${button.offsetHeight / 2 + y}px`;

    container.appendChild(star);

    // Remove the star after the animation ends
    star.addEventListener("animationend", () => {
      star.remove();
    });
  }

  // Delay navigation to the birthday page by 1 second
  setTimeout(() => {
    window.location.href = "components/birthday__event.html"; // Path to the birthday page
  }, 900);
});

