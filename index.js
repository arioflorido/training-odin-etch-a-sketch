const container = document.querySelector("div.container");

function createGrid() {
  const rowSize = 16;
  const columnSize = 16;

  for (let currentRow = 0; currentRow < rowSize; currentRow++) {
    const subcontainer = document.createElement("div");
    subcontainer.classList.add("subcontainer");

    for (let currentColumn = 0; currentColumn < columnSize; currentColumn++) {
      const squareDiv = document.createElement("div");
      const samplep = document.createElement("p");
      samplep.textContent = `Row ${currentRow} : Column : ${currentColumn}`;
      squareDiv.appendChild(samplep);
      squareDiv.classList.add("square");
      subcontainer.appendChild(squareDiv);
    }

    container.appendChild(subcontainer);
  }
}

createGrid();
