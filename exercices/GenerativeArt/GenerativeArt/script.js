/* // Get references to the canvas and input elements
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

// Set canvas dimensions (you can adjust these as needed)
canvas.width = 600;
canvas.height = 400;

// Calculate the center of the canvas
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const baseCircleRadius = 10; // Base radius of the circles

// Function to draw a circle at a given position with a specified radius and color
function drawCircle(x, y, radius, color) {
  context.fillStyle = color;
  context.beginPath();
  context.arc(x, y, radius, 0, Math.PI * 2);
  context.fill();
}

// Function to generate a random HSL color
function getRandomHslColor() {
  // Generate a random color in HSL format
  const h = Math.floor(Math.random() * 360);
  const s = Math.floor(Math.random() * 100);
  const l = Math.floor(Math.random() * 100);
  return `hsl(${h}, ${s}%, ${l}%)`;
}

function getDefinedHslColor(seed) {
    // Adjust the seed to create a unique color
    const h = (seed * 137.508) % 360; // Use a golden angle for color variation
    const s = 50; // Fixed saturation
    const l = 50; // Fixed lightness
    return `hsl(${h}, ${s}%, ${l}%)`;
}
  

const input = document.getElementById("amountInput")
input.addEventListener("input", (event) => {
  const amountOfCircles = event.target.value; // Get the value from the input
  const parsedValue = parseInt(amountOfCircles); // Parse the input value to an integer
  if (isNaN(parsedValue)) {
    alert("Please enter a valid number.");
    return;
  }
  drawArt(amountOfCircles); // Call the drawArt function with the input value
});

// Function to redraw the art based on input values
function drawArt(amountOfCircles) {
  // Clear the canvas before drawing
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the central circle
  // drawCircle(centerX, centerY, baseCircleRadius, getRandomHslColor());

  // // Example
  // console.log("------------ Loop Started");
  // for (let i = 0; i < amountOfCircles; i++) {
  //   console.log("Drawing circle with index: " + i);
  //   const radius = 100 - i * 8; // Increase radius for each circle

  //   drawCircle(centerX, centerY, radius, getRandomHsalColor()); // Draw the circle
  // }
  // console.log("------------ Loop Ended");

  
}

// Initial draw
drawArt();
 */


