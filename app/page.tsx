import { Nav } from "./_components/Nav";
import { Hero } from "./_components/Hero";
import { Features } from "./_components/Features";
import { Moments } from "./_components/Moments";
import { HowItWorks } from "./_components/HowItWorks";
import { FAQ } from "./_components/FAQ";
import { Download } from "./_components/Download";
import { Footer } from "./_components/Footer";
import { StructuredData } from "./_components/StructuredData";

export default function Home() {
  return (
    <>
      <StructuredData />
      <Nav />
      <main>
        <Hero />
        <Features />
        <Moments />
        <HowItWorks />
        {/* Testimonials hidden until there are real user quotes to show. */}
        <FAQ />
        <Download />
      </main>
      <Footer />
    </>
  );
}
