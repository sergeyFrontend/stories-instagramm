const chunkPrev = document.querySelector(".player-chunk-prev");
const chunkNext = document.querySelector(".player-chunk-next");

// переключение назад
const prev = () => {
  moveClass("player-chunk-active", "previousElementSibling");
  moveClass("timeline-chunk-active","previousElementSibling", (el) => {
      const inner = el.querySelector(".timeline-chunk-inner"),
            width = parseFloat(inner.style.width) || 0;

      el.querySelector(".timeline-chunk-inner").style.width = '';
      return width <= 25;
    }
  )};
chunkPrev.addEventListener("click", prev);

// переключение вперед
const next = () => {
  moveClass("player-chunk-active", "nextElementSibling");
  const el = moveClass("timeline-chunk-active", "nextElementSibling");

  if (el) {
    el.querySelector(".timeline-chunk-inner").style.width = "";
  }
};
chunkNext.addEventListener("click", next);

// фунция которая принимает класс и метод , вперед или назад идет перелистывание
function moveClass(className, method, pred) {
  const active = document.querySelector("." + className),
    next = active[method]; //active.method

  if (pred && !pred(active)) {
    return null;
  }

  if (next) {
    active.classList.remove(className);
    next.classList.add(className);

    return active;
  }
  return null;
}

//ниже код отвечает за анимацию при автоматическом перелиставание

let timer;
function runInterval(time,step){
  clearInterval(timer);

 timer = setInterval(() => {
    const active = document
      .querySelector(".timeline-chunk-active")
      .querySelector(".timeline-chunk-inner");

    let width = parseFloat(active.style.width) || 0;

    if (width === 100) {
      next();
      return;
    }
    active.style.width = String(width + step) + "%";
  }, (time * 1000 * step) / 100);

}

runInterval(5,1)