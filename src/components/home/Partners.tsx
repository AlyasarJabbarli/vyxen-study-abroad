import Container from "../layout/Container";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import { Card, CardBody } from "@heroui/card";
import Image from "next/image";
import Link from "next/link";


const Partners = () => {
    return (
        <section>
            <Container>
                <div className="pt-28 pb-24">
                    <div className="mb-12">
                        <div className="relative w-fit px-0 sm:px-28 mx-auto before:sm:block before:hidden before:content-[''] before:absolute before:w-full before:h-px before:bg-secondary before:top-1/2 before:left-0 before:translate-y-1/2 before:-z-1">
                            <h2 className="w-fit px-3 text-center text-secondary text-lg font-medium bg-white">
                                We&apos;re proud to work with our preferred partners
                            </h2>
                        </div>
                    </div>
                    <div>
                        <Carousel >
                            <CarouselContent className="p-8">
                                {Array.from({ length: 19}).map((_, index) => (
                                    <CarouselItem key={index} className="sm:basis-1/4 lg:basis-1/7 basis-1/2">
                                            <Card isHoverable shadow="md" radius="sm" className="opacity-45 hover:opacity-100 duration-300 hover:shadow-xs ease-in-out rounded-lg transform transition hover:scale-[1.03]">
                                                <CardBody>
                                                    <Link href="/partners" className="px-6 py-7">
                                                        <Image
                                                            src="/images/partner_logo.png"
                                                            alt="Partner Logo"
                                                            width={100}
                                                            height={100}
                                                            />

                                                       
                                                    </Link>

                                                </CardBody>
                                            </Card>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Partners;