import { HeroSection } from "@/components/HeroSection";
import { PainSection } from "@/components/PainSection";
import { TransformSection } from "@/components/TransformSection";
import { AppDemoSection } from "@/components/AppDemoSection";
import { CTASection } from "@/components/CTASection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { ScarcitySection } from "@/components/ScarcitySection";
import { FinalCTASection } from "@/components/FinalCTASection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <PainSection />
      <TransformSection />
      <AppDemoSection />
      <CTASection />
      <SocialProofSection />
      <ScarcitySection />
      <FinalCTASection />
    </main>
  );
};

export default Index;
