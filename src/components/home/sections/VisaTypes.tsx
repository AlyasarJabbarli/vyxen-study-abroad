import { MainCard } from "@/components/common/MainCard";
import SectionTitle from "../../common/SectionTitle";
import Container from "../../layout/Container";
import ContainerLg from "../../layout/ContainerLg";

const VisaTypes = () => {
    return (
        <section>
            <ContainerLg>
                <div className="relative w-full">
                    {/* Static-height background layer */}
                    <div className="absolute top-0 left-0 w-full h-[790px] z-0">
                        <div className="w-full h-full max-h-[475px] rounded-tr-2xl bg-[url('https://wp.xpressbuddy.com/evisa/wp-content/uploads/2023/12/service_bg.png')] bg-cover bg-center bg-background" />
                        <div className="md:block hidden absolute top-0 right-0 w-2/5 h-full rounded-2xl bg-[url('https://wp.xpressbuddy.com/evisa/wp-content/uploads/2023/12/img_01.jpg')] bg-cover bg-center" data-aos="fade-left" />
                    </div>

                    <div className="relative z-10 pt-28">
                        <Container>
                            <SectionTitle blackText="Visa types and eligibility" grayText="assessment" />
                            <div className="mt-14" data-aos="fade-up">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6">
                                    <MainCard
                                        icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M3.08031 12.0401L5.69365 15.1468C6.09365 15.6135 6.09365 16.3868 5.69365 16.8535L3.08031 19.9601C2.72031 20.6801 3.08031 21.5601 3.85365 21.8268L5.62698 22.4135C6.05365 22.5601 6.68031 22.4135 7.00031 22.0935L10.0403 19.0668C10.2536 18.8401 10.6803 18.6668 10.987 18.6668L14.787 18.6668C15.347 18.6668 15.6136 19.0801 15.4003 19.6001L12.5736 26.1468C12.1336 27.1735 12.6803 28.0135 13.8003 28.0135L15.5203 28.0135C16.4136 28.0135 17.4403 27.3468 17.787 26.5201L21.0003 19.0668C21.0936 18.8535 21.3736 18.6668 21.6136 18.6668L25.6136 18.6668C26.867 18.6668 28.347 17.7468 28.9203 16.6268C29.1203 16.2268 29.1203 15.7601 28.9203 15.3601C28.347 14.2402 26.8536 13.3201 25.6003 13.3201L21.6003 13.3201C21.3603 13.3201 21.0803 13.1335 20.987 12.9201L17.7736 5.48015C17.4403 4.65348 16.4136 3.98682 15.5203 3.98682L13.8003 3.98682C12.6803 3.98682 12.1336 4.82682 12.5736 5.85348L15.4003 12.4001C15.627 12.9068 15.347 13.3335 14.787 13.3335L10.987 13.3335C10.6803 13.3335 10.2536 13.1601 10.0403 12.9468L7.00031 9.92015C6.68031 9.60015 6.06698 9.45348 5.62698 9.60015L3.85365 10.1868C3.08031 10.4268 2.70698 11.3068 3.08031 12.0401Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>}
                                        title="Tourist Visa"
                                        description="Visit new places to discover with a Tourist Visa. We deliver your documents ..."
                                    />
                                    <MainCard
                                        icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M12.028 3.78672L4.8413 9.38672C3.6413 10.3201 2.66797 12.3067 2.66797 13.8134V23.6934C2.66797 26.7867 5.18797 29.3201 8.2813 29.3201H23.7213C26.8146 29.3201 29.3346 26.7867 29.3346 23.7067V14.0001C29.3346 12.3867 28.2546 10.3201 26.9346 9.40005L18.6946 3.62672C16.828 2.32005 13.828 2.38672 12.028 3.78672Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M22 15.3333L16.4 20.9333L14.2667 17.7333L10 21.9999" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M19.332 15.3335H21.9987V18.0002" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>}
                                        iconBg="bg-violet-1"
                                        title="Commercial Visa"
                                        description="Developing your trade, setting up new sales channels Your visa is ready..."
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 mt-8">
                                    <MainCard
                                        icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M13.4 3.37338L5.37336 8.61338C2.80003 10.2934 2.80003 14.0534 5.37336 15.7334L13.4 20.9734C14.84 21.92 17.2134 21.92 18.6534 20.9734L26.64 15.7334C29.2 14.0534 29.2 10.3067 26.64 8.62671L18.6534 3.38671C17.2134 2.42671 14.84 2.42671 13.4 3.37338Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.50747 17.4399L7.49414 23.6933C7.49414 25.3866 8.80081 27.1999 10.4008 27.7333L14.6541 29.1466C15.3875 29.3866 16.6008 29.3866 17.3475 29.1466L21.6008 27.7333C23.2008 27.1999 24.5075 25.3866 24.5075 23.6933V17.5066" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M28.5332 20V12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>}
                                        iconBg="bg-green-1"
                                        title="Student Visa"
                                        description="Embarking on a journey of higher education in a foreign country opens doors to..."
                                    />
                                    <MainCard
                                        icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M16.667 29.3336H5.44029C3.89362 29.3336 2.62695 28.0936 2.62695 26.5736V6.78697C2.62695 3.29364 5.22695 1.70697 8.41362 3.26697L14.3336 6.17364C15.6136 6.8003 16.667 8.46697 16.667 9.8803V29.3336Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M29.2946 20.0802V25.1202C29.2946 28.0002 27.9613 29.3336 25.0813 29.3336H16.668V13.8936L17.2946 14.0269L23.2946 15.3736L26.0013 15.9736C27.7613 16.3602 29.2013 17.2669 29.2813 19.8269C29.2946 19.9069 29.2946 19.9869 29.2946 20.0802Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.33203 12H11.9587" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.33203 17.3335H11.9587" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M23.293 15.3735V19.6669C23.293 21.3202 21.9463 22.6669 20.293 22.6669C18.6396 22.6669 17.293 21.3202 17.293 19.6669V14.0269L23.293 15.3735Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M29.2796 19.8269C29.1996 21.4002 27.893 22.6669 26.293 22.6669C24.6396 22.6669 23.293 21.3202 23.293 19.6669V15.3735L25.9996 15.9735C27.7596 16.3602 29.1996 17.2669 29.2796 19.8269Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>}
                                        iconBg="bg-blue-1"
                                        title="Residence Visa"
                                        description="Expert Guidance for a Seamless Immigration Journey Expert Guidance..."
                                    />
                                    <MainCard
                                        icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M4.22656 9.92017L15.9999 16.7335L27.6932 9.96012" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16 28.8136V16.7202" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M13.2408 3.30675L6.12081 7.26679C4.50748 8.16012 3.1875 10.4001 3.1875 12.2401V19.7735C3.1875 21.6135 4.50748 23.8534 6.12081 24.7468L13.2408 28.7068C14.7608 29.5468 17.2541 29.5468 18.7741 28.7068L25.8942 24.7468C27.5075 23.8534 28.8275 21.6135 28.8275 19.7735V12.2401C28.8275 10.4001 27.5075 8.16012 25.8942 7.26679L18.7741 3.30675C17.2408 2.45341 14.7608 2.45341 13.2408 3.30675Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M22.667 17.6535V12.7735L10.0137 5.4668" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>}
                                        iconBg="bg-yellow-1"
                                        title="Working Visa"
                                        description="Get your Visa now for new business and earning opportunities. We deliver you"
                                    />
                                </div>

                            </div>
                        </Container>
                    </div>
                </div>




            </ContainerLg>

        </section>
    );
}

export default VisaTypes;