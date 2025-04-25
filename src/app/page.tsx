import Hero from "@/components/home/sections/Hero";
import Partners from "@/components/home/sections/Partners";
import Steps from "@/components/home/sections/Steps";
import Successes from "@/components/home/sections/Successes";
import VisaTypes from "@/components/home/sections/VisaTypes";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Partners/>
      <VisaTypes/>
      <Steps/>
      <Successes/>
    </main>
  );
}
