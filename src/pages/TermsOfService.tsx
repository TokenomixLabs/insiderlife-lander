
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-insiderDark text-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 font-orbitron text-insiderBlue">Terms of Service</h1>
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-white/80 mb-6">Effective Date: March 13, 2025</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4 text-white">1. Acceptance of Terms</h2>
            <p className="text-white/80 mb-4">
              By using InsiderLife, you agree to these Terms of Service. If you do not agree, do not use our website.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4 text-white">2. Use of Our Services</h2>
            <ul className="list-disc pl-6 mb-4 text-white/80">
              <li className="mb-2">You must be at least 18 years old to use our platform.</li>
              <li className="mb-2">Do not use our services for illegal activities.</li>
              <li>We reserve the right to terminate accounts that violate these terms.</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4 text-white">3. Intellectual Property</h2>
            <p className="text-white/80 mb-4">
              All content on this site, including logos and designs, is owned by InsiderLife and may not be copied or reproduced without permission.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4 text-white">4. Disclaimers &amp; Liability</h2>
            <p className="text-white/80 mb-2">
              Our services are provided "as is" without warranties.
            </p>
            <p className="text-white/80 mb-4">
              We are not responsible for any losses or damages arising from the use of our website.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4 text-white">5. Modifications</h2>
            <p className="text-white/80 mb-4">
              We may update these terms at any time. Continued use of the site means you accept the changes.
            </p>
            
            <p className="text-white/80 mt-8">
              For questions, contact hello@insiderlife.com.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
