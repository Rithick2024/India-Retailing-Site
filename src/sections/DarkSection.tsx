import { PlayCircle, ChevronRight } from "lucide-react";

export default function DarkSection() {
  const sections = [
    {
      title: "Retail With Rasul",
      items: [
        { title: "Senco Gold IPO subscribed 69% on first day of subscription", image: "/videowall2.png" },
        { title: "India D2C Summit & Awards 2023: Trailblazing Brands and Professionals", image: "/videowall3.png" }
      ]
    },
    {
      title: "The Store",
      items: [
        { title: "Fastrack Smart onboards Ranveer Singh as brand ambassador", image: "/videowall4.png" },
        { title: "Planet Fashion by ABFRL opens 2 outlets in Mumbai", image: "/videowall5.png" }
      ]
    },
    {
      title: "IR Studio",
      items: [
        { title: "Zoca Cafe launches outlet in Bengaluru", image: "/videowall6.png" },
        { title: "Unwrapping the Archies' reinvention plan", image: "/videowall7.png" }
      ]
    }
  ];

  return (
    <section className="bg-[#222] text-white py-12">
      <div className="max-w-[1240px] mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold border-l-4 border-red-600 pl-3">IR Video Wall</h2>
          </div>
          <a href="" className="flex items-center text-xs font-bold text-gray-400 uppercase hover:text-red-600 transition-colors">
            See more <ChevronRight size={14} className="ml-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Video */}
          <div className="lg:col-span-5">
            <div className="relative aspect-video lg:aspect-auto lg:h-full group cursor-pointer overflow-hidden rounded-lg">
              <img
                src={`${import.meta.env.BASE_URL}videowall1.png`}
                alt="Main Video"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-red-600/80 transition-colors">
                  <PlayCircle size={40} className="text-white" />
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold leading-tight">Reebok opens store at Lulu Mall, Lucknow</h3>
              </div>
            </div>
          </div>

          {/* Sub Sections */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-6">
            {sections.map((section, idx) => (
              <div key={idx} className="flex flex-col">
                <h4 className="text-[15px] font-bold mb-4 pb-1 border-b border-gray-700 w-fit">{section.title}</h4>
                <div className="flex flex-col gap-6">
                  {section.items.map((item, i) => (
                    <div key={i} className="group cursor-pointer">
                      <div className="relative aspect-video overflow-hidden rounded-lg mb-2">
                        <img
                          src={`${import.meta.env.BASE_URL}${item.image.replace(/^\//, '')}`}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <PlayCircle size={24} className="text-white opacity-80 group-hover:opacity-100" />
                        </div>
                      </div>
                      <h5 className="text-[12px] font-semibold leading-snug text-gray-300 group-hover:text-white transition-colors line-clamp-2">
                        {item.title}
                      </h5>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
