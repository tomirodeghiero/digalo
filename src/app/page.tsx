import { Banner } from "@/components/Banner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { ProductShowcase } from "@/components/ProductShowcase";
import { FAQs } from "@/components/FAQs";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Banner />
        <Navbar />
        <Hero />
        <Features />
        <ProductShowcase />
        <FAQs />
        <CallToAction />
      </div>
      <Footer />
    </>
  );
}
