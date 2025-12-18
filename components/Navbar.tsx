import Link from "next/link";
import { ReactNode } from "react";

type NavLinksProps = {
  href: string;
  children: ReactNode;
};

function NavLinks(props: NavLinksProps) {
  return (
    <li className="hover:bg-j-emeraude transition-colors rounded-md px-4 py-2">
      <Link href={props.href}>{props.children}</Link>
    </li>
  );
}

export default function Navbar() {
  return (
    <nav className="text-white px-2 py-2 fixed w-screen z-50 ">
      <ul className="container mx-auto flex justify-center relative">
        <div className="flex md:gap-7">
          <NavLinks href="/">WANT TO BOOK ?</NavLinks>
          <NavLinks href="/Manage">MANAGE BOOKING</NavLinks>
          <NavLinks href="ListBooking">LIST BOOKING</NavLinks>
        </div>
      </ul>
    </nav>
  );
}
