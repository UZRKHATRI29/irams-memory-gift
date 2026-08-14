import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { useSettings } from "@/lib/content";
import { Atmosphere } from "@/components/decor/Atmosphere";
import { Opening } from "@/components/gift/Opening";
import { GiftBox, type BoxDestination } from "@/components/gift/GiftBox";
import { SceneShell } from "@/components/gift/SceneShell";
import { AlbumScene } from "@/components/gift/AlbumScene";
import { LetterScene } from "@/components/gift/LetterScene";
import { BouquetScene } from "@/components/gift/BouquetScene";
import { GiftsScene } from "@/components/gift/GiftsScene";
import { FinalScene } from "@/components/gift/FinalScene";
import { Volume2, VolumeX, Shield } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

type Stage = "opening" | "box" | "album" | "letter" | "bouquet" | "gifts" | "final";

function Index() {
  const { data: settings } = useSettings();
  const [stage, setStage] = useState<Stage>("opening");
  const [boxOpened, setBoxOpened] = useState(false);
  const [explored, setExplored] = useState<Set<BoxDestination>>(new Set());
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const recipient = settings?.recipient_name || "Iram";
  const openingHeading = settings?.opening_heading || `Happy Birthday, ${recipient}`;
  const openingMessage =
    settings?.opening_message ||
    "A small quiet corner of the internet, made with love, memories, and warm sisterly feelings. Step inside whenever you're ready.";
  const openingButtonText = settings?.opening_button_text || "unfold the gift";

  const handleSelectBoxObject = (dest: BoxDestination) => {
    setExplored((prev) => new Set([...prev, dest]));
    setStage(dest);
  };

  const exploredAll = explored.size >= 4;

  const handleReplay = () => {
    setStage("box");
  };

  return (
    <main className="relative min-h-[100svh] w-full overflow-hidden bg-background font-sans text-foreground paper grain">
      {/* Background Atmosphere - floating falling petals */}
      <Atmosphere />

      {/* Admin Quick Portal Access Link */}
      <div className="fixed right-3 top-3 z-40 sm:right-6 sm:top-6">
        <a
          href="/admin"
          className="flex items-center gap-1.5 rounded-full border border-walnut/20 bg-cream/70 px-3 py-1.5 text-xs text-walnut shadow-xs backdrop-blur-sm transition-colors hover:bg-beige"
          title="Admin Panel"
        >
          <Shield className="h-3.5 w-3.5" />
          <span>Admin</span>
        </a>
      </div>

      <AnimatePresence mode="wait">
        {/* Stage 1: Opening Screen */}
        {stage === "opening" && (
          <Opening
            key="opening"
            heading={openingHeading}
            message={openingMessage}
            buttonText={openingButtonText}
            onOpen={() => {
              setStage("box");
              setBoxOpened(true);
            }}
          />
        )}

        {/* Stage 2: Gift Box Central Hub */}
        {stage === "box" && (
          <GiftBox
            key="box"
            opened={boxOpened}
            onOpen={() => setBoxOpened(true)}
            onSelect={handleSelectBoxObject}
            onFinal={() => setStage("final")}
            recipient={recipient}
            exploredAll={exploredAll}
          />
        )}

        {/* Stage 3a: Scrapbook Album */}
        {stage === "album" && (
          <SceneShell key="album" onBack={() => setStage("box")}>
            <AlbumScene />
          </SceneShell>
        )}

        {/* Stage 3b: Letter */}
        {stage === "letter" && (
          <SceneShell key="letter" onBack={() => setStage("box")}>
            <LetterScene />
          </SceneShell>
        )}

        {/* Stage 3c: Bouquet */}
        {stage === "bouquet" && (
          <SceneShell key="bouquet" onBack={() => setStage("box")}>
            <BouquetScene />
          </SceneShell>
        )}

        {/* Stage 3d: Gifts */}
        {stage === "gifts" && (
          <SceneShell key="gifts" onBack={() => setStage("box")}>
            <GiftsScene />
          </SceneShell>
        )}

        {/* Stage 4: Birthday Finale */}
        {stage === "final" && (
          <SceneShell key="final" onBack={() => setStage("box")} label="Back to memories">
            <FinalScene onReplay={handleReplay} />
          </SceneShell>
        )}
      </AnimatePresence>
    </main>
  );
}
