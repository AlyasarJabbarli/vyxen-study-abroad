import Link from "next/link";
import Container from "./Container";
import NavBar from "./NavBar";

const Header = () => {
    return (
        <header className="font-semibold">
            <div className="bg-background md:block hidden">
                <Container>
                    <div className="flex justify-between items-center py-3">
                        <div className="flex items-end gap-2">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="19" viewBox="0 0 14 19" fill="none"><circle cx="2" cy="2" r="2" fill="#00CC99"></circle><circle cx="7" cy="2" r="2" fill="#00CC99"></circle><circle cx="12" cy="2" r="2" fill="#00CC99"></circle><circle cx="12" cy="7" r="2" fill="#00CC99"></circle><circle cx="12" cy="12" r="2" fill="#00CC99"></circle><circle cx="7" cy="7" r="2" fill="#00CC99"></circle><circle cx="7" cy="12" r="2" fill="#00CC99"></circle><circle cx="7" cy="17" r="2" fill="#00CC99"></circle><circle cx="2" cy="7" r="2" fill="#00CC99"></circle><circle cx="2" cy="12" r="2" fill="#00CC99"></circle></svg>
                            </div>
                            <div>
                                <span className="text-xs mr-2 uppercase">Help Desk :</span>
                                <Link href="tel:+91 590 088 55" className="text-[15px] font-bold text-primary hover:text-green-1 transition duration-300 ease-in-out">
                                +91 590 088 55
                                </Link>
                            </div>
                        </div>
                        <div className="flex gap-20">
                            <div className="flex items-center gap-2">
                                <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M12.1041 7.72917C12.1041 10.5467 9.81742 12.8333 6.99992 12.8333C4.18242 12.8333 1.89575 10.5467 1.89575 7.72917C1.89575 4.91167 4.18242 2.625 6.99992 2.625C9.81742 2.625 12.1041 4.91167 12.1041 7.72917Z" stroke="#00CC99" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7 4.66666V7.58332" stroke="#00CC99" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M5.25 1.16666H8.75" stroke="#00CC99" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg>                                </div>
                                <div className="">
                                    <span className="text-xs">Monday - Friday 09:00 am - 05:00 Pm</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M6.99993 7.83415C8.00509 7.83415 8.81993 7.01931 8.81993 6.01415C8.81993 5.00899 8.00509 4.19415 6.99993 4.19415C5.99477 4.19415 5.17993 5.00899 5.17993 6.01415C5.17993 7.01931 5.99477 7.83415 6.99993 7.83415Z" stroke="#00CC99" strokeWidth="1.5"></path><path d="M2.11158 4.95249C3.26074 -0.0991754 10.7449 -0.093342 11.8882 4.95832C12.5591 7.92166 10.7157 10.43 9.09991 11.9817C7.92741 13.1133 6.07241 13.1133 4.89408 11.9817C3.28408 10.43 1.44075 7.91582 2.11158 4.95249Z" stroke="#00CC99" strokeWidth="1.5"></path></svg>                                </div>
                                <div className="">
                                    <span className="text-xs">456 Elm Avenue Springfield, IL 62701</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <NavBar />
        </header>
    );
}

export default Header;