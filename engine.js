// ====== ENGINE S HISTORIÍ ======
let currentNodeId = "scene_1_start";
const history = []; // sem si ukládáme předchozí scény

function renderNode(nodeId) {
  const node = storyNodes[nodeId];
  if (!node) {
    console.error("Neznámý uzel:", nodeId);
    return;
  }
  currentNodeId = nodeId;

  const titleEl = document.getElementById("scene-title");
  const textEl = document.getElementById("scene-text");
  const choicesEl = document.getElementById("choices");

  titleEl.textContent = node.title || "";
  textEl.textContent = node.text || "";
  choicesEl.innerHTML = "";

  if (node.choices && node.choices.length > 0) {
    node.choices.forEach((choice) => {
      const btn = document.createElement("button");
      btn.textContent = choice.label;
      btn.onclick = () => goTo(choice.nextId);
      choicesEl.appendChild(btn);
    });
  } else {
    const info = document.createElement("div");
    info.textContent =
      "Konec příběhu. Teď je prostor na volné povídání.";
    choicesEl.appendChild(info);
  }

  updateBackButton();
}

// Přechod na další scénu – uloží aktuální scénu do historie
function goTo(nextId) {
  if (!nextId) return;
  if (currentNodeId) {
    history.push(currentNodeId);
  }
  renderNode(nextId);
}

// Aktualizace stavu tlačítka Zpět
function updateBackButton() {
  const backBtn = document.getElementById("back-btn");
  if (!backBtn) return;

  if (history.length === 0) {
    backBtn.disabled = true;
  } else {
    backBtn.disabled = false;
  }
}

// Obsluha tlačítka Zpět
function goBack() {
  if (history.length === 0) return;
  const prevId = history.pop();
  renderNode(prevId);
}

window.addEventListener("DOMContentLoaded", () => {
  const backBtn = document.getElementById("back-btn");
  if (backBtn) {
    backBtn.addEventListener("click", goBack);
  }
  renderNode(currentNodeId);
});
