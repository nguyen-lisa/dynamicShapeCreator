const $ = (sel) => document.querySelector(sel);
const stage = $("#stage");
const shapeSel = $("#shape");
const sizeInput = $("#size");
const colorInput = $("#color");
const addBtn = $("#add");

addBtn.addEventListener("click", () => {
  const type = shapeSel.value;
  const size = Math.max(10, Math.min(300, parseInt(sizeInput.value || "100", 10)));
  const color = colorInput.value;

  let el = document.createElement("div");
  el.className = `shape ${type}`;
  el.setAttribute("role", "img");
  el.setAttribute("aria-label", `${type} ${size}px ${color}`);
  el.title = "Click to remove";

  if (type === "triangle") {
    // Triangle is CSS borders; size maps to base/height
    const half = Math.round(size / 2);
    const height = Math.round(size * 0.86);
    el.style.width = "0";
    el.style.height = "0";
    el.style.borderLeft = `${half}px solid transparent`;
    el.style.borderRight = `${half}px solid transparent`;
    el.style.borderBottom = `${height}px solid ${color}`;
  } else {
    // Square/Circle: use width/height + background
    el.style.width = `${size}px`;
    el.style.height = `${size}px`;
    el.style.background = color;
  }

  stage.appendChild(el);
});

// Click a shape to remove it
stage.addEventListener("click", (e) => {
  const target = e.target;
  if (target.classList.contains("shape")) {
    target.remove();
  }
});
