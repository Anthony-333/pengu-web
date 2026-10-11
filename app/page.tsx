import { Nav } from "./_components/Nav";
import { Hero } from "./_components/Hero";
import { Features } from "./_components/Features";
import { AppShowcase } from "./_components/AppShowcase";
import { HowItWorks } from "./_components/HowItWorks";
import { Testimonials } from "./_components/Testimonials";
import { Download } from "./_components/Download";
import { Footer } from "./_components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <AppShowcase />
        <HowItWorks />
        <Testimonials />
        <Download />
      </main>
      <Footer />
    </>
  );
}
