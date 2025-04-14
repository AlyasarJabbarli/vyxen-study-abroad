import Container from "./Container";
import DropdownMenu from "./DropDownMenu";
import Link from "next/link";

const NavBar = () => {
    return (
        <nav className="sticky top-0 z-50 border-b bg-white shadow-md">
            <Container>
                <div className="flex justify-between items-center">
                    <div>
                        <div>
                            <Link href={"/"}>
                                <img src="/logo.png" alt="Logo" width={150} height={100} className="" />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div>
                            <ul>
                                <li>
                                    <DropdownMenu label="Home" href="/" links={[{ to: "/immigration", text: "Immigration" },{ to: "/", text: "Student Visa" },{ to: "/", text: "Travel Agency" }]} />
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
                            </ul>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </Container>
        </nav>
    );
}

export default NavBar;