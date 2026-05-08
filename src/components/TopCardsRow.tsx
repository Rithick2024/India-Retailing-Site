export default function TopCardsRow() {
  const cards = [
    {
      category: "HOTSPOTS",
      title: "Luxury hotspots: 5 most expensive high streets in the..",
      image: "/hotspots.png"
    },
    {
      category: "AI",
      title: "5 ways to leverage the power of ChatGPT in retail",
      image: "/ai.png"
    },
    {
      category: "SHIPPING",
      title: "Reliance to open 250 Azorte stores in 2-3 years",
      image: "/shipping.png"
    }
  ];

  return (
    <div className="bg-[#f5f5f5] py-6 w-full">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-white flex items-center p-3 rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-shadow">
              <img
                src={`${import.meta.env.BASE_URL}${card.image.replace(/^\//, '')}`}
                alt={card.title}
                className="w-24 h-16 object-cover rounded-lg flex-shrink-0"
              />
              <div className="ml-4 flex flex-col justify-center">
                <span className="text-[#e30613] text-xs font-bold uppercase tracking-wider mb-1">
                  {card.category}
                </span>
                <h3 className="text-sm font-semibold text-gray-900 leading-snug line-clamp-2">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
