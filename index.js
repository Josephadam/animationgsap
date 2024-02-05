function initLoaderHome() {
    const tl = gsap.timeline({ repeat: 0, yoyo: true });
gsap.set("#rectangle-svg", { transformOrigin: "50% 100%", scaleY: 0 });
  tl.to("#rectangle-svg", { duration: 1, scaleY: 1, ease: "power2.out" });
  tl.add("scaleAnimation");
  tl.to("#rectangle-svg", { duration: 1, scale: 2, ease: "ease.out(1, 0.3)" }, "scaleAnimation");
}

// Call this function when the DOM content has loaded
document.addEventListener("DOMContentLoaded", initLoaderHome);
