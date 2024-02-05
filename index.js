function initLoaderHome() {
    var tl = gsap.timeline();

    // Initial cursor state
    gsap.set("html", { cursor: "wait" });

    // Initial SVG state off-screen and scaled down
    gsap.set(".logo-unfold-scroll svg", {
        yPercent: 120, // Start above the viewport
        scale: 0.6, // Start at half size
        autoAlpha: 0,// Use autoAlpha for handling both CSS visibility and opacity
    });

    // Animate the cursor back to default
    tl.to("html", { cursor: "auto", duration: 0 });

     tl.to(".presented-by", {
        duration: 0.6,
        ease: "Expo.easeIn",
        stagger: 0
    }, "< 1.4");

    

    // Animate SVG to come up into view
    tl.to(".logo-unfold-scroll svg", {
        y: 0,
        yPercent: 0, // Move to its natural vertical position
        autoAlpha: 1, // Fully fade in the SVG
        duration: 1.2,
        ease: "Expo.easeOut"
    });

    // Scale the SVG to its natural size
    tl.to(".logo-unfold-scroll svg", {
        scale: 1, // Scale to its natural size
        duration: 2,
        ease: "Expo.easeInOut",
        clearProps: "all" // Clears GSAP-added inline styles after animation
    });

    // Continue with the rest of your page transition animations
    tl.call(pageTransitionOut);
}

// Call this function when the DOM content has loaded
document.addEventListener("DOMContentLoaded", initLoaderHome);
