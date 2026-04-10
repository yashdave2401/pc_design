import { useEffect, useState, useRef } from "react";

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setMounted(true);
    
    // Fallback: continuously check if the video has unexpectedly paused and force it to play
    const monitorVideo = setInterval(() => {
      if (videoRef.current && videoRef.current.paused) {
        videoRef.current.play().catch(() => {});
      }
    }, 1000);

    return () => clearInterval(monitorVideo);
  }, []);

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center items-center overflow-hidden py-32">
      
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <video 
          ref={videoRef}
          key="hero-vid"
          autoPlay 
          loop 
          muted 
          playsInline 
          onEnded={() => {
            if (videoRef.current) {
              videoRef.current.play().catch(() => {});
            }
          }}
          className="w-full h-full object-cover scale-[1.02]"
        >
          <source src="/TilleyHomepageVideo_720_1.mp4" type="video/mp4" />
        </video>
        
        {/* Dark Blue Wash Overlay for Text Contrast */}
        <div className="absolute inset-0 bg-[#001D3D]/60 mix-blend-multiply" />
        {/* Soft radial fade for the center focus */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,40,80,0.4)_0%,rgba(0,15,30,0.8)_100%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center mt-20">
        
        {/* Huge Centered Typography */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-[90px] text-white leading-[1.05] tracking-tight mb-6 transition-all duration-1000 ease-out translate-y-0 opacity-100 drop-shadow-2xl font-semibold">
          <span className="block mb-2 text-shadow-glow">Innovative Plasticizers.</span>
          <span className="block opacity-90">Global Standards.</span>
        </h1>
        
        <p className="font-body text-xl md:text-[22px] max-w-4xl text-white/90 leading-relaxed mb-4 drop-shadow-lg opacity-100 transition-all duration-1000 delay-300">
          Your source for high-quality pharmaceutical-grade plasticizers, specialty industrial chemical products, and custom formulations.
        </p>
        
        <p className="font-body text-lg md:text-xl text-[#AEE1FF] font-medium mb-12 drop-shadow-lg opacity-100 transition-all duration-1000 delay-500">
          Source your next solution with Parul Chemicals.
        </p>
        
      </div>
    </section>
  );
};

export default HeroSection;
