var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;

  // TODO: Complete function
  const state = element.getAttribute("data-state");
  console.log(state);
  if (state === "hidden") {
    const value = element.getAttribute("data-number");
    console.log(value);
    element.textContent = value;
    element.setAttribute("data-state", "shown");
  } else {
    element.textContent = "";
    element.setAttribute("data-state", "hidden");
  }
});