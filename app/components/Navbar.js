// app/components/Navbar.js
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const links = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/posts", label: "Posts" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <span className={styles.marca}>Meu Blog</span>
      <div className={styles.links}>
        {links.map((link) => {
          // "/posts" também deve ficar destacado em /posts/algum-slug
          const ativo =
            link.href === "/"
              ? pathname === "/"
              : pathname === link.href || pathname.startsWith(`${link.href}/`);

          return (
            <Link
              key={link.href}
              href={link.href}
              className={ativo ? `${styles.link} ${styles.ativo}` : styles.link}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
