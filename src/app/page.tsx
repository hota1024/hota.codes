import Image from "next/image";
import Link from "next/link";

import { GradationBackground } from "@/components/GradationBackground";

import classes from "./page.module.css";

export default function Home() {
  return (
    <>
      <div>
        <GradationBackground />
      </div>
      <main className={classes.main}>
        <div className={classes.nameContainer}>
          <h1 className={classes.name}>Hotaka Okumoto</h1>
          <div className={classes.pronoun}>
            Programmer / Interested in Design
          </div>
        </div>
        <div className={classes.basic}>
          <div>
            <span className={classes.ib}>Keio Univ.</span>{" "}
            <span className={classes.ib}>
              Faculty of Environment and Information Studies.
            </span>{" "}
            <span className={classes.ib}>B2.</span>
          </div>
          <div>SFC RG Arch</div>
          <div>Shizuoka Junior Procon panel of judges.</div>
        </div>
        <nav className={classes.nav}>
          <ul className={classes.navList}>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/works">Works</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className={classes.actions}>
          <a href="https://x.com/hota1024" target="_blank" rel="noopener ">
            <Image src="/x.svg" width={24} height={24} alt="x logo" />
          </a>
          <a href="https://github.com/hota1024" target="_blank" rel="noopener ">
            <Image
              src="/github-mark-white.svg"
              width={24}
              height={24}
              alt="github logo"
            />
          </a>
          <a href="https://zenn.dev/hota1024" target="_blank" rel="noopener ">
            <Image
              src="/zenn-white.svg"
              width={24}
              height={24}
              alt="github logo"
            />
          </a>
        </div>
      </main>
    </>
  );
}
