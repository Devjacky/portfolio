import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/devjacky-logo.png";
import Dropdown from "./dropdown";
import { BiMenu } from "react-icons/bi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth >= 640 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <header>
      <nav className="container flex items-center justify-around py-4 mt-4 sm:mt-12 ">
        <div className="py-1">
          <Image
            src={logo}
            width={128}
            height={89}
            alt="devjacky logo"
            className="mb-0"
          />
        </div>
        <ul className="hidden sm:inline-flex flex-1 justify-end items-center gap-12 uppercase text-lg">
          <Link href="/">
            <div className="nav-item relative cursor-pointer">
              About<span className="highlight group-hover:active"></span>
            </div>
          </Link>
          <Link href="/projects">
            <div className="nav-item relative cursor-pointer">
              Projects<span className="highlight group-hover:active"></span>
            </div>
          </Link>
          <Link href="/contact">
            <div className="nav-item relative cursor-pointer">
              Contact<span className="highlight group-hover:active"></span>
            </div>
          </Link>
        </ul>
        {/* Mobile Button */}
        <div className="flex sm:hidden flex-1 justify-end items-center ">
          <BiMenu size="3.5rem" onClick={toggle} className="cursor-pointer" />
        </div>
      </nav>
      <Dropdown isOpen={isOpen} />
    </header>
  );
}
