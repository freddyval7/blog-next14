"use client";

import { usePathname } from "next/navigation";
import styles from "./navLink.module.css";
import Link from "next/link";

export default function NavLink({ item }) {

    const pathName = usePathname();

  return (
    <Link href={item.path} className={`${styles.container} ${pathName === item.path && styles.active}`}>
      <span>{item.title}</span>
    </Link>
  );
}
