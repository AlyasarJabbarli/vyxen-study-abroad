import { MainCard } from "@/components/common/MainCard";
import SectionDescription from "@/components/common/SectionDescription";
import SectionTitle from "@/components/common/SectionTitle";
import Container from "@/components/layout/Container";

const Steps = () => {
    return (
        <section>
            <div className="bg-[url('https://wp.xpressbuddy.com/evisa/wp-content/uploads/2023/12/about_img.png')] bg-bottom-right bg-no-repeat">
                <Container>
                    <div className="py-32">
                        <div className="mb-14">
                            <SectionTitle blackText="Dependable and Trustworthy Visa &" grayText="Immigration Guidance" />
                            <SectionDescription textTop="Our team of seasoned professionals understands the" textBottom="complexities of immigration laws and visa procedures." />
                        </div>
                        <div className="grid max-w-5xl grid-cols-1 md:grid-cols-2 gap-5">
                            <MainCard
                                icon={1}
                                title="Choose your visa type"
                                description="Determine the Visa type for your travel purpose."
                                horizontal={true}
                            />
                            <MainCard
                                icon={2}
                                iconBg="bg-green-1"
                                title="Contact our branches"
                                description="Start your transaction by applying to our branches."
                                horizontal={true}
                            />
                            <MainCard
                                icon={3}
                                iconBg="bg-blue-1"
                                title="Submit All Your Documents"
                                description="Collect all the required documents the process."
                                horizontal={true}
                            />
                            <MainCard
                                icon={4}
                                iconBg="bg-yellow-1"
                                title="Passport delivery"
                                description="Receive your visa, which is finalized after application."
                                horizontal={true}
                            />
                        </div>
                    </div>

                </Container>
            </div>
        </section>
    );
}

export default Steps;