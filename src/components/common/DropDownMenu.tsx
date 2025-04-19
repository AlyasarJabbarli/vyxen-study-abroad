"use client"

import { useState } from "react";
import Link from "next/link";
import { PlusIcon } from "@heroicons/react/20/solid";
import { useActiveLink } from "@/hooks/useActiveLink";

interface DropdownProps {
  label: string; // Button text (e.g., "Pages")
  href: string; //  href for the button link
  links?: { to: string; text: string }[]; // List of dropdown links
  children?: React.ReactNode; // Optional custom content
}

const DropdownMenu: React.FC<DropdownProps> = ({ label, href, links, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const {isActive} = useActiveLink()


  return (
    <div
      className={'inline-block text-sm'}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Dropdown Button */}
      <Link href={href} className="py-7 inline-block">
        <div
          className={`inline-flex items-center gap-4 border px-5 py-1 rounded-sm border-border cursor-pointer  ${isActive(href) ? "text-primary" : "text-secondary"}`}
        >
          <span className="text-sm">{label}</span>
          {
            links ?  <PlusIcon aria-hidden="true" className="size-3" /> : null
          }
        </div>
      </Link>

      {/* Dropdown Items */}
      <div className="relative h-full ">
        {isOpen && links &&(
          <div className={`absolute left-0 z-10 min-w-60 bg-white shadow-lg animate-fade-up`}
          >
            <ul className="py-5">
              {links.map((link, index) => (
                  <li key={index} className="">
                    <Link href={link.to} className={`block px-7 py-1.5 hover:text-primary duration-150 ${isActive(link.to) ? "text-primary" : "text-secondary"}`}>
                      {link.text}
                    </Link>
                  </li>
                ))}
              {children}
            </ul>
          </div>
        )}
      </div>

    </div>
  );
};

export default DropdownMenu;