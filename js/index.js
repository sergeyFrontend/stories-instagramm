const chunkPrev = document.querySelector(".player-chunk-prev");
const chunkNext = document.querySelector(".player-chunk-next");

chunkPrev.addEventListener("click", () => {
  function moveClass(className, activeClassName) {
    let active = document.querySelector("." + activeClassName),
      prev = active.previousElementSibling;

    if (prev && prev.classList.contains(className)) {
      active.classList.remove(activeClassName),
        prev.classList.add(activeClassName);
    }
  }

  moveClass("timeline-chunk", "timeline-chunk-active");
  moveClass("player-chunk", "player-chunk-active");
});

chunkNext.addEventListener("click", function () {
  function moveClass(className) {
    let active = document.querySelector("." + className);

    console.log(active.nextElementSibling);
    if (active.nextElementSibling) {
      active.classList.remove(className);
      active.nextElementSibling.classList.add(className);
    }
  }

  moveClass("timeline-chunk-active");
  moveClass("player-chunk-active");
});
