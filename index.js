// Hover Animation stuff

function applyColorOnHover() {
  class FadingColor {
    /**
     * Create a fading color generator that lowers opacity on each call.
     * @param {number} startOpacity - Starting opacity (0 to 1), default 1.
     * @param {number} step - Amount to decrease opacity each call, default 0.1.
     */
    constructor(startOpacity = 1, step = 0.1) {
      this.startOpacity = startOpacity;
      this.step = step;
      this.opacity = startOpacity;
    }

    /**
     * Generate the next color with decreasing opacity.
     * Resets to startOpacity when opacity reaches 0 or below.
     * @returns {string} HSLA color string.
     */
    next() {
      this.opacity -= this.step;
      if (this.opacity <= 0) {
        this.opacity = this.startOpacity;
      }
      const hue = Math.random() * 360;
      const saturation = 100;
      const lightness = 50;
      return `hsla(${hue}, ${saturation}%, ${lightness}%, ${this.opacity.toFixed(
        2
      )})`;
    }
  }

  const fadingColor = new FadingColor();
  const squares = document.querySelectorAll("div.square");

  squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = fadingColor.next();
    });

    square.addEventListener("mouseout", () => {
      square.style.backgroundColor = "white";
    });
  });
}

// GRID STUFF
const DEFAULT_GRID_COUNT = 16;

function createGrid(gridCount = DEFAULT_GRID_COUNT) {
  console.log(`Creating ${gridCount} x ${gridCount} grid.`);
  const rowSize = gridCount;
  const columnSize = gridCount;

  const container = document.querySelector("div.container");

  // remove all child elements from parent div container
  container.replaceChildren();

  for (let currentRow = 0; currentRow < rowSize; currentRow++) {
    const subcontainer = document.createElement("div");
    subcontainer.classList.add("subcontainer");

    for (let currentColumn = 0; currentColumn < columnSize; currentColumn++) {
      const squareDiv = document.createElement("div");
      squareDiv.classList.add("square");
      subcontainer.appendChild(squareDiv);
    }

    container.appendChild(subcontainer);
  }

  applyColorOnHover();
}

createGrid();

// BUTTON STUFF

const updateGridCountButton = document.querySelector(
  "button.updateGridCountButton"
);

updateGridCountButton.addEventListener("click", () => {
  let gridCount = window.prompt("Please enter the desired grid size (1-100):");

  while (
    gridCount !== null &&
    (isNaN(gridCount) || gridCount < 1 || gridCount > 100)
  ) {
    gridCount = prompt(
      "Invalid input. Please enter a number between 1 and 100:"
    );
  }

  if (gridCount === null) {
    console.log("User cancelled input.");
    return;
  }

  createGrid((gridCount = gridCount));
});
