import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { TechStack } from "@/components/tech-stack";
import { CTAFooter } from "@/components/cta-footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <TechStack />
      <CTAFooter />
    </main>
  );
}
