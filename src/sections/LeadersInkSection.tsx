import { useState } from "react";
import { ChevronRight } from "lucide-react";

export default function LeadersInkSection() {
  const [leadersIndex, setLeadersIndex] = useState(0);
  const [researchIndex, setResearchIndex] = useState(0);

  const allLeadersData = [
    {
      title: "Top 5 iconic Apple stores across the world by design",
      excerpt: "From a total of around 522 Apple stores across the world..",
      author: "Arundhati Roy",
      image: "/leader1.png",
      avatar: "https://i.pravatar.cc/150?u=a"
    },
    {
      title: "Rollercoaster ride of four retail industry IPOs",
      excerpt: "These companies created a lot of hype when they listed on the...",
      author: "Vikram Seth",
      image: "/leader2.png",
      avatar: "https://i.pravatar.cc/150?u=b"
    },
    {
      title: "Uniqlo India's Success Mantra: Making...",
      excerpt: "Uniqlo, Asia's largest fashion retailer has managed to hit..",
      author: "Jhumpa Lahiri",
      image: "/leader3.png",
      avatar: "https://i.pravatar.cc/150?u=c"
    },
    {
      title: "The Future of Retail: AI and Beyond",
      excerpt: "Exploring how artificial intelligence is reshaping the shopping experience...",
      author: "Salman Rushdie",
      image: "/leader1.png",
      avatar: "https://i.pravatar.cc/150?u=d"
    }
  ];

  const allResearchData = [
    {
      title: "Human touchpoint is extremely important for us,",
      category: "FASHION",
      image: "/research1.png",
      duration: "5 min"
    },
    {
      title: "US denim brand Lee opens outlets in Sikar, Patna..",
      category: "BEAUTY",
      image: "/research2.png",
      duration: ""
    },
    {
      title: "Sustainability in the Modern Supply Chain",
      category: "SUPPLY CHAIN",
      image: "/research1.png",
      duration: "10 min"
    }
  ];

  // For demonstration, we'll just show a subset based on index
  const leadersData = allLeadersData.slice(leadersIndex, leadersIndex + 3);
  const researchData = allResearchData.slice(researchIndex, researchIndex + 2);

  return (
    <section className="mb-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Leaders Ink Column */}
      <div className="lg:col-span-7">
        <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-2">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-gray-900 border-l-4 border-red-600 pl-3">Leaders Ink</h2>
          </div>
          <a href="" className="flex items-center text-xs font-bold text-gray-500 uppercase hover:text-red-600 transition-colors">
            See more <ChevronRight size={14} className="ml-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 min-h-[250px]">
          {leadersData.map((item, idx) => (
            <div key={idx} className="group cursor-pointer animate-in fade-in duration-500 shadow-lg rounded-lg p-1">
              <div className="h-[106px] overflow-hidden rounded-lg mb-4">
                <img
                  src={`${import.meta.env.BASE_URL}${item.image.replace(/^\//, '')}`}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex items-start gap-3 mb-2">
                <img src={item.avatar} alt={item.author} className="w-8 h-8 rounded-full object-cover border border-gray-100" />
                <h3 className="text-sm font-bold text-gray-900 leading-snug group-hover:text-red-600 transition-colors">
                  {item.title}
                </h3>
              </div>
              <p className="text-[12px] text-gray-500 line-clamp-2 mb-2 px-1">{item.excerpt}</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase px-1">{item.author}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6 gap-1.5">
          {[0, 1].map((dot) => (
            <div
              key={dot}
              className={`w-1.5 h-1.5 rounded-full ${dot === leadersIndex ? 'bg-red-600' : 'bg-gray-200'} cursor-pointer transition-colors`}
              onClick={() => setLeadersIndex(dot)}
            ></div>
          ))}
        </div>
      </div>

      {/* Research Column */}
      <div className="lg:col-span-5">
        <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-2">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-gray-900 border-l-4 border-red-600 pl-3">Research</h2>
          </div>
          <a href="" className="flex items-center text-xs font-bold text-gray-500 uppercase hover:text-red-600 transition-colors">
            See more <ChevronRight size={14} className="ml-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-h-[250px]">
          {researchData.map((item, idx) => (
            <div key={idx} className="group cursor-pointer animate-in fade-in duration-500 shadow-lg rounded-lg p-2">
              <div className="relative h-[150px] overflow-hidden rounded-lg mb-4">
                <img
                  src={`${import.meta.env.BASE_URL}${item.image.replace(/^\//, '')}`}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {item.duration && (
                  <div className="absolute bottom-2 left-2 bg-white/80 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    {item.duration}
                  </div>
                )}
              </div>
              <h3 className="text-sm font-bold text-gray-900 leading-snug group-hover:text-red-600 transition-colors mb-2">
                {item.title}
              </h3>
              <span className="text-[10px] font-extrabold text-red-600 uppercase tracking-widest">{item.category}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6 gap-1.5">
          {[0, 1].map((dot) => (
            <div
              key={dot}
              className={`w-1.5 h-1.5 rounded-full ${dot === researchIndex ? 'bg-red-600' : 'bg-gray-200'} cursor-pointer transition-colors`}
              onClick={() => setResearchIndex(dot)}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
