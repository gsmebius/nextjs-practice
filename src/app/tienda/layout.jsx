import React from "react";
import Link from "next/link";

export default function TiendaLayout({ children }) {
  return (
    <>
      <nav>
        <h1>Navbar</h1>
        <ul>
          <li>
            <Link href="/">categorías</Link>
          </li>
          <li>
            <Link href="/">productos</Link>
          </li>
        </ul>
      </nav>

      {children}
    </>
  );
}
