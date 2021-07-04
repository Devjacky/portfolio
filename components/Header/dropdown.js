import Link from "next/link";

export default function Dropdown({ isOpen }) {
  return (
    <>
      {/* Mobile Dropdown Menu */}
      <div
        className={
          isOpen
            ? "grid grid-rows-3 items-center text-center bg-jack-peach text-jack-cream"
            : "hidden"
        }
      >
        <Link href="/">
          <span className="p-4 py-8 hover:bg-jack-cream hover:text-jack-charcoal cursor-pointer">
            About
          </span>
        </Link>
        <Link href="/projects">
          <span className="p-4 py-8 hover:bg-jack-cream hover:text-jack-charcoal cursor-pointer">
            Projects
          </span>
        </Link>
        <Link href="/contact">
          <span className="p-4 py-8 hover:bg-jack-cream hover:text-jack-charcoal cursor-pointer">
            Contact
          </span>
        </Link>
      </div>
    </>
  );
}
