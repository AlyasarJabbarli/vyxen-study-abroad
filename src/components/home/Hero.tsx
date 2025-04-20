import { IoMdCheckmark } from "react-icons/io";
import Button from "../common/Button";
import Container from "../layout/Container";

const Hero = () => {
    return (
        <section>

            <div className="bg-[url('/images/hero_bg.jpg')] bg-cover bg-center bg-no-repeat h-lvh max-h-[750px]">
                <Container>
                    <div className="flex items-center h-full">
                        <div className="max-w-2xl">
                            <div data-aos="fade-up" data-aos-duration="1000">
                                <h1 className="text-5xl sm:text-7xl">
                                    Immigration visa Consulting
                                </h1>
                            </div>
                            <div className="mt-6">
                                <p className="text-secondary text-xl">Expert Guidance for a Seamless Immigration Journey</p>
                            </div>
                            <div className="mt-10 mb-16 ">
                                <ul className="flex flex-col gap-3 text-lg">
                                    <li className="flex items-center gap-5"><IoMdCheckmark className="text-secondary" /> Expert Legal Support</li>
                                    <li className="flex items-center gap-5"><IoMdCheckmark className="text-secondary" /> Meeting Your Unique Needs</li>
                                    <li className="flex items-center gap-5"><IoMdCheckmark className="text-secondary" /> Tailored Immigration Solutions</li>
                                </ul>
                            </div>
                            <div className="mt-2 flex sm:flex-row flex-col">
                                <Button as="link" href="/contact">Book Appointment</Button>
                                <Button variant="outline" as="link" href="/about">Read Story</Button>
                            </div>
                        </div>
                    </div>


                </Container>
            </div>
        </section>
    );
}

export default Hero;