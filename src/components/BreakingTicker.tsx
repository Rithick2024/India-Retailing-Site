import { breakingNews } from "../data/mockData";
import { Zap } from "lucide-react";

export default function BreakingTicker() {
  return (
    <div className="w-full bg-lightbg border-b border-border flex items-center h-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 w-full flex items-center h-full">
        <div className="bg-primary text-white flex items-center justify-center px-3 h-full z-10 whitespace-nowrap flex-shrink-0 font-bold text-xs tracking-wider gap-1 uppercase">
          <Zap size={14} className="fill-current" />
          Trending
        </div>

        <div className="ticker-container flex-1 ml-4 relative h-full flex items-center">
          <div className="ticker-content flex space-x-8">
            {breakingNews.map((news, idx) => (
              <span key={`ticker-1-${idx}`} className="text-sm font-medium text-dark flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                <a href="" className="hover:text-primary transition-colors">{news}</a>
              </span>
            ))}
            {/* Duplicate for seamless infinite loop */}
            {breakingNews.map((news, idx) => (
              <span key={`ticker-2-${idx}`} className="text-sm font-medium text-dark flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                <a href="" className="hover:text-primary transition-colors">{news}</a>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
