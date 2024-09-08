/*=============== BASE ===============*/
function getElement(id) {
  return document.querySelectorAll(id);
}
/*=============== SERVICES MODAL ===============*/
const modal = getElement(".services_modal");
const buttonModal = getElement(".services_button");
const closeModal = getElement(".services_modal-close");

let activeModal = (isClick) => {
  modal[isClick].classList.add("active-modal");
};

buttonModal.forEach((buttonModal, i) => {
  buttonModal.addEventListener("click", () => {
    activeModal(i);
  });
});

let inactiveModal = (isClick) => {
  modal[isClick].classList.remove("active-modal");
};

closeModal.forEach((closeModal, i) => {
  closeModal.addEventListener("click", () => {
    inactiveModal(i);
  });
});
/*=============== SWIPER TESTIMONIAL ===============*/
const swiper = new Swiper(".testimonial_swiper", {
  loop: true,
  spaceBetween: 30,
  speed: 1000,
  autoplay: true,
  grapCursor: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    dyjamicBullets: true,
    clickable: true,
  },
});
/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 350) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);
