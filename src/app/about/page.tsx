import { Metadata } from "next";
import Image from "next/image";

import { Breadcrumbs } from "@/components/Breadcrumbs";

import classes from "./page.module.css";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <div className={classes.container}>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ]}
      />

      <div id="#about" className={classes.top}>
        <section className={classes.section}>
          <h1>
            <a href="#about"># About</a>
          </h1>
          <p>
            My name is Hotaka Okumoto(ほた/hota1024),
            <br /> born in 2003 in Shizuoka, Japan.
          </p>
          <p>
            I like to create technologies that make it fun to create
            <br /> and interested in Computer Science and UI/UX Design.
          </p>
        </section>
        <div>
          <Image
            className={classes.icon}
            src="/hota1024.jpg"
            width={256}
            height={256}
            alt="hota1024 icon"
          />
        </div>
      </div>

      <section id="skills" className={classes.section}>
        <h2>
          <a href="#skills">## Skills</a>
        </h2>
        <ul className={classes.skillList}>
          <li>Next.js</li>
          <li>TypeScript / Rust</li>
          <li>Figma</li>
        </ul>
      </section>

      <section id="learning-now" className={classes.section}>
        <h2>
          <a href="#learning-now">## Learning now</a>
        </h2>
        <ul className={classes.skillList}>
          <li>Hardware / FPGA</li>
          <li>OS / Kernel</li>
          <li>WebAssembly</li>
          <li>RISC-V / ARM</li>
        </ul>
      </section>

      <section id="links" className={classes.section}>
        <h2>
          <a href="#links">## Links</a>
        </h2>
        <ul className={classes.linkList}>
          <li>
            <a href="https://x.com/hota1024" about="_blank" rel="noopener">
              Twitter(X)
            </a>
          </li>
          <li>
            <a href="https://github.com/hota1024" about="_blank" rel="noopener">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://zenn.dev/hota1024" about="_blank" rel="noopener">
              Zenn
            </a>
          </li>
        </ul>
      </section>

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ]}
      />
    </div>
  );
}
