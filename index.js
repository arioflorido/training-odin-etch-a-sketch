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

// Hover Animation stuff

const squares = document.querySelectorAll("div.square");

squares.forEach((square) => {
  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = "black";
  });

  square.addEventListener("mouseout", () => {
    square.style.backgroundColor = "white";
  });
});
