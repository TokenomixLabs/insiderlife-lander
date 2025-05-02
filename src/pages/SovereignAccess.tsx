import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SendIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BackToTop } from '@/components/ui/back-to-top';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const VideoContainer: React.FC<{ src: string }> = ({ src }) => (
  <div className={cn(
    "rounded-xl bg-insiderDark shadow-md p-4",
    "transition-transform duration-300",
    "hover:translate-y-[-4px] hover:shadow-xl"
  )}>
    <div className="aspect-video w-full rounded-lg overflow-hidden">
      <iframe
        src={src}
        className="w-full h-full"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
    </div>
  </div>
);

const FadeInSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  
  return (
    <div
      ref={elementRef}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}
    >
      {children}
    </div>
  );
};

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-2xl md:text-3xl font-semibold tracking-wide font-orbitron text-white text-center mb-12 leading-relaxed">
    {children}
  </h2>
);

const SovereignAccess: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-insiderDark">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 pb-24">
        {/* Hero Section */}
        <section className="pt-32 md:pt-40">
          <FadeInSection>
            <div className="text-center mb-16">
              <h1 className={cn(
                "text-5xl md:text-6xl font-bold font-orbitron",
                "text-gradient leading-[1.4]",
                "tracking-tight py-2 pb-4"
              )}>
                Sovereign Access
              </h1>
            </div>
          </FadeInSection>
          <div className="max-w-5xl mx-auto">
            <VideoContainer src="https://player.vimeo.com/video/1080452974" />
          </div>
        </section>

        {/* AI Freedom Code Video Section */}
        <section className="mt-24">
          <FadeInSection>
            <SectionTitle>Watch the AI Freedom Code Video</SectionTitle>
            <div className="max-w-5xl mx-auto">
              <VideoContainer src="https://player.vimeo.com/video/1080443373" />
            </div>
          </FadeInSection>
        </section>

        {/* Societi Videos Section */}
        <section className="mt-24">
          <FadeInSection>
            <SectionTitle>Watch These 5 Societi Videos</SectionTitle>
            <div className="space-y-24 max-w-5xl mx-auto">
              {[
                "1036230113",
                "1036234553",
                "1037558717",
                "1036245610",
                "1075027764"
              ].map((id) => (
                <VideoContainer key={id} src={`https://player.vimeo.com/video/${id}`} />
              ))}
            </div>
          </FadeInSection>
        </section>

        {/* Final Message Section */}
        <section className="mt-24">
          <FadeInSection>
            <SectionTitle>Final Message</SectionTitle>
            <div className="max-w-5xl mx-auto">
              <VideoContainer src="https://player.vimeo.com/video/1080449117" />
              <div className="mt-12 text-center border-t border-white/10 pt-12">
                <p className={cn(
                  "text-xl md:text-2xl text-center font-medium",
                  "flex items-center justify-center gap-3"
                )}>
                  <span className="animate-pulse">
                    Message Jamison Directly for the Scroll
                  </span>
                  <SendIcon className="h-6 w-6 text-insiderBlue transition-transform duration-300 hover:translate-y-[-2px]" />
                </p>
              </div>
            </div>
          </FadeInSection>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default SovereignAccess;