import { Clock } from "lucide-react";

interface NewsCardProps {
  article: {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    image: string;
    date: string;
    author: string;
  };
  compact?: boolean;
}

export default function NewsCard({ article, compact = false }: NewsCardProps) {
  return (
    <div className="group cursor-pointer flex flex-col h-full">
      <div className={`relative w-full overflow-hidden img-zoom-container bg-gray-100 rounded-lg mb-3 ${compact ? 'h-40' : 'h-48 md:h-56'}`}>
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover img-zoom"
        />
        <div className="absolute top-2 left-2 bg-primary text-white text-xxs font-bold px-2 py-1 uppercase tracking-wider">
          {article.category}
        </div>
      </div>

      <div className="flex flex-col flex-1">
        <h3 className={`font-bold leading-snug group-hover:text-primary transition-colors mb-2 ${compact ? 'text-sm line-clamp-2' : 'text-base line-clamp-3'}`}>
          {article.title}
        </h3>

        {!compact && (
          <p className="text-muted text-sm mb-3 line-clamp-2">
            {article.excerpt}
          </p>
        )}

        <div className="mt-auto flex items-center justify-between text-muted text-xxs font-medium uppercase tracking-wider">
          <span>{article.author}</span>
          <div className="flex items-center">
            <Clock size={10} className="mr-1" />
            {article.date}
          </div>
        </div>
      </div>
    </div>
  );
}
