"use client";

import { useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiMiniXMark } from "react-icons/hi2";
import Logo from "../common/Logo";
import DropdownMenu from "../common/DropDownMenu";
import Container from "./Container";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { useActiveLink } from "@/hooks/useActiveLink";

// Define your navigation items in a single source of truth
const NAV_ITEMS = [
    {
        label: "Home",
        href: "/",
        links: [
            { to: "/immigration", text: "Immigration" },
            { to: "/student-visa", text: "Student Visa" },
            { to: "/travel-agency", text: "Travel Agency" }
        ]
    },
    {
        label: "Pages",
        href: "/pages",
        links: [
            { to: "/services", text: "Services" },
            { to: "/service-details", text: "Service Details" },
            { to: "/coaching", text: "Coaching" },
            { to: "/coaching-details", text: "Coaching Details" },
            { to: "/visa", text: "Visa" },
            { to: "/visa-details", text: "Visa Details" },
            { to: "/team", text: "Team" },
            { to: "/team-details", text: "Team Details" },
            { to: "/testimonial", text: "Testimonial" },
            { to: "/faq", text: "FAQ" },
        ]
    },
    {
        label: "About us",
        href: "/about",
    },
    {
        label: "Country",
        href: "/country",
        links: [
            { to: "/country", text: "Country" },
            { to: "/country-details", text: "Country Details" },
        ]
    },
    {
        label: "Blog",
        href: "/blog",
        links: [
            { to: "/blog", text: "Blog" },
            { to: "/blog-details", text: "Blog Details" },
        ]
    },
    {
        label: "Contact",
        href: "/contact",
    },
];


// Define the props for the MobileMenu component
interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {

    const { isActive } = useActiveLink();


    return (
        <>
            {/* Overlay with transition */}
            <div
                className={`fixed inset-0 bg-black z-40 lg:hidden transition-opacity duration-300 ${isOpen ? "opacity-40" : "opacity-0 pointer-events-none"
                    }`}
                onClick={onClose}
            />

            {/* Sidebar with sliding transition */}
            <div
                className={`fixed inset-y-0 left-0 w-72 bg-white z-50 shadow-xl transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className='flex flex-col h-full justify-between py-14 px-6'>
                    <div>
                        <div className="absolute top-0 right-0">
                            <button
                                className='w-11 h-8 bg-lightBlue text-primary'
                                onClick={onClose}
                                aria-label="Close menu"
                            >
                                <HiMiniXMark className='mx-auto' size={27} />
                            </button>
                        </div>
                        <div className='mb-10'>
                            <Logo />
                        </div>
                        <nav>
                            <Accordion type="single" collapsible className="w-full font-medium">
                                {NAV_ITEMS.map((item, index) => (
                                    <AccordionItem key={`item-${index}`} value={`item-${index}`}>
                                        {item.links ? (
                                            <>
                                                <AccordionTrigger className={isActive(item.href) ? "text-green-1" : ""} >{item.label}</AccordionTrigger>
                                                <AccordionContent>
                                                    <ul>
                                                        {item.links.map((link, linkIndex) => (
                                                            <li key={linkIndex} className="border-b border-border-dark py-3.5">
                                                                <Link href={link.to}>{link.text}</Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </AccordionContent>
                                            </>
                                        ) : (
                                            <div className="border-b border-border-dark py-3.5">
                                                <Link className={isActive(item.href) ? "text-green-1" : ""} href={item.href}>{item.label}</Link>
                                            </div>
                                        )}
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

const NavBar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const toggleMobile = () => setMobileOpen((prev) => !prev);

    return (
        <nav className="sticky top-0 z-50 border-b bg-white shadow-md text-sm">
            <Container>
                <div className="flex justify-between items-center py-4">
                    <div>
                        <Logo />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:block">
                        <ul className="flex items-center gap-5">
                            {NAV_ITEMS.map((item, index) => (
                                <li key={index}>
                                    <DropdownMenu
                                        label={item.label}
                                        href={item.href}
                                        links={item.links}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMobile}
                        className="lg:hidden p-2"
                        aria-label="Toggle menu"
                        aria-expanded={mobileOpen}
                    >
                        {mobileOpen ? <HiMiniXMark size={24} /> : <RxHamburgerMenu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu - Always rendered but hidden off-screen */}
                <MobileMenu isOpen={mobileOpen} onClose={toggleMobile} />
            </Container>
        </nav>
    );
}

export default NavBar;