import Link from "next/link";
import { BiMenu } from "react-icons/bi";

export default function Dropdown({ isOpen }) {
  return (
    <>
      {/* Mobile Dropdown Menu */}
      <div
        className={
          isOpen
            ? "grid grid-rows-3 items-center text-center bg-jack-peach"
            : "hidden"
        }
      >
        <Link href="/">
          <span className="p-4 py-8 hover:bg-jack-cream cursor-pointer">
            About
          </span>
        </Link>
        <Link href="/projects">
          <span className="p-4 py-8 hover:bg-jack-cream cursor-pointer">
            Projects
          </span>
        </Link>
        <Link href="/contact">
          <span className="p-4 py-8 hover:bg-jack-cream cursor-pointer">
            Contact
          </span>
        </Link>
      </div>
    </>
  );
}
