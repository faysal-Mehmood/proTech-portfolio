"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useTextAnimation = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const textElements = document.querySelectorAll(".poort-text");
    if (!textElements.length) return;

    textElements.forEach((el) => {
      // Manual character splitting (free alternative to SplitText)
      const text = el.textContent || "";
      el.innerHTML = text
        .split("")
        .map(
          (char) =>
            `<span class="char">${char === " " ? "&nbsp;" : char}</span>`
        )
        .join("");

      const chars = el.querySelectorAll(".char");

      // Set initial state based on direction class
      if (el.classList.contains("poort-in-right")) {
        gsap.set(chars, { opacity: 0, x: 100, ease: "back.out" });
      } else if (el.classList.contains("poort-in-left")) {
        gsap.set(chars, { opacity: 0, x: -100, ease: "circ.out" });
      } else if (el.classList.contains("poort-in-up")) {
        gsap.set(chars, { opacity: 0, y: 80, ease: "circ.out" });
      } else if (el.classList.contains("poort-in-down")) {
        gsap.set(chars, { opacity: 0, y: -80, ease: "circ.out" });
      }

      // Animation
      gsap.to(chars, {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.02,
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
        },
      });
    });

    return () => {
      // Cleanup
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
};
