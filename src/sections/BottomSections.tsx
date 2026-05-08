import { ChevronRight } from "lucide-react";

export default function BottomSections() {
  const fashionItems = [
    {
      title: "What makes Fila unique is its attitude and...",
      category: "FASHION | FOOD",
      excerpt: "The singer-songwriter has been spotted in the hybrid garment...",
      image: "/fashion1.png",
      tag: "#fashion"
    },
    {
      title: "French Connection announces Siddhant Chaturvedi as ..",
      category: "SIDDHANT | FASHION",
      excerpt: "The singer-songwriter has been spotted in the hybrid garment...",
      image: "/fashion4.png",
      tag: "#fashion"
    },
    {
      title: "Fashion brand icons: Shailesh Chaturvedi of Arvind Fashions",
      category: "SHAILESH | FASHION",
      excerpt: "The Gucci loafer has been a signature style for 70 years.",
      image: "/fashion2.png",
      tag: "#fashion"
    },
    {
      title: "Indian fashion retailers to witness revenue ...",
      category: "FASHION | RETAILERS",
      excerpt: "The singer-songwriter has been spotted in the hybrid garment...",
      image: "/fashion5.png",
      tag: "#fashion"
    },
    {
      title: "Fashion brand icons: Shailesh Chaturvedi of Arvind Fashions",
      category: "LIFESTYLE | FASHION",
      excerpt: "BTS attended the 2022 Grammy Awards in complementary ...",
      image: "/fashion3.png",
      tag: "#fashion"
    },
    {
      title: "Zouk marries heritage with functionality",
      category: "FASHION | ZOUK",
      excerpt: "The singer-songwriter has been spotted in the hybrid garment...",
      image: "/fashion6.png",
      tag: "#lifestyle"
    }
  ];

  const beautyItems = [
    { title: "Sugar Cosmetics unveils its 200th brand-owned store", category: "BEAUTY | NEWS", image: "/beauty1.png" },
    { title: "Athiya Shetty becomes the face of Just Herbs'...", category: "WELLNESS | NEWS", image: "/beauty2.png" },
    { title: "Indian stars dazzle at Cannes 2023", category: "WELLNESS | NEWS", image: "/beauty3.png" },
    { title: "Recode Studios to expand footprint with 5 store...", category: "BEAUTY | NEWS", image: "/beauty4.png" },
    { title: "Recode Studios to expand footprint with 5 store...", category: "BEAUTY | NEWS", image: "/beauty5.png" }
  ];

  const foodItems = [
    { title: "Wow! Momo Foods enters Bhopal with Wow! Momo, Wow China", image: "/food1.png" },
    { title: "Barista Coffee Company opens its first café in Ahmedabad", image: "/food2.png" },
    { title: "Good Flippin' Burgers raises $4 Million in Series A Round", image: "/food3.png" },
    { title: "How Keventers is milking milkshakes business opportunity", image: "/food4.png" },
    { title: "Barbeque Nation Q4 net loss at Rs 11.60cr", image: "/food5.png" }
  ];

  const columnSections = [
    {
      title: "E-Commerce",
      items: [
        { title: "Why retailers can't afford to ignore composable", category: "FASHION | TAYLOR SWIFT", image: "/ecommerce1.png" },
        { title: "ONDC has completely automated grievance", category: "FASHION | TAYLOR SWIFT", image: "/ecommerce2.png" },
        { title: "Shiprocket seller app integrates with ONDC", category: "FASHION | TAYLOR SWIFT", image: "/ecommerce3.png" }
      ]
    },
    {
      title: "People",
      items: [
        { title: "Fashion brand icons: Shailesh Chaturvedi of Arvind Fashions", category: "FASHION | TAYLOR SWIFT", image: "/people1.png" },
        { title: "Zouk marries heritage with functionality", category: "FASHION | TAYLOR SWIFT", image: "/people2.png" },
        { title: "FNP (Ferns N Petals) appoints Ashish Goel as...", category: "FASHION | TAYLOR SWIFT", image: "/people3.png" }
      ]
    },
    {
      title: "D2C Remove Buzz",
      items: [
        { title: "The D2C growth story", category: "FASHION | TAYLOR SWIFT", image: "/d2c1.png" },
        { title: "D2C brand Koparo onboards Mira Kapoor as brand", category: "FASHION | TAYLOR SWIFT", image: "/d2c2.png" },
        { title: "India D2C Summit & Awards 2023 Honors..", category: "FASHION | TAYLOR SWIFT", image: "/d2c3.png" }
      ]
    }
  ];

  const shoppingItems = [
    {
      title: "Select Citywalk opens 4 new stores in June",
      category: "SELECT CITYWALK | LIFESTYLE",
      excerpt: "The new stores opened at Select Citywalk include Choko la, Raymond, Looks Salon and Home Stop",
      image: "/shopping1.png",
      tag: "#reel stories podcast"
    },
    {
      title: "Infiniti Mall collaborates with T-Series & PVR Inox to unveil Adipurush artwork",
      category: "INFINITI MALL | NEWS",
      excerpt: "Constructed by Rubik's Cubes mosaic artist Selwyn Santmajor and Nikhil from Nikhil Artwork",
      image: "/shopping2.png",
      tag: "#reel stories podcast"
    },
    {
      title: "DLF creating new retail space in Delhi for France's Galeries Lafayette",
      category: "MULTIMEDIA | NEWS",
      excerpt: "DLF is earmarking space for the luxury retailer between two of its top-end malls, Emporio and Promenade..",
      image: "/shopping3.png",
      tag: "#reel stories podcast"
    }
  ];

  const podcastItems = [
    { title: "Simplifying Retail Industry Compliance Management", category: "TV & Film: Film Interviews", image: "/podcast1.png" },
    { title: "Simplifying Retail Industry Compliance Management", category: "TV & Film: Film Interviews", image: "/podcast2.png" }
  ];

  const supplyChainItems = [
    { title: "Ecom Express appoints Ajay Chitkara as...", category: "FASHION | TAYLOR SWIFT", image: "/supply1.png" },
    { title: "DTDC sets up super hub in...", category: "FASHION | FASHION", image: "/supply2.png" },
    { title: "KSH Distriparks bolsters its fleet with...", category: "LIFESTYLE | BTS", image: "/supply3.png" }
  ];

  const marketingItems = [
    { title: "Voyage Eyewear collaborates with actor...", category: "FASHION | TAYLOR SWIFT", image: "/marketing1.png" },
    { title: "From Yogathons to special offers, here's a quick...", category: "FASHION | TAYLOR SWIFT", image: "/marketing2.png" },
    { title: "Malabar Gold & Diamonds ropes...", category: "FASHION | TAYLOR SWIFT", image: "/marketing3.png" }
  ];

  const techItems = [
    { title: "PE firm Carlyle offloads entire, Carlyle through its special-purpose", category: "FINANCE | NEWS", image: "/tech1.png" },
    { title: "B2B managed marketplace The Yarn, The investment was..", category: "FINANCE | NEWS", image: "/tech2.png" },
    { title: "Sequoia Capital exits Go Fashion, US-based Sequoia Capital.", category: "FUNDING | NEWS", image: "/tech3.png" },
    { title: "Shilpa Shetty Kundra invests, Kisankonnect is at Rs 120 crore", category: "FUNDING | NEWS", image: "/tech4.png" }
  ];

  const caseStudyItems = [
    { title: "Wow! Momo Foods enters Bhopal with Wow! Momo, Wow China", image: "/case1.png" },
    { title: "'Simplifying Compliance Management for the Retail...", image: "/case2.png" },
    { title: "'Doubling Retailers' Incomes Through Focus On...", image: "/case3.png" }
  ];

  const photoEssayItems = [
    { title: "JACK&JONES x Ranveer Singh for #DontHoldBack 3.0", image: "/photo1.png" },
    { title: "JACK&JONES x Ranveer Singh for #DontHoldBack 3.0", image: "/photo2.png" }
  ];

  const groupEventsItems = [
    { title: "Unwrapping the Archies reinvention plan", date: "Wed, 09 Aug 2023", location: "Barkha Dutt", image: "/event1.png" },
    { title: "India Food Forum", date: "Wed, 09 Aug 2023", location: "Barkha Dutt", image: "/event4.png" },
    { title: "Phygital Retail Convention", date: "Wed, 09 Aug 2023", location: "Barkha Dutt", image: "/event2.png" },
    { title: "India Food Forum", date: "Wed, 09 Aug 2023", location: "Barkha Dutt", image: "/event5.png" },
    { title: "India Fashion Forum", date: "Wed, 09 Aug 2023", location: "Barkha Dutt", image: "/event3.png" },
    { title: "Shopping Centres Next", date: "Wed, 09 Aug 2023", location: "Barkha Dutt", image: "/event6.png" }
  ];

  const bookItems = [
    { title: "Progressive Grocer - June 2023", image: "/book1.png" },
    { title: "Images Business Of Fashion - June 2023", image: "/book2.png" },
    { title: "Shopping Centre News - May 2023", image: "/book3.png" },
    { title: "Phygital May-June 2023", image: "/book4.png" },
    { title: "Progressive Grocer - June 2023", image: "/book5.png" }
  ];

  const reconnectItems = [
    { title: "Arvind Fashions' data-driven digital transformation", excerpt: "In 2018, Uniqlo sent Tomohiko Sei to India to spearhead its entry..", image: "/reconnect1.png" },
    { title: "US denim brand Lee opens outlets in Sikar, Patna..", excerpt: "So far Ace Turtle has opened 80 Lee and Wrangler franchisee-stores", image: "/reconnect2.png" },
    { title: "Arvind Fashions' data-driven digital transformation", excerpt: "In 2018, Uniqlo sent Tomohiko Sei to India to spearhead its entry..", image: "/reconnect3.png" },
    { title: "US denim brand Lee opens outlets in Sikar, Patna..", excerpt: "So far Ace Turtle has opened 80 Lee and Wrangler franchisee-stores", image: "/reconnect4.png" }
  ];

  return (
    <div className="max-w-[1240px] mx-auto px-4 py-10 bg-white">
      {/* Top Banner */}
      <div className="w-3/4 mx-auto mb-10">
        <img src="/guesswatch.png" alt="Guess Watches Ad" className="w-full h-auto rounded-lg shadow-sm" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left: Fashion & Lifestyle */}
        <div className="lg:col-span-8">
          <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-2">
            <h2 className="text-xl font-bold border-l-4 border-red-600 pl-3">Fashion & Lifestyle</h2>
            <a href="" className="flex items-center text-xs font-bold text-gray-400 hover:text-red-600 transition-colors uppercase">
              See more <ChevronRight size={14} className="ml-1" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
            {fashionItems.map((item, idx) => (
              <div key={idx} className="flex gap-4 group cursor-pointer">
                <div className="w-1/3 flex-shrink-0">
                  <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                </div>
                <div className="w-2/3">
                  <div className="text-[10px] font-bold mb-1">
                    <span className="text-red-600">{item.category.split('|')[0]}</span>
                    <span className="text-gray-400"> | {item.category.split('|')[1]}</span>
                  </div>
                  <h3 className="text-[14px] font-bold leading-tight mb-2 group-hover:text-red-600 transition-colors line-clamp-2">{item.title}</h3>
                  <p className="text-[11px] text-gray-500 line-clamp-2 mb-2">{item.excerpt}</p>
                  <span className="text-[10px] text-gray-400 font-medium">{item.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Beauty & Wellness */}
        <div className="lg:col-span-4">
          <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-2">
            <h2 className="text-xl font-bold border-l-4 border-red-600 pl-3">Beauty & Wellness</h2>
            <a href="" className="flex items-center text-xs font-bold text-gray-400 hover:text-red-600 transition-colors uppercase">
              See more <ChevronRight size={14} className="ml-1" />
            </a>
          </div>

          <div>
            {beautyItems.map((item, idx) => (
              <div key={idx} className="flex gap-4 group cursor-pointer border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex-1">
                  <div className="text-[10px] font-bold mb-1">
                    <span className="text-red-600">{item.category.split('|')[0]}</span>
                    <span className="text-gray-400"> | {item.category.split('|')[1]}</span>
                  </div>
                  <h3 className="text-[13px] font-bold leading-snug group-hover:text-red-600 transition-colors line-clamp-2">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Food & Beverage */}
      <div className="mt-16">
        <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-2">
          <h2 className="text-xl font-bold border-l-4 border-red-600 pl-3">Food & Beverage</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          {foodItems.map((item, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="aspect-video overflow-hidden rounded-lg mb-3 bg-gray-100">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-[13px] font-bold leading-snug group-hover:text-red-600 transition-colors line-clamp-2">{item.title}</h3>
              <span className="text-[10px] text-gray-400 mt-1 block">#Lifestyle</span>
            </div>
          ))}
        </div>
      </div>

      {/* Three Column Grid */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        {columnSections.map((section, sIdx) => (
          <div key={sIdx}>
            <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-2">
              <h2 className="text-xl font-bold border-l-4 border-red-600 pl-3">{section.title}</h2>
              <a href="" className="flex items-center text-xs font-bold text-gray-400 hover:text-red-600 transition-colors uppercase">
                See more <ChevronRight size={14} className="ml-1" />
              </a>
            </div>
            <div className="space-y-6">
              {section.items.map((item, iIdx) => (
                <div key={iIdx} className="flex gap-4 group cursor-pointer border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                  <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[9px] font-bold mb-1">
                      <span className="text-red-600 uppercase">{item.category.split('|')[0]}</span>
                      <span className="text-gray-400 uppercase"> | {item.category.split('|')[1]}</span>
                    </div>
                    <h3 className="text-[13px] font-bold leading-snug group-hover:text-red-600 transition-colors line-clamp-3">{item.title}</h3>
                    <span className="text-[10px] text-gray-400 mt-2 block italic font-medium">#fashion</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Shopping Centers & Privilege Corner */}
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8">
          <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-2">
            <h2 className="text-xl font-bold border-l-4 border-red-600 pl-3">Shopping Centers</h2>
            <a href="" className="flex items-center text-xs font-bold text-gray-400 hover:text-red-600 transition-colors uppercase">
              See more <ChevronRight size={14} className="ml-1" />
            </a>
          </div>
          <div className="space-y-8">
            {shoppingItems.map((item, idx) => (
              <div key={idx} className="flex gap-6 group cursor-pointer">
                <div className="w-[40%] flex-shrink-0">
                  <div className="h-[150px] overflow-hidden rounded-lg bg-gray-100">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                </div>
                <div className="w-[60%]">
                  <div className="text-[10px] font-bold mb-1">
                    <span className="text-red-600">{item.category.split('|')[0]}</span>
                    <span className="text-gray-400"> | {item.category.split('|')[1]}</span>
                  </div>
                  <h3 className="text-[16px] font-bold leading-tight mb-2 group-hover:text-red-600 transition-colors line-clamp-2">{item.title}</h3>
                  <p className="text-[12px] text-gray-500 line-clamp-2 mb-3 leading-relaxed">{item.excerpt}</p>
                  <span className="text-[10px] text-gray-400 font-bold">{item.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-2">
              <h2 className="text-xl font-bold border-l-4 border-red-600 pl-3">Privilege Members Corner</h2>
              <a href="" className="flex items-center text-xs font-bold text-gray-400 hover:text-red-600 transition-colors uppercase">
                See more <ChevronRight size={14} className="ml-1" />
              </a>
            </div>
            <div className="group cursor-pointer">
              <div className="relative aspect-video overflow-hidden rounded-lg mb-3 bg-gray-100">
                <img src="/privilege.png" alt="Privilege Corner" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-[14px] font-bold leading-snug group-hover:text-red-600 transition-colors">India D2C Summit & Awards 2023 Honors..</h3>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-2">
              <h2 className="text-xl font-bold border-l-4 border-red-600 pl-3">Podcast</h2>
              <a href="" className="flex items-center text-xs font-bold text-gray-400 hover:text-red-600 transition-colors uppercase">
                See more <ChevronRight size={14} className="ml-1" />
              </a>
            </div>
            <div className="space-y-6">
              {podcastItems.map((item, idx) => (
                <div key={idx} className="flex gap-4 group cursor-pointer border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                  <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[13px] font-bold leading-snug group-hover:text-red-600 transition-colors line-clamp-2 mb-1">{item.title}</h3>
                    <span className="text-[10px] text-gray-400 font-medium">{item.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Center Ad Banner */}
      <div className="w-full my-16">
        <img src="/air_banner.png" alt="AIR Ad" className="w-3/4 mx-auto h-[80px]" />
      </div>

      {/* Triple Column Grid 2 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-2">
            <h2 className="text-xl font-bold border-l-4 border-red-600 pl-3">Supply Chain</h2>
            <a href="" className="flex items-center text-xs font-bold text-gray-400 hover:text-red-600 transition-colors uppercase">
              See more <ChevronRight size={14} className="ml-1" />
            </a>
          </div>
          <div className="space-y-6">
            {supplyChainItems.map((item, idx) => (
              <div key={idx} className="flex gap-4 group cursor-pointer border-b border-gray-50">
                <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100 relative">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-1 left-1 bg-black/40 px-1 py-0.5 rounded text-[8px] text-white flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div> 1 min
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-[9px] font-bold mb-1">
                    <span className="text-red-600 uppercase">{item.category.split('|')[0]}</span>
                    <span className="text-gray-400 uppercase"> | {item.category.split('|')[1]}</span>
                  </div>
                  <h3 className="text-[13px] font-bold leading-snug group-hover:text-red-600 transition-colors line-clamp-3">{item.title}</h3>
                  <span className="text-[10px] text-gray-400 mt-2 block italic font-medium">#fashion</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-2">
            <h2 className="text-xl font-bold border-l-4 border-red-600 pl-3">Marketing</h2>
            <a href="" className="flex items-center text-xs font-bold text-gray-400 hover:text-red-600 transition-colors uppercase">
              See more <ChevronRight size={14} className="ml-1" />
            </a>
          </div>
          <div className="space-y-6">
            {marketingItems.map((item, idx) => (
              <div key={idx} className="flex gap-4 group cursor-pointer border-b border-gray-50">
                <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100 relative">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-1 left-1 bg-black/40 px-1 py-0.5 rounded text-[8px] text-white flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div> 1 min
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-[9px] font-bold mb-1">
                    <span className="text-red-600 uppercase">{item.category.split('|')[0]}</span>
                    <span className="text-gray-400 uppercase"> | {item.category.split('|')[1]}</span>
                  </div>
                  <h3 className="text-[13px] font-bold leading-snug group-hover:text-red-600 transition-colors line-clamp-3">{item.title}</h3>
                  <span className="text-[10px] text-gray-400 mt-2 block italic font-medium">#fashion</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-2">
            <h2 className="text-xl font-bold border-l-4 border-red-600 pl-3">Technology</h2>
            <a href="" className="flex items-center text-xs font-bold text-gray-400 hover:text-red-600 transition-colors uppercase">
              See more <ChevronRight size={14} className="ml-1" />
            </a>
          </div>
          <div className="space-y-5">
            {techItems.map((item, idx) => (
              <div key={idx} className="flex gap-4 group cursor-pointer border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                <div className="w-20 h-14 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex-1">
                  <div className="text-[8px] font-bold mb-0.5">
                    <span className="text-red-600 uppercase">{item.category.split('|')[0]}</span>
                    <span className="text-gray-400 uppercase"> | {item.category.split('|')[1]}</span>
                  </div>
                  <h3 className="text-[11px] font-bold leading-tight group-hover:text-red-600 transition-colors line-clamp-2">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Studies & Photo Essays */}
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7">
          <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-2">
            <h2 className="text-xl font-bold border-l-4 border-red-600 pl-3">Case Studies</h2>
            <a href="" className="flex items-center text-xs font-bold text-gray-400 hover:text-red-600 transition-colors uppercase">
              See more <ChevronRight size={14} className="ml-1" />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {caseStudyItems.map((item, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="aspect-square overflow-hidden rounded-lg mb-3 bg-gray-100 relative">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-2 left-2 bg-white/90 p-1 rounded-full">
                    <div className="w-3 h-3 bg-gray-400 rounded-lg"></div>
                  </div>
                </div>
                <h3 className="text-[12px] font-bold leading-tight group-hover:text-red-600 transition-colors line-clamp-3">{item.title}</h3>
                <span className="text-[10px] text-gray-400 mt-2 block font-medium">#Fashion</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-2">
            <h2 className="text-xl font-bold border-l-4 border-red-600 pl-3">Photo Essays</h2>
            <a href="" className="flex items-center text-xs font-bold text-gray-400 hover:text-red-600 transition-colors uppercase">
              See more <ChevronRight size={14} className="ml-1" />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {photoEssayItems.map((item, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="aspect-square overflow-hidden rounded-lg mb-3 bg-gray-100 relative">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-2 left-2 bg-white/90 p-1 rounded-full">
                    <div className="w-3 h-3 bg-gray-400 rounded-lg"></div>
                  </div>
                </div>
                <h3 className="text-[12px] font-bold leading-tight group-hover:text-red-600 transition-colors line-clamp-3">{item.title}</h3>
                <span className="text-[10px] text-gray-400 mt-2 block font-medium">#Lifestyle</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Images Group Events */}
      <div className="mt-12">
        <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-2">
          <h2 className="text-xl font-bold border-l-4 border-red-600 pl-3">Images Group Events</h2>
          <a href="" className="flex items-center text-xs font-bold text-gray-400 hover:text-red-600 transition-colors uppercase">
            See more <ChevronRight size={14} className="ml-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Featured Event */}
          <div className="lg:col-span-4 bg-gray-50 p-6 rounded-lg group cursor-pointer">
            <div className="aspect-[4/5] overflow-hidden rounded-lg mb-4 bg-white p-4">
              <img src="/event_main.png" alt="Featured Event" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="text-[10px] font-bold text-red-600 uppercase mb-2">Technology</div>
            <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 transition-colors">D2C India</h3>
            <div className="flex items-center gap-2 text-[10px] text-gray-400 font-bold mb-3">
              <span>Wed, 09 Aug 2023</span> | <span>Barkha Dutt</span>
            </div>
            <p className="text-[12px] text-gray-500 leading-relaxed">Get inspired building brands for the next decade of consumption</p>
          </div>

          {/* Events Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {groupEventsItems.map((event, idx) => (
              <div key={idx} className="flex gap-4 p-4 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                <div className="w-24 h-24 flex-shrink-0 bg-gray-50 rounded-lg overflow-hidden p-2">
                  <img src={event.image} alt={event.title} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <h4 className="text-[14px] font-bold leading-tight group-hover:text-red-600 transition-colors line-clamp-2 mb-1">{event.title}</h4>
                    <p className="text-[11px] text-gray-400 line-clamp-2 mb-1">The Middle East Retail Forum (MRF) is a powerful</p>
                    <div className="flex items-center gap-1 text-[9px] text-gray-400 font-bold">
                      <span>Wed, 09 Aug 2023</span> | <span>Barkha Dutt</span>
                    </div>
                  </div>
                  <button className="text-[10px] font-bold text-red-600 hover:underline text-left mt-2">Registration Now &gt;</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Book Store */}
      <div className="mt-16">
        <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-2">
          <h2 className="text-xl font-bold border-l-4 border-red-600 pl-3">Book Store</h2>
          <a href="" className="flex items-center text-xs font-bold text-gray-400 hover:text-red-600 transition-colors uppercase">
            See more <ChevronRight size={14} className="ml-1" />
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {bookItems.map((book, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden rounded-lg mb-3 shadow-md border border-gray-100 bg-gray-50">
                <img src={book.image} alt={book.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-[12px] font-bold leading-tight group-hover:text-red-600 transition-colors">{book.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Reconnect */}
      <div className="mt-16">
        <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-2">
          <h2 className="text-xl font-bold border-l-4 border-red-600 pl-3">Reconnect</h2>
          <a href="" className="flex items-center text-xs font-bold text-gray-400 hover:text-red-600 transition-colors uppercase">
            See more <ChevronRight size={14} className="ml-1" />
          </a>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 grid grid-cols-1 lg:grid-cols-4 gap-6">
            {reconnectItems.map((item, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="h-[150px] overflow-hidden rounded-lg mb-3 bg-gray-100">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="text-[14px] font-bold leading-snug group-hover:text-red-600 transition-colors mb-2">{item.title}</h3>
                <p className="text-[11px] text-gray-400 line-clamp-2 mb-2">{item.excerpt}</p>
                <span className="text-[10px] text-gray-400 font-bold uppercase">#lifestyle</span>
              </div>
            ))}
          </div>
          <div className="lg:col-span-4">
            <div className="h-[270px] flex flex-col">
              <span className="text-[10px] text-gray-400 uppercase text-center mb-1">- Advertisement -</span>
              <div className="flex-1 bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                <img src="/reconnect_ad.png" alt="Ad" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final Ad Banner */}
      <div className="w-full mt-16 pb-10">
        <span className="text-[10px] text-gray-400 uppercase text-center block mb-1">- Advertisement -</span>
        <img src="/air_banner.png" alt="AIR Ad" className="w-3/4 mx-auto h-[80px]" />
      </div>
    </div>
  );
}
