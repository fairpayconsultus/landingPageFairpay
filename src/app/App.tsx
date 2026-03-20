import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ValueProposition } from "./components/ValueProposition";
import { BeforeAfter } from "./components/BeforeAfter";
import { TechModules } from "./components/TechModules";
import { PlatformGallery } from "./components/PlatformGallery";
import { Pricing } from "./components/Pricing";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-[Inter,system-ui,sans-serif] antialiased">
      <Navbar />
      <Hero />
      <ValueProposition />
      <BeforeAfter />
      <TechModules />
      <PlatformGallery />
      <Pricing />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}