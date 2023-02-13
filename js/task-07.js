const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

input.addEventListener("input", (event) => {
  console.dir((text.style.fontSize = `${event.currentTarget.value}px`));
});
