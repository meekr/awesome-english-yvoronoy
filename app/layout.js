import "./globals.css";
import Link from "next/link";
import kheaBrand from "../lib/kheaBrand";

export const metadata = {
  title: kheaBrand.name,
  description: "Scaffolded KHEA English Practice application."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="brand">{kheaBrand.name}</div>
          <nav aria-label="Primary">
            <Link href="/">Home</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/weekly-packs">Weekly Packs</Link>
            <Link href="/speaking">Speaking Practice</Link>
            <Link href="/dashboard">Dashboard</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="site-footer">KHEA English Practice · Work in progress.</footer>
      </body>
    </html>
  );
}
