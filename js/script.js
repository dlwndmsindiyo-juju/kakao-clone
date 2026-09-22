document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // 헤더 메뉴 드롭다운
  const header = document.querySelector("header");
  const subBg = document.querySelector(".sub-bg");
  const mainMenus = document.querySelectorAll(".main-menu>.gnb-menu");
  const subMenu = document.querySelectorAll(".sub-menu");

  mainMenus.forEach((menu) => {
    if (!subMenu) return;

    menu.addEventListener("mouseenter", () => {
      gsap.to(subBg, {
        height: 150,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(subMenu, {
        autoAlpha: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    menu.addEventListener("mouseleave", () => {
      gsap.to(subBg, {
        height: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  });
});


