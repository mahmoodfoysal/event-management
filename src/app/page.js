import Banner from "@/components/banner/Banner";
import Events from "@/components/events/Events";
import HeroSection from "@/components/homepage/HeroSection";
import Services from "@/components/services/Services";
import SignatureProjects from "@/components/signatureProjects/SignatureProjects";
import Subscription from "@/components/subscription/Subscription";
import Testimonial from "@/components/testimonial/Testimonial";
import Image from "next/image";
import toast from "react-hot-toast";

export default function Home() {
  toast.dismiss(loginToastId);
  return (
    <>
      <HeroSection></HeroSection>
      <Services></Services>
      <Events></Events>
      <SignatureProjects></SignatureProjects>
      <Testimonial></Testimonial>
      <Subscription></Subscription>
      <Banner></Banner>
    </>
  );
}
