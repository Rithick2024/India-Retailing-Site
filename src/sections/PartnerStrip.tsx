export default function PartnerStrip() {
  const partners = [
    "RELIANCE RETAIL", "TATA CLiQ", "MYNTRA", "FLIPKART", "AMAZON", "NYKAA", "SHOPPERS STOP", "PUMA", "ADIDAS", "ZUDIO"
  ];

  return (
    <section className="py-8 my-8 border-y border-border bg-lightbg overflow-hidden w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <div className="max-w-7xl mx-auto px-4 mb-4 flex flex-col items-center">
        <h3 className="text-sm font-bold uppercase tracking-widest text-muted text-center mb-6 relative">
          <span className="bg-lightbg px-4 relative z-10">Our Partners & Brands</span>
          <div className="absolute top-1/2 left-[-100%] right-[-100%] h-px bg-border -z-10"></div>
        </h3>
        
        <div className="ticker-container w-full relative">
          {/* Gradient Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-lightbg to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-lightbg to-transparent z-10 pointer-events-none"></div>
          
          <div className="ticker-content flex space-x-12 items-center opacity-60 hover:opacity-100 transition-opacity duration-300">
            {partners.map((partner, idx) => (
              <span key={`partner-1-${idx}`} className="text-xl font-bold text-gray-400 whitespace-nowrap">
                {partner}
              </span>
            ))}
            {/* Duplicate for seamless infinite loop */}
            {partners.map((partner, idx) => (
              <span key={`partner-2-${idx}`} className="text-xl font-bold text-gray-400 whitespace-nowrap">
                {partner}
              </span>
            ))}
            {partners.map((partner, idx) => (
              <span key={`partner-3-${idx}`} className="text-xl font-bold text-gray-400 whitespace-nowrap">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
