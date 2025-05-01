
import React, { useRef } from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import VimeoPlayer from '@/components/VimeoPlayer';

const SovereignAccess: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-insiderDark">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Section 1: Intro Video */}
        <section className="container mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-5xl font-bold text-center text-gradient font-orbitron mb-8">
            Sovereign Access
          </h1>
          <div className="glass-card p-6 md:p-8 mb-16">
            <VimeoPlayer videoId={1080445822} autoplay={false} />
          </div>
        </section>
        
        {/* Section 2: AI Freedom Code Video */}
        <section className="container mx-auto px-4 py-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-insiderBlue-light font-orbitron mb-8">
            Watch the AI Freedom Code Video
          </h2>
          <div className="glass-card p-6 md:p-8 mb-16">
            <VimeoPlayer videoId={1080443373} autoplay={false} />
          </div>
        </section>
        
        {/* Section 3: Societi Videos */}
        <section className="container mx-auto px-4 py-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-insiderBlue-light font-orbitron mb-8">
            Watch These 5 Societi Videos
          </h2>
          
          <div className="space-y-8 mb-16">
            {/* Video 1 */}
            <div className="glass-card p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-4 text-white/90">Video 1</h3>
              <VimeoPlayer videoId={1036230113} autoplay={false} />
            </div>
            
            {/* Video 2 */}
            <div className="glass-card p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-4 text-white/90">Video 2</h3>
              <VimeoPlayer videoId={1036234553} autoplay={false} />
            </div>
            
            {/* Video 3 */}
            <div className="glass-card p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-4 text-white/90">Video 3</h3>
              <VimeoPlayer videoId={1037558717} autoplay={false} />
            </div>
            
            {/* Video 4 */}
            <div className="glass-card p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-4 text-white/90">Video 4</h3>
              <VimeoPlayer videoId={1036245610} autoplay={false} />
            </div>
            
            {/* Video 5 */}
            <div className="glass-card p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-4 text-white/90">Video 5</h3>
              <VimeoPlayer videoId={1075027764} autoplay={false} />
            </div>
          </div>
        </section>
        
        {/* Section 4: Final Message */}
        <section className="container mx-auto px-4 py-8 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-insiderBlue-light font-orbitron mb-8">
            Final Message
          </h2>
          <div className="glass-card p-6 md:p-8 mb-8">
            <VimeoPlayer videoId={1080449117} autoplay={false} />
          </div>
          
          <div className="flex justify-center">
            <a 
              href="https://t.me/jamisonheld" 
              target="_blank"
              rel="noopener noreferrer" 
              className="bg-gradient-to-r from-insiderPurple to-insiderBlue hover:from-insiderPurple-light hover:to-insiderBlue-light text-white font-medium text-lg px-8 py-4 inline-block rounded-md shadow-glow transition-all duration-300 hover:scale-105"
            >
              Message Jamison Directly for the Scroll
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SovereignAccess;
