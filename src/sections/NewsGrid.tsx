import NewsCard from "../components/NewsCard";
import { mockArticles } from "../data/mockData";

export default function NewsGrid() {
  // Use mock data to fill grids
  const featuredNews = mockArticles.slice(0, 4);
  const secondaryNews = mockArticles.slice(2, 6);

  return (
    <section className="py-8 border-b border-border">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-bold font-serif border-l-4 border-primary pl-3 uppercase tracking-wide">
          Retail Categories
        </h2>
        <a href="" className="text-xs font-bold text-primary hover:underline uppercase tracking-widest bg-lightbg px-3 py-1 rounded">
          View All Categories
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredNews.map((article, idx) => (
          <NewsCard key={`feat-${article.id}-${idx}`} article={article} />
        ))}
      </div>

      {/* Ad Placeholder Banner */}
      <div className="w-full my-8 bg-gray-100 border border-border h-24 flex items-center justify-center text-muted text-xs tracking-widest uppercase">
        Advertisement
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
          {secondaryNews.map((article, idx) => (
            <NewsCard key={`sec-${article.id}-${idx}`} article={article} compact={true} />
          ))}
        </div>

        {/* Sidebar Mini Widget */}
        <div className="bg-lightbg border border-border p-4 rounded-lg flex flex-col">
          <h3 className="font-bold text-sm uppercase border-b-2 border-primary pb-2 mb-4 inline-block w-max">
            Editor's Picks
          </h3>
          <div className="flex flex-col space-y-4">
            {mockArticles.slice(0, 3).map((article) => (
              <div key={`pick-${article.id}`} className="group cursor-pointer">
                <h4 className="text-sm font-bold group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h4>
                <span className="text-xxs text-primary font-bold uppercase mt-1 inline-block">
                  {article.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
