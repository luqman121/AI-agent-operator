import BenefitsSection from "@/components/BenefitsSection";
import BookingSection from "@/components/BookingSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import IndustriesSection from "@/components/IndustriesSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import Navbar from "@/components/Navbar";
import ProblemSection from "@/components/ProblemSection";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import SolutionSection from "@/components/SolutionSection";
export default function Home() { return <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100 overflow-x-hidden transition-colors duration-300"><Navbar /><HeroSection /><ProblemSection /><SolutionSection /><BenefitsSection /><FeaturesGrid /><IntegrationsSection /><IndustriesSection /><FAQSection /><CTASection /><BookingSection /><Footer /><ScrollToTopButton /></main>; }
