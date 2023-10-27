import { Metadata } from "next";

import { Breadcrumbs } from "@/components/Breadcrumbs";

import classes from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  async function Send() {
    "use server";

    console.log("OK");
  }

  return (
    <div className={classes.container}>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
      />

      <section className={classes.section}>
        <h1>Contact</h1>
        <p>
          Please DM to <a href="https://x.com/hota1024">Twitter(X)</a>
        </p>
      </section>

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
      />
    </div>
  );
}
