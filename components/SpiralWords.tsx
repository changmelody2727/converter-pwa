"use client";

import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Link from "next/link";
import { isMobile } from "react-device-detect";

export default function SpiralWords() {
  const { t } = useTranslation();
  const ANIMATION_DURATION = 4000;
  const characters = (t("whatToMath") + "?").split("");
  const [isHovered, setIsHovered] = useState(false);
  const [scaleFactor, setScaleFactor] = useState(1);
  console.log("🚀 ~ SpiralWords ~ scaleFactor:", scaleFactor);

  //   useEffect(() => {
  //     const handleResize = () => {
  //       // Adjust the scale factor based on window width
  //       const width = window.innerWidth;
  //       // You can adjust the scaling factor according to your needs
  //       const newScaleFactor = width > 768 ? 1 : width / 768; // Example: shrink when width is less than 768px
  //       setScaleFactor(newScaleFactor);
  //     };

  //     // Add event listener for window resize
  //     window.addEventListener("resize", handleResize);

  //     // Cleanup function
  //     return () => {
  //       window.removeEventListener("resize", handleResize);
  //     };
  //   }, []);

  if (isHovered || isMobile) {
    return (
      <div
        className="flex flex-col w-8/12 gap-4 border-2 border-green p-4 rounded-lg h-full flex-1"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col w-8/12 gap-4">
          <text className="text-2xl">{t("whatToMath")}?</text>
          <ul className="list-disc list-inside">
            <li>
              <Link href="/count-days">
                <text>{t("countDays")} </text>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={`spiral`}>
        {characters.map((char, index) => (
          <span
            key={index}
            className="character text-[1rem] md:text-[3rem] sm:text-[2rem] lg:text-[4rem]"
            style={{
              "--angle": `${(index * 360) / characters.length}deg`,
              animationDelay: `-${index * (ANIMATION_DURATION / 16) - 0}ms`,
            }}
          >
            {char}
          </span>
        ))}
      </div>
      <div
        className={`spiral`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsHovered(true)}
      >
        {characters.map((char, index) => (
          <span
            key={index}
            className="character text-[1rem] md:text-[3rem] sm:text-[2rem] lg:text-[4rem]"
            style={{
              "--angle": `${(index * 360) / characters.length}deg`,
              animationDelay: `-${index * (ANIMATION_DURATION / 16) + 2000}ms`,
            }}
          >
            {char}
          </span>
        ))}
      </div>
    </>
  );
}
