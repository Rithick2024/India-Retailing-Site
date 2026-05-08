import { ChevronRight } from "lucide-react";

export default function WebSpecials() {
  const middleHeadlines = [
    "Cinema industry welcomes lowering GST rates",
    "Patanjali Ayurved to sell 7% stake in Patanjali",
    "Select Citywalk opens 4 new stores in June",
    "Govt imposes import restrictions on certain gold",
    "Joom Marketplace offers a global window for sellers",
  ];

  const bottomCards = [
    {
      title: "Fashion brand icons: Shailesh Chaturvedi of Arvind Fashions",
      image: "/fashion.png",
      tag: "B2B managed marketplace The Yarn"
    },
    {
      title: "DLF creating new retail space in Delhi for France's Galeries Lafayette",
      image: "/dlf.png",
      tag: "Sequoia Capital exits Go Fashion"
    },
    {
      title: "PE firm Carlyle offloads entire, Carlyle through its special-purpose",
      image: "/pefirm.png",
      tag: "B2B managed marketplace The Yarn"
    },
    {
      title: "How AI is enhancing stores, How AI is enhancing stores",
      image: "/howai.png",
      tag: "Sequoia Capital exits Go Fashion"
    },
    {
      title: "Shilpa Shetty Kundra invests, Kisankonnect is at Rs 120 crore",
      image: "/shilpa.png",
      tag: ""
    }
  ];

  return (
    <section className="mb-10">
      <div className="flex items-center gap-2 mb-6 border-b border-gray-100 pb-2">
        <h2 className="text-2xl font-bold text-[#111]">Web Specials</h2>
      </div>
      <div className="w-full h-[2px] bg-red-600 mb-6 -mt-8 w-12"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
        {/* Left: Main Feature */}
        <div className="lg:col-span-4 group cursor-pointer">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <img
              src={`${import.meta.env.BASE_URL}rahul.png`}
              alt="Main Feature"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 p-4">
              <h3 className="text-white text-xl font-bold leading-tight mb-2">
                Rahul Gandhi In Manipur: Chopper Ride After Women Protesters Surround Car
              </h3>
              <p className="text-gray-300 text-sm font-medium">Rahul Gandhi</p>
            </div>
          </div>
        </div>

        {/* Middle: Bullet Headlines */}
        <div className="lg:col-span-5 px-4">
          <ul className="space-y-4">
            {middleHeadlines.map((headline, idx) => (
              <li key={idx} className="flex items-start gap-3 group cursor-pointer">
                <div className="w-2 h-2 rounded-full border-2 border-red-500 mt-2 flex-shrink-0"></div>
                <span className="text-[15px] font-semibold text-gray-800 group-hover:text-red-600 transition-colors">
                  {headline}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Advertisement */}
        <div className="lg:col-span-3">
          <div className="w-full h-[300px] flex flex-col items-center justify-center">
            <span className=" text-[10px] mt-4 text-gray-400 uppercase">- Advertisement -</span>
            <img
              src={`${import.meta.env.BASE_URL}advertisement.png`}
              alt="Ad"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Tags row above bottom cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
        {bottomCards.map((card, idx) => (
          <div key={idx} className="flex items-center gap-2">
            {card.tag && (
              <div className="flex items-center gap-1">
                <div className="w-1 h-1 rounded-full bg-red-500"></div>
                <span className="text-[10px] font-bold text-gray-700 uppercase tracking-tighter truncate">{card.tag}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom row of cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {bottomCards.map((card, idx) => (
          <div key={idx} className="group cursor-pointer">
            <div className="relative aspect-video overflow-hidden rounded-lg mb-3">
              <img
                src={`${import.meta.env.BASE_URL}${card.image.replace(/^\//, '')}`}
                alt={card.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h4 className="text-[13px] font-bold text-gray-900 leading-snug group-hover:text-red-600 transition-colors line-clamp-3">
              {card.title}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}
