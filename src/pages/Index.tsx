import { HeroSection } from "@/components/HeroSection";
import { PainSection } from "@/components/PainSection";
import { TransformSection } from "@/components/TransformSection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { ScarcitySection } from "@/components/ScarcitySection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Popup } from "@/components/Popup";
import { StickyButton } from "@/components/StickyButton";
import { usePopup } from "@/hooks/usePopup";
import { useStickyButton } from "@/hooks/useStickyButton";

const Index = () => {
  const { visible, close } = usePopup();
  const stickyVisible = useStickyButton();

  return (
    <>
      <Popup visible={visible} onClose={close} />
      <StickyButton visible={stickyVisible} />

      <main className="min-h-screen bg-background text-foreground">
        <HeroSection />
        <PainSection />
        <TransformSection />
        <SocialProofSection />
        <ScarcitySection />
        <FinalCTASection />
      </main>
    </>
  );
};

export default Index;
