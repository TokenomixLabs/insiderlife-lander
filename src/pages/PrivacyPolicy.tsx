
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-insiderDark text-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 font-orbitron text-insiderBlue">Privacy Policy</h1>
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-white/80 mb-6">Effective Date: March 13, 2025</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4 text-white">1. Introduction</h2>
            <p className="text-white/80 mb-4">
              Welcome to InsiderLife. We respect your privacy and are committed to protecting your personal data. 
              This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4 text-white">2. Information We Collect</h2>
            <p className="text-white/80 mb-2">
              <strong>Personal Information:</strong> Name, email address, and any details provided when signing up.
            </p>
            <p className="text-white/80 mb-2">
              <strong>Usage Data:</strong> IP address, browser type, pages visited, and other analytics data.
            </p>
            <p className="text-white/80 mb-4">
              <strong>Cookies:</strong> We use cookies to enhance your experience and analyze site traffic.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4 text-white">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 mb-4 text-white/80">
              <li className="mb-2">To provide and improve our services.</li>
              <li className="mb-2">To communicate updates, offers, and newsletters (you can opt out at any time).</li>
              <li>To comply with legal obligations and protect against fraud.</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4 text-white">4. Data Sharing &amp; Security</h2>
            <p className="text-white/80 mb-2">
              We do not sell or share your data with third parties except for essential service providers.
            </p>
            <p className="text-white/80 mb-4">
              Your data is securely stored with industry-standard protections.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4 text-white">5. Your Rights</h2>
            <p className="text-white/80 mb-4">
              You may request access, correction, or deletion of your data by contacting us at hello@insiderlife.com.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4 text-white">6. Updates to This Policy</h2>
            <p className="text-white/80 mb-4">
              We may update this policy from time to time. The latest version will always be available on our website.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
