import Image from "next/image";
import logo from "../../public/devjacky-logo.png";
import { BiMenu } from "react-icons/bi";

export default function Header() {
  return (
    <header>
      <nav className="container flex items-center justify-around py-4 mt-4 sm:mt-12 ">
        <div className="py-1">
          <a href="/">
            <Image
              src={logo}
              width={80}
              height={50}
              alt="devjacky logo"
              className="mb-0"
            />
          </a>
        </div>
        <ul className="hidden sm:inline-flex flex-1 justify-end items-center gap-12 uppercase text-sm">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer ">About</li>
          <li className="cursor-pointer ">Projects</li>
          <li className="cursor-pointer ">Contact</li>
        </ul>
        <div className="flex sm:hidden flex-1 justify-end">
          <BiMenu size="4rem" />
        </div>
      </nav>
    </header>
  );
}
