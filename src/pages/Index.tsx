import { useRef, useEffect, useState } from "react";
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
import { LevelUpEffect } from "@/components/LevelUpEffect";
import { usePopup } from "@/hooks/usePopup";
import { useStickyButton } from "@/hooks/useStickyButton";

const SECTIONS = [
  { id: 'hero', name: 'INÍCIO', level: 1 },
  { id: 'pain', name: 'GAME OVER', level: 2 },
  { id: 'transform', name: 'NOVO JOGO', level: 3 },
  { id: 'social', name: 'HALL DA FAMA', level: 4 },
  { id: 'scarcity', name: 'BOSS FIGHT', level: 5 },
  { id: 'final', name: 'CRÉDITOS', level: 6 },
];

const Index = () => {
  const { visible, close } = usePopup();
  const stickyVisible = useStickyButton();
  
  const [currentLevel, setCurrentLevel] = useState(0);
  const [showLevelUp, setShowLevelUp] = useState(false);
  const [levelUpInfo, setLevelUpInfo] = useState({ level: 1, name: '' });
  const [triggeredSections, setTriggeredSections] = useState<Set<string>>(new Set());

  const sectionRefs = {
    hero: useRef<HTMLElement>(null),
    pain: useRef<HTMLElement>(null),
    transform: useRef<HTMLElement>(null),
    social: useRef<HTMLElement>(null),
    scarcity: useRef<HTMLElement>(null),
    final: useRef<HTMLElement>(null),
  };

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTIONS.forEach((section) => {
      const ref = sectionRefs[section.id as keyof typeof sectionRefs];
      if (!ref.current) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !triggeredSections.has(section.id)) {
            // Mark as triggered
            setTriggeredSections(prev => new Set([...prev, section.id]));
            
            // Don't show level up for first section (hero)
            if (section.level > 1) {
              setLevelUpInfo({ level: section.level, name: section.name });
              setShowLevelUp(true);
              setCurrentLevel(section.level);
              
              // Reset after animation
              setTimeout(() => setShowLevelUp(false), 2500);
            } else {
              setCurrentLevel(1);
            }
          }
        },
        { threshold: 0.4 }
      );

      observer.observe(ref.current);
      observers.push(observer);
    });

    return () => observers.forEach(o => o.disconnect());
  }, [triggeredSections]);

  return (
    <>
      <StarryBackground />
      <SoundToggle />
      <Popup visible={visible} onClose={close} />
      <StickyButton visible={stickyVisible} />
      
      {/* Level indicator */}
      <div className="fixed top-4 left-4 z-50 bg-card/80 border-4 border-border px-4 py-2">
        <div className="text-xs text-pixel-gold">LVL</div>
        <div className="text-lg text-primary">{currentLevel}</div>
      </div>

      <LevelUpEffect 
        show={showLevelUp} 
        level={levelUpInfo.level} 
        sectionName={levelUpInfo.name}
      />

      <main className="min-h-screen relative">
        <HeroSection ref={sectionRefs.hero} />
        <PainSection ref={sectionRefs.pain} />
        <TransformSection ref={sectionRefs.transform} />
        <SocialProofSection ref={sectionRefs.social} />
        <ScarcitySection ref={sectionRefs.scarcity} />
        <FinalCTASection ref={sectionRefs.final} />
      </main>
    </>
  );
};

export default Index;
