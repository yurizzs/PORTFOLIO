// Contact.jsx

"use client";

import { useState } from "react";
// Using lucide-react icons
import { Mail, Phone, Github, Facebook, Instagram, Hash, Linkedin } from "lucide-react";

/**
 * Helper component for the flippable buttons (Email/Phone)
 */
const FlipButton = ({ icon: Icon, frontText, backText, gradientClasses }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flip = () => {
    setIsFlipped(!isFlipped);
  };
  
  // Base styles shared with the anchor links
  const baseStyles = "w-full h-20 border-y border-x border-white dark:border-primary overflow-hidden p-4 text-primary dark:text-grey-50 font-['Poppins'] font-bold text-xl leading-4 relative flex items-center justify-between cursor-pointer bg-transparent transition-all duration-300";

  return (
    <button 
      className={`${baseStyles} group`} 
      onClick={flip}
      style={{ perspective: '1000px' }} // Necessary for 3D transform context
    >
      {/* 3D Flip Inner Container */}
      <div 
        className={`relative w-full h-full transition-transform duration-500 ease-in-out`}
        style={{ transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateX(180deg)' : 'rotateX(0deg)' }}
      >
        {/* Flip Front */}
        <div className="absolute w-full h-full backface-hidden flex justify-between items-center top-0 left-0">
          <Icon className="w-10 h-10 text-primary dark:text-grey-50" />
          {frontText}
        </div>
        
        {/* Flip Back */}
        <div className="absolute w-full h-full backface-hidden rotate-x-180 flex justify-between items-center top-0 left-0 text-base">
          <Icon className="w-10 h-10 text-primary dark:text-grey-50" />
          <span className="break-all">{backText}</span>
        </div>
      </div>
      
      {/* Gradient Bottom Bar (Replaces ::after) */}
      <div className={`absolute bottom-0 left-0 right-0 h-1.5 ${gradientClasses}`}></div>
    </button>
  );
};

/**
 * Helper component for the Social Anchor Links
 */
const SocialLink = ({ icon: Icon, text, href, gradientClasses }) => {
  // Base styles shared with the Flip button
  const baseStyles = "w-full h-20  border-y border-x border-white dark:border-primary overflow-hidden p-4 text-primary dark:text-grey-50 font-['Poppins'] font-bold text-xl leading-4 relative flex items-center justify-between text-decoration-none transition-all duration-300";

  return (
    <a
      className={`${baseStyles} group`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="w-10 h-10 text-primary dark:text-grey-50" />
      {text}
      
      {/* Gradient Bottom Bar (Replaces ::after) */}
      <div className={`absolute bottom-0 left-0 right-0 h-1.5 ${gradientClasses}`}></div>
    </a>
  );
}


export default function Contact() {
  return (
    <section 
      id="contact" 
      className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-grey-50 dark:bg-grey-50 transition-colors"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-primary font-bold text-primary dark:text-grey-50 mb-3 sm:mb-4 text-center">
          Get In Touch
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-8 sm:mb-12"></div>

        {/* Responsive Grid:
          - Default (mobile): 1 column
          - MD (768px+): 2 columns
          - LG (1024px+): 3 columns (matching the requested grid structure)
          - Gap: gap-5 for mobile, gap-10 for larger screens (matching requested 20px, 30px, 50px roughly)
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 md:gap-y-8 lg:gap-y-12 gap-x-5 md:gap-x-8 lg:gap-x-12 socials place-items-center md:place-items-start text-primary dark:text-grey-50">

          {/* GitHub Link */}
          <SocialLink
            icon={Github}
            text="Github"
            href="https://github.com/yurizzs"
            gradientClasses="bg-gradient-to-r from-[#006400] via-[#228B22] to-[#32CD32]"
          />

          {/* Facebook Link */}
          <SocialLink
            icon={Facebook}
            text="Facebook"
            href="https://www.facebook.com/iristiffany.yu"
            gradientClasses="bg-gradient-to-r from-[#1877F2] via-[#1A73E8] to-[#0056A2]"
          />

          {/* Instagram Link */}
          <SocialLink
            icon={Instagram}
            text="Instagram"
            href="https://www.instagram.com/yu_rowr/"
            // Using placeholder colors for the complex Instagram gradient
            gradientClasses="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500" 
          />

          {/* Discord Link */}
          <SocialLink
            icon={Linkedin}
            text="Linkedin"
            href="https://www.linkedin.com/in/iris-tiffany-yu-315118357/"
            gradientClasses="bg-gradient-to-r from-[#b624be] to-[#9333EA]"
          />

          {/* Email Flip Button */}
          <FlipButton
            icon={Mail}
            frontText="Email"
            backText="iristiffanyu@gmail.com"
            gradientClasses="bg-gradient-to-r from-[#1E3A8A] to-[#10B981]"
          />

          {/* Phone Flip Button */}
          <FlipButton
            icon={Phone}
            frontText="Phone"
            backText="+63 945 674 5020"
            gradientClasses="bg-gradient-to-r from-[#D84B16] to-[#FFCC80]"
          />
        </div>
      </div>
      
      {/* Essential CSS classes that must be accessible globally or defined in a base CSS file.
        In a standard Next.js setup, these would go into globals.css
      */}
      <style jsx global>{`
        /* This is required for the 3D flip effect */
        .backface-hidden {
          backface-visibility: hidden;
        }
        /* Rotates the back content to start hidden */
        .rotate-x-180 {
          transform: rotateX(180deg);
        }
      `}</style>
    </section>
  );
}