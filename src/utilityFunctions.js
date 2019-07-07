export const toggleUnderline = e => {
  const boxes = document.querySelectorAll(".nav span");
  boxes.forEach(el => el.classList.remove("underlined"));
  e.target.firstElementChild.classList.add("underlined");
};
