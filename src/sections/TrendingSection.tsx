import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TrendingSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const tags = [
    "Rahul Gandhi In Manipur",
    "Meta",
    "E-Commerce",
    "Fashion",
    "Live Cricket Score",
    "Adipurush",
    "Sushant Singh Rajputdeath Case",
    "Myntra Launches",
    "E-Commerce",
    "Live Cricket Score",
    "Retail Technology",
    "Supply Chain",
    "Omnichannel",
    "Sustainability"
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="mb-10 py-4 border-y border-gray-100 flex items-center">
      <h2 className="text-lg font-bold text-gray-900 mr-6 flex-shrink-0">Trending</h2>
      
      <div className="flex-1 relative overflow-hidden flex items-center">
        <div 
          ref={scrollRef}
          className="flex gap-2 overflow-x-auto hide-scrollbar scroll-smooth px-2"
        >
          {tags.map((tag, idx) => (
            <button 
              key={idx} 
              className="px-4 py-1.5 border border-gray-200 rounded-md text-[13px] font-medium text-gray-600 hover:bg-gray-50 whitespace-nowrap transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2 ml-4 flex-shrink-0">
        <button 
          onClick={() => scroll('left')}
          className="p-1.5 border border-gray-200 rounded text-gray-400 hover:bg-gray-50 hover:text-gray-900 transition-colors"
        >
          <ChevronLeft size={18} />
        </button>
        <button 
          onClick={() => scroll('right')}
          className="p-1.5 border border-gray-200 rounded text-gray-400 hover:bg-gray-50 hover:text-gray-900 transition-colors"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}
