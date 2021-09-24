const f_targets = document.querySelectorAll(".fade_in");
const offset = 30;

window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  const h = window.innerHeight;

  f_targets.forEach((target) => {
    const pos = target.getBoundingClientRect().top + scroll;

    if (scroll > pos - h + offset) {
      target.classList.add("inview");
    } else {
      target.classList.remove("inview");
    }
  });
});


// ハンバーガーメニュー
const spans = document.querySelectorAll('span');
document.querySelector('.humberger').addEventListener('click', () => {
  document.querySelector('.menu').classList.toggle('show');

  spans.forEach((span) => {
    span.classList.toggle('active')
  })
})
