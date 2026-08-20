import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { AllOfYou } from "@/components/site/AllOfYou";
import { Network } from "@/components/site/Network";
import { WhyMore } from "@/components/site/WhyMore";
import { Discover } from "@/components/site/Discover";
import { Looking } from "@/components/site/Looking";
import { Safety } from "@/components/site/Safety";
import { Premium } from "@/components/site/Premium";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "QueerDatez — LGBTQ+ dating i Danmark" },
      {
        name: "description",
        content:
          "Find én, der er vild med dig. Som du er. QueerDatez er dating for LGBTQ+ mennesker — én profil, flere steder at blive fundet, altid dine valg.",
      },
      { property: "og:title", content: "QueerDatez — LGBTQ+ dating i Danmark" },
      {
        property: "og:description",
        content:
          "Dating skabt til LGBTQ+ mennesker. Én profil. Du bestemmer selv, hvor du er synlig.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AllOfYou />
        <Network />
        <WhyMore />
        <Discover />
        <Looking />
        <Safety />
        <Premium />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
