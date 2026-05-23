import { BlogPreview } from "@/components/BlogPreview";
import { BudgetEstimator } from "@/components/BudgetEstimator";
import { CaseStudy } from "@/components/CaseStudy";
import { ClientJourney } from "@/components/ClientJourney";
import { Destinations } from "@/components/Destinations";
import { DestinationCouples } from "@/components/DestinationCouples";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { InquiryForm } from "@/components/InquiryForm";
import { MoodboardBuilder } from "@/components/MoodboardBuilder";
import { Navbar } from "@/components/Navbar";
import { Packages } from "@/components/Packages";
import { Portfolio } from "@/components/Portfolio";
import { PortalPreview } from "@/components/PortalPreview";
import { Preloader } from "@/components/Preloader";
import { Press } from "@/components/Press";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <DestinationCouples />
        <Destinations />
        <Services />
        <BudgetEstimator />
        <MoodboardBuilder />
        <Portfolio />
        <CaseStudy />
        <ClientJourney />
        <PortalPreview />
        <Packages />
        <Testimonials />
        <Press />
        <InquiryForm />
        <BlogPreview />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
