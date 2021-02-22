//put this script at the top of the header without defer
loadingStartTime = Date.now();
document.addEventListener("DOMContentLoaded", () => console.log("DOM tree ready at " + (Date.now() - loadingStartTime) + "ms"));
window.addEventListener("load", () => console.log("Page fully loaded at " + (Date.now() - loadingStartTime) + "ms"));