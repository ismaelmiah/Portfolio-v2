import React, { useEffect, useState } from "react";
import { MdArrowUpward } from "react-icons/md";

const ScrollBtn = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  useEffect(() => {
    const scrollBtn = document.querySelector(".scrollBtn");

    const calculateScrollPercentage = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPercent = (scrollTop / scrollHeight) * 100;
      setScrollPercentage(scrollPercent);
    };

    const scrollFunction = () => {
      calculateScrollPercentage();
      if (window.scrollY > 300) {
        scrollBtn.style.display = "block";
      } else {
        scrollBtn.style.display = "none";
      }
    };

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("scroll", scrollFunction);
    scrollBtn.addEventListener("click", scrollToTop);

    // Cleanup the event listeners on component unmount
    return () => {
      window.removeEventListener("scroll", scrollFunction);
      scrollBtn.removeEventListener("click", scrollToTop);
    };
  }, []);

  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (scrollPercentage / 100) * circumference;

  return (
    <div
      className="fixed bottom-10 right-20 z-50 bg-darkText/40 text-lightText/80 p-3 rounded-full cursor-pointer hover:bg-black hover:text-designColor transition duration-300 scrollBtn"
      style={{ width: 50, height: 50 }}
    >
      <span className="absolute inline-block left-0 top-0">
        <svg width="55" height="55" viewBox="0 0 55 55">
          <circle
            cx="25"
            cy="25"
            r={radius}
            stroke="#64ffda"
            strokeWidth="4"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
          />
        </svg>
      </span>
      <MdArrowUpward
        size={24}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
};

export default ScrollBtn;
