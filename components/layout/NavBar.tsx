import Container from "./Container";
import DropdownMenu from "../common/DropDownMenu";
import Link from "next/link";

const NavBar = () => {
    return (
        <nav className="sticky top-0 z-50 border-b bg-white shadow-md text-sm">
            <Container>
                <div className="flex justify-between items-center">
                    <div>
                        <div>
                            <Link href={"/"}>
                                <img src="/logo.png" alt="Logo" width={150} height={100}  />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div>
                            <ul className="flex items-center gap-5">
                                <li>
                                    <DropdownMenu label="Home" href="/" links={[
                                        { to: "/immigration", text: "Immigration" },
                                        { to: "/student-visa", text: "Student Visa" },
                                        { to: "/travel-agency", text: "Travel Agency" }
                                        ]} />
                                </li>
                                <li>
                                    <DropdownMenu label="Pages" href="/pages" links={[
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
                                        ]} />
                                </li>
                                <li>
                                    <DropdownMenu label="About us" href="/about"/>
                                </li>
                                <li>
                                    <DropdownMenu label="Country" href="/country" links={[
                                        { to: "/country", text: "Country" },
                                        { to: "/country-details", text: "Country Details" },
                                        ]} />
                                </li>
                                <li>
                                    <DropdownMenu label="Blog" href="/blog" links={[
                                        { to: "/blog", text: "Blog" },
                                        { to: "/blog-details", text: "Blog Details" },
                                        ]} />
                                </li>
                                <li>
                                    <DropdownMenu label="Contact" href="/contact" />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </nav>
    );
}

export default NavBar;