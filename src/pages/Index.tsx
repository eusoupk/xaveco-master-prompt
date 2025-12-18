import { HeroSection } from "@/components/HeroSection";
import { PainSection } from "@/components/PainSection";
import { TransformSection } from "@/components/TransformSection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { ScarcitySection } from "@/components/ScarcitySection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Popup } from "@/components/Popup";
import { StickyButton } from "@/components/StickyButton";
import { StarryBackground } from "@/components/StarryBackground";
import { SoundToggle } from "@/components/SoundToggle";
import { usePopup } from "@/hooks/usePopup";
import { useStickyButton } from "@/hooks/useStickyButton";

const Index = () => {
  const { visible, close } = usePopup();
  const stickyVisible = useStickyButton();

  return (
    <>
      <StarryBackground />
      <SoundToggle />
      <Popup visible={visible} onClose={close} />
      <StickyButton visible={stickyVisible} />

      <main className="min-h-screen relative">
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
