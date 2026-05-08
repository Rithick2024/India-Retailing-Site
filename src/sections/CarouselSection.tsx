import { useRef } from "react";
import { mockArticles } from "../data/mockData";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";

export default function CarouselSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const items = [...mockArticles, ...mockArticles]; // Duplicate for more items

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-8 border-b border-border overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-bold font-serif border-l-4 border-primary pl-3 uppercase tracking-wide">
          Trending Interviews
        </h2>
        <div className="flex space-x-2">
          <button 
            onClick={() => scroll('left')}
            className="w-8 h-8 flex items-center justify-center border border-border rounded-full hover:bg-primary hover:border-primary hover:text-white transition-colors"
          >
            <ChevronLeft size={16} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-8 h-8 flex items-center justify-center border border-border rounded-full hover:bg-primary hover:border-primary hover:text-white transition-colors"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div 
        ref={scrollContainerRef}
        className="flex space-x-6 overflow-x-auto hide-scrollbar pb-4 snap-x snap-mandatory"
      >
        {items.map((article, idx) => (
          <div key={`carousel-${article.id}-${idx}`} className="w-[280px] md:w-[320px] flex-shrink-0 snap-start group cursor-pointer">
            <div className="relative h-40 w-full rounded overflow-hidden img-zoom-container bg-gray-100 mb-3">
              <img 
                src={article.image.startsWith('http') ? article.image : `${import.meta.env.BASE_URL}${article.image.replace(/^\//, '')}`} 
                alt={article.title} 
                className="w-full h-full object-cover img-zoom"
              />
              <div className="absolute top-2 left-2 bg-black/70 text-white text-xxs font-bold px-2 py-1 uppercase tracking-wider backdrop-blur-sm">
                INTERVIEW
              </div>
            </div>
            
            <h3 className="font-bold text-sm leading-snug group-hover:text-primary transition-colors mb-2 line-clamp-2">
              {article.title}
            </h3>
            
            <div className="flex items-center text-muted text-xxs font-medium uppercase tracking-wider">
              <div className="flex items-center">
                <Clock size={10} className="mr-1" />
                {article.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
