import { ChevronRight } from "lucide-react";

export default function HeroSection() {
  const leftSubArticles = [
    {
      category: "SELECT CITYWALK",
      title: "Wow! Momo Foods enters Bhopal with Wow!",
      tags: "# Citywalk  #reel stories podcast",
      image: "/momo.png"
    },
    {
      category: "FOOD & BEVERAGE",
      title: "KFC opens another outlet in Punjab KFC opens another outlet in Punjab",
      tags: "# Beverage  #reel stories podcast",
      image: "/kfc.png"
    },
    {
      category: "SELECT CITYWALK",
      title: "FNP (Ferns N Petals) appoints Ashish Goel",
      tags: "# Citywalk  #reel stories podcast",
      image: "/fnp.png"
    }
  ];

  const rightArticles = [
    {
      title: "Unwrapping the Archies' reinvention plan",
      image: "/news1.png"
    },
    {
      title: "How AI is enhancing stores, How AI is enhancing stores",
      image: "/news2.png"
    }
  ];

  const rightTextArticles = [
    {
      title: "Croma opens 58 outlets in 6, Croma retails more than 16,000",
      excerpt: "These companies created a lot of hype when they listed on the..."
    },
    {
      title: "Select Citywalk opens 4 new stores in June",
      excerpt: "These companies created a lot of hype when they listed on the..."
    }
  ];

  return (
    <section className="bg-white">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* Left Column (8 cols) */}
        <div className="lg:col-span-6 flex flex-col">
          {/* Main Featured Article */}
          <div className="relative w-full h-[300px] mb-6 overflow-hidden cursor-pointer group rounded-lg">
            <img
              src="/rahul.png"
              alt="Rahul Gandhi"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            <div className="absolute bottom-4 left-4 right-4">
              <span className="bg-[#e30613] text-white text-[10px] font-bold px-1.5 py-0.5 uppercase mb-2 inline-block tracking-widest">
                IN FOCUS
              </span>
              <h1 className="text-white text-2xl md:text-[28px] font-bold leading-tight mb-2 group-hover:text-gray-200 transition-colors">
                Rahul Gandhi In Manipur: Chopper Ride After Women Protesters Surround Car
              </h1>
              <p className="text-gray-300 text-sm">Rahul Gandhi</p>
            </div>
          </div>

          {/* Sub Articles List */}
          <div className="flex flex-col space-y-5 mt-2">
            {leftSubArticles.map((article, idx) => (
              <div key={idx} className="flex items-center justify-between border-b border-gray-200 pb-5 last:border-0 last:pb-0 cursor-pointer group">
                <div className="flex items-start w-full">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-[140px] h-[90px] object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="ml-5 flex-1 flex flex-col justify-center mt-1">
                    <span className="text-[#e30613] text-[10px] font-bold uppercase tracking-widest mb-1">
                      {article.category}
                    </span>
                    <h3 className="text-[15px] font-bold text-gray-900 group-hover:text-[#e30613] transition-colors mb-2 leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 text-xs font-medium">
                      {article.tags}
                    </p>
                  </div>
                </div>
                <ChevronRight className="text-gray-400 group-hover:text-[#e30613] transition-colors flex-shrink-0 ml-4" size={20} />
              </div>
            ))}
          </div>
        </div>

        {/* Right Column (4 cols) */}
        <div className="lg:col-span-4 flex flex-col border-l border-gray-200 pl-6">
          <div className="mb-5 border-b border-gray-200 relative pb-2">
            <h2 className="text-[18px] font-bold text-gray-900">Latest News</h2>
            <div className="absolute bottom-[-1px] left-0 w-8 h-[2px] bg-[#e30613]"></div>
          </div>

          <div className="flex flex-col space-y-6">
            {/* Image Articles */}
            {rightArticles.map((article, idx) => (
              <div key={idx} className="flex flex-col cursor-pointer group">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-[150px] object-cover rounded-lg mb-3 group-hover:opacity-90 transition-opacity"
                />
                <h3 className="text-[17px] font-bold text-gray-900 leading-snug group-hover:text-[#e30613] transition-colors">
                  {article.title}
                </h3>
              </div>
            ))}

            {/* Divider */}
            <div className="w-full h-px bg-gray-100 my-2"></div>

            {/* Text Articles */}
            {rightTextArticles.map((article, idx) => (
              <div key={`text-${idx}`} className="flex flex-col cursor-pointer group border-b border-gray-100 pb-5 last:border-0 last:pb-0">
                <h3 className="text-[15px] font-bold text-gray-900 leading-snug mb-2 group-hover:text-[#e30613] transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-xs">
                  {article.excerpt}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
