"use client";

import { useEffect, useRef } from "react";

import classes from "./styles.module.css";

export function LoadingScreen() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;

    if (!el) {
      return;
    }

    setTimeout(async () => {
      const textAnim = el.querySelector("div")!.animate(
        [
          {
            opacity: 1,
          },
          {
            opacity: 0,
          },
        ],
        {
          duration: 250,
          fill: "forwards",
        }
      );

      await textAnim.finished;

      const containerAnim = el.animate(
        [
          {
            opacity: 1,
          },
          {
            opacity: 0,
          },
        ],
        {
          duration: 250,
          fill: "forwards",
        }
      );

      await containerAnim.finished;

      el.style.pointerEvents = "none";
    }, 1000);
  }, []);

  return (
    <div ref={ref} className={classes.container}>
      <div className={classes.content}>
        <div className={classes.title}>hota.codes</div>
        <div className={classes.version}>portfolio v2</div>
      </div>
    </div>
  );
}
