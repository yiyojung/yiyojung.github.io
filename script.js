window.addEventListener("scroll", function () {
  let div = document.querySelector(".hive-div");
  let divTop = div.getBoundingClientRect().top;
  let windowHeight = window.innerHeight;

  if (divTop < windowHeight) {
    div.classList.remove("hive-div");
    div.classList.add("bottom-bar");
  }
});

window.addEventListener("scroll", function () {
  let div = document.querySelector(".bottom-bar");

  if (window.scrollY === 0) {
    div.classList.remove("bottom-bar");
    div.classList.remove("hidden-div");
    div.classList.add("hive-div");
  }
});

const cells = document.querySelectorAll("td");

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    const attribute =
      cell.getAttribute("data-observation") ||
      cell.getAttribute("data-brightness") ||
      cell.getAttribute("data-color");
    const images = document.querySelectorAll(".box img");

    images.forEach((image) => {
      const altText = image.getAttribute("alt");
      const showImage = altText.split(" ").includes(attribute);
      image.parentElement.style.display = showImage ? "block" : "none";
    });
  });
});
