import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Testimonial from '@/components/Testimonial';
import Features from '@/components/Features';
import Comparison from '@/components/Comparison';
import SameDay from '@/components/SameDay';
import ProductShowcase from '@/components/ProductShowcase';
import Recurring from '@/components/Recurring';
import Security from '@/components/Security';
import CTA from '@/components/CTA';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Testimonial />
        <Features />
        <Comparison />
        <SameDay />
        <ProductShowcase />
        <Recurring />
        <Security />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
